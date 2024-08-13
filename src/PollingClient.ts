import { AsyncApiResponseModelV3 } from "api";
import { GooeyClient } from "Client";
import { Fetcher, fetcher } from "core";
import { FailedResponse, SuccessfulResponse } from "core/fetcher/APIResponse";

export class PollingClient extends GooeyClient {
    constructor(options: GooeyClient.Options) {
        super({
            ...options,
            fetcher: async (args: Fetcher.Args) => {
                const response = await fetcher<AsyncApiResponseModelV3>(args);

                if (response.ok) {
                    const location = response.headers?.get("Location") || response.body.statusUrl;

                    if (location) {
                        let polling = true;
                        new Promise(resolve => setTimeout(resolve, 15000)).then( () => {
                            polling = false;
                        });

                        while (polling) {
                            const statusResponse = await fetcher<{
                                status: "completed" | "failed"
                            }>({
                                url: location,
                                method: "GET",
                                headers: {
                                    Authorization: `Bearer ${options.apiKey}`
                                }
                            }) as SuccessfulResponse<any>;

                            if (statusResponse.ok && statusResponse.body.status === "completed") {
                                return statusResponse;
                            } else if (statusResponse.ok && statusResponse.body.status === "failed") {
                                return {
                                    ok: false,
                                    error: {
                                        reason: 'status-code',
                                        body: statusResponse.body
                                    }
                                } as FailedResponse<Fetcher.Error>;
                            }
                        }

                        if (!polling) {
                            return {
                                ok: false,
                                error: {
                                    reason: 'timeout',
                                    errorMessage: 'async response timed out'
                                }
                            }
                        }
                    } 
                }

                return response;
            }
        });
    }
}
