/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Gooey from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace CompareAiImageUpscalers {
    interface Options {
        environment?: core.Supplier<environments.GooeyEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Authorization header */
        authorization?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Authorization header */
        authorization?: string | undefined;
    }
}

export class CompareAiImageUpscalers {
    constructor(protected readonly _options: CompareAiImageUpscalers.Options = {}) {}

    /**
     * @param {Gooey.CompareUpscalerPageRequest} request
     * @param {CompareAiImageUpscalers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     * @throws {@link Gooey.InternalServerError}
     *
     * @example
     *     await client.compareAiImageUpscalers.compareAiUpscalers({
     *         scale: 1
     *     })
     */
    public async compareAiUpscalers(
        request: Gooey.CompareUpscalerPageRequest,
        requestOptions?: CompareAiImageUpscalers.RequestOptions
    ): Promise<Gooey.CompareUpscalerPageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v2/compare-ai-upscalers/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1-beta0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CompareUpscalerPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CompareUpscalerPageResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 402:
                    throw new Gooey.PaymentRequiredError(_response.error.body);
                case 422:
                    throw new Gooey.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Gooey.TooManyRequestsError(
                        serializers.GenericErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Gooey.InternalServerError(
                        serializers.FailedReponseModelV2.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.GooeyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GooeyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GooeyTimeoutError();
            case "unknown":
                throw new errors.GooeyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Gooey.CompareUpscalerPageRequest} request
     * @param {CompareAiImageUpscalers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.compareAiImageUpscalers.asyncCompareAiUpscalers({
     *         scale: 1
     *     })
     */
    public async asyncCompareAiUpscalers(
        request: Gooey.CompareUpscalerPageRequest,
        requestOptions?: CompareAiImageUpscalers.RequestOptions
    ): Promise<Gooey.AsyncApiResponseModelV3> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/compare-ai-upscalers/async/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1-beta0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CompareUpscalerPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AsyncApiResponseModelV3.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 402:
                    throw new Gooey.PaymentRequiredError(_response.error.body);
                case 422:
                    throw new Gooey.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Gooey.TooManyRequestsError(
                        serializers.GenericErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.GooeyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GooeyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GooeyTimeoutError();
            case "unknown":
                throw new errors.GooeyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Gooey.StatusCompareAiUpscalersRequest} request
     * @param {CompareAiImageUpscalers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.compareAiImageUpscalers.statusCompareAiUpscalers({
     *         runId: "run_id"
     *     })
     */
    public async statusCompareAiUpscalers(
        request: Gooey.StatusCompareAiUpscalersRequest,
        requestOptions?: CompareAiImageUpscalers.RequestOptions
    ): Promise<Gooey.CompareUpscalerPageStatusResponse> {
        const { runId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["run_id"] = runId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/compare-ai-upscalers/status/"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1-beta0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CompareUpscalerPageStatusResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 402:
                    throw new Gooey.PaymentRequiredError(_response.error.body);
                case 422:
                    throw new Gooey.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Gooey.TooManyRequestsError(
                        serializers.GenericErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.GooeyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GooeyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GooeyTimeoutError();
            case "unknown":
                throw new errors.GooeyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["GOOEY_API_KEY"];
        if (bearer == null) {
            throw new errors.GooeyError({
                message: "Please specify GOOEY_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }

    protected async _getCustomAuthorizationHeaders() {
        const authorizationValue = await core.Supplier.get(this._options.authorization);
        return { Authorization: authorizationValue };
    }
}
