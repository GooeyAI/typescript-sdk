/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Gooey from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace RenderImageSearchResultsWithAi {
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

export class RenderImageSearchResultsWithAi {
    constructor(protected readonly _options: RenderImageSearchResultsWithAi.Options = {}) {}

    /**
     * @param {Gooey.GoogleImageGenPageRequest} request
     * @param {RenderImageSearchResultsWithAi.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     * @throws {@link Gooey.InternalServerError}
     *
     * @example
     *     await client.renderImageSearchResultsWithAi.googleImageGen({
     *         searchQuery: "search_query",
     *         textPrompt: "text_prompt"
     *     })
     */
    public async googleImageGen(
        request: Gooey.GoogleImageGenPageRequest,
        requestOptions?: RenderImageSearchResultsWithAi.RequestOptions
    ): Promise<Gooey.GoogleImageGenPageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v2/GoogleImageGen/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: serializers.GoogleImageGenPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GoogleImageGenPageResponse.parseOrThrow(_response.body, {
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
     * @param {Gooey.GoogleImageGenPageRequest} request
     * @param {RenderImageSearchResultsWithAi.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.renderImageSearchResultsWithAi.asyncGoogleImageGen({
     *         searchQuery: "search_query",
     *         textPrompt: "text_prompt"
     *     })
     */
    public async asyncGoogleImageGen(
        request: Gooey.GoogleImageGenPageRequest,
        requestOptions?: RenderImageSearchResultsWithAi.RequestOptions
    ): Promise<Gooey.AsyncApiResponseModelV3> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/GoogleImageGen/async/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: serializers.GoogleImageGenPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * @param {Gooey.StatusGoogleImageGenRequest} request
     * @param {RenderImageSearchResultsWithAi.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.renderImageSearchResultsWithAi.statusGoogleImageGen({
     *         runId: "run_id"
     *     })
     */
    public async statusGoogleImageGen(
        request: Gooey.StatusGoogleImageGenRequest,
        requestOptions?: RenderImageSearchResultsWithAi.RequestOptions
    ): Promise<Gooey.GoogleImageGenPageStatusResponse> {
        const { runId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["run_id"] = runId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/GoogleImageGen/status/"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GoogleImageGenPageStatusResponse.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["FERN_API_KEY"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }

    protected async _getCustomAuthorizationHeaders() {
        const authorizationValue = await core.Supplier.get(this._options.authorization);
        return { Authorization: authorizationValue };
    }
}
