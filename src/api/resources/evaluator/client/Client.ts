/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Gooey from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Evaluator {
    interface Options {
        environment: core.Supplier<string>;
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

export class Evaluator {
    constructor(protected readonly _options: Evaluator.Options) {}

    /**
     * @param {Gooey.BulkEvalPageRequest} request
     * @param {Evaluator.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     * @throws {@link Gooey.InternalServerError}
     *
     * @example
     *     await client.evaluator.bulkEval({
     *         documents: ["documents"]
     *     })
     */
    public async bulkEval(
        request: Gooey.BulkEvalPageRequest,
        requestOptions?: Evaluator.RequestOptions
    ): Promise<Gooey.BulkEvalPageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v2/bulk-eval/"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkEvalPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkEvalPageResponse.parseOrThrow(_response.body, {
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
     * @param {Gooey.BulkEvalPageRequest} request
     * @param {Evaluator.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.evaluator.asyncBulkEval({
     *         documents: ["documents"]
     *     })
     */
    public async asyncBulkEval(
        request: Gooey.BulkEvalPageRequest,
        requestOptions?: Evaluator.RequestOptions
    ): Promise<Gooey.AsyncApiResponseModelV3> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v3/bulk-eval/async/"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkEvalPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * @param {Gooey.StatusBulkEvalRequest} request
     * @param {Evaluator.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.evaluator.statusBulkEval({
     *         runId: "run_id"
     *     })
     */
    public async statusBulkEval(
        request: Gooey.StatusBulkEvalRequest,
        requestOptions?: Evaluator.RequestOptions
    ): Promise<Gooey.BulkEvalPageStatusResponse> {
        const { runId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["run_id"] = runId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v3/bulk-eval/status/"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "gooey",
                "X-Fern-SDK-Version": "0.0.1",
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
            return serializers.BulkEvalPageStatusResponse.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const authorizationValue = await core.Supplier.get(this._options.authorization);
        return { Authorization: authorizationValue };
    }
}
