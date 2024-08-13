import { GooeyClient as GooeyInternalClient } from "./Client";
import { AsyncApiResponseModelV3 } from "./api";
import { Fetcher, fetcher } from "./core";
import { FailedResponse, SuccessfulResponse } from "./core/fetcher/APIResponse";

export class GooeyClient extends GooeyInternalClient {
    constructor(options: GooeyInternalClient.Options) {
        super({
            ...options,
            fetcher: async (args: Fetcher.Args) => {
                const response = await fetcher<AsyncApiResponseModelV3>(args);

                if (response.ok) {
                    const location = response.headers?.get("Location") || response.body.statusUrl;

                    if (location) {
                        const startTime = Date.now();

                        while (Date.now() - startTime < 30000) {
                            const statusResponse = (await fetcher<{
                                status: "completed" | "failed";
                            }>({
                                url: location,
                                method: "GET",
                                headers: {
                                    ...args.headers,
                                    Authorization: `Bearer ${options.apiKey}`,
                                },
                            })) as SuccessfulResponse<any>;

                            if (statusResponse.ok && statusResponse.body.status === "completed") {
                                return statusResponse;
                            } else if (statusResponse.ok && statusResponse.body.status === "failed") {
                                return {
                                    ok: false,
                                    error: {
                                        reason: "status-code",
                                        body: statusResponse.body,
                                    },
                                } as FailedResponse<Fetcher.Error>;
                            } else if (!statusResponse.ok) {
                                return statusResponse;
                            }
                        }

                        return {
                            ok: false,
                            error: {
                                reason: "timeout",
                                errorMessage: "async response timed out",
                            },
                        };
                    }
                }

                return response;
            },
        });
    }
}
