/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Gooey from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace GeneratePeopleAlsoAskSeoContent {
    interface Options {
        environment?: core.Supplier<environments.GooeyEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class GeneratePeopleAlsoAskSeoContent {
    constructor(protected readonly _options: GeneratePeopleAlsoAskSeoContent.Options) {}

    /**
     * @param {Gooey.RelatedQnAPageRequest} request
     * @param {GeneratePeopleAlsoAskSeoContent.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     * @throws {@link Gooey.InternalServerError}
     *
     * @example
     *     await client.generatePeopleAlsoAskSeoContent.relatedQnaMaker({
     *         searchQuery: "search_query",
     *         siteFilter: "site_filter"
     *     })
     */
    public async relatedQnaMaker(
        request: Gooey.RelatedQnAPageRequest,
        requestOptions?: GeneratePeopleAlsoAskSeoContent.RequestOptions
    ): Promise<Gooey.RelatedQnAPageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v2/related-qna-maker/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RelatedQnAPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RelatedQnAPageResponse.parseOrThrow(_response.body, {
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
     * @param {Gooey.RelatedQnAPageRequest} request
     * @param {GeneratePeopleAlsoAskSeoContent.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.generatePeopleAlsoAskSeoContent.asyncRelatedQnaMaker({
     *         searchQuery: "search_query",
     *         siteFilter: "site_filter"
     *     })
     */
    public async asyncRelatedQnaMaker(
        request: Gooey.RelatedQnAPageRequest,
        requestOptions?: GeneratePeopleAlsoAskSeoContent.RequestOptions
    ): Promise<Gooey.AsyncApiResponseModelV3> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/related-qna-maker/async/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RelatedQnAPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * @param {Gooey.StatusRelatedQnaMakerRequest} request
     * @param {GeneratePeopleAlsoAskSeoContent.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.generatePeopleAlsoAskSeoContent.statusRelatedQnaMaker({
     *         runId: "run_id"
     *     })
     */
    public async statusRelatedQnaMaker(
        request: Gooey.StatusRelatedQnaMakerRequest,
        requestOptions?: GeneratePeopleAlsoAskSeoContent.RequestOptions
    ): Promise<Gooey.RelatedQnAPageStatusResponse> {
        const { runId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["run_id"] = runId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/related-qna-maker/status/"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RelatedQnAPageStatusResponse.parseOrThrow(_response.body, {
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
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
