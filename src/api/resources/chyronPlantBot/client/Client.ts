/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Gooey from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace ChyronPlantBot {
    interface Options {
        environment?: core.Supplier<environments.GooeyEnvironment | string>;
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

export class ChyronPlantBot {
    constructor(protected readonly _options: ChyronPlantBot.Options = {}) {}

    /**
     * @param {Gooey.ChyronPlantPageRequest} request
     * @param {ChyronPlantBot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     * @throws {@link Gooey.InternalServerError}
     *
     * @example
     *     await client.chyronPlantBot.chyronPlant({
     *         midiNotes: "C#1 B6 A2 A1 A3 A2"
     *     })
     */
    public async chyronPlant(
        request: Gooey.ChyronPlantPageRequest,
        requestOptions?: ChyronPlantBot.RequestOptions
    ): Promise<Gooey.ChyronPlantPageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v2/ChyronPlant/"
            ),
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
            body: serializers.ChyronPlantPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ChyronPlantPageResponse.parseOrThrow(_response.body, {
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
     * @param {Gooey.ChyronPlantPageRequest} request
     * @param {ChyronPlantBot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.chyronPlantBot.asyncChyronPlant({
     *         midiNotes: "C#1 B6 A2 A1 A3 A2"
     *     })
     */
    public async asyncChyronPlant(
        request: Gooey.ChyronPlantPageRequest,
        requestOptions?: ChyronPlantBot.RequestOptions
    ): Promise<Gooey.AsyncApiResponseModelV3> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/ChyronPlant/async/"
            ),
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
            body: serializers.ChyronPlantPageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * @param {Gooey.StatusChyronPlantRequest} request
     * @param {ChyronPlantBot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Gooey.PaymentRequiredError}
     * @throws {@link Gooey.UnprocessableEntityError}
     * @throws {@link Gooey.TooManyRequestsError}
     *
     * @example
     *     await client.chyronPlantBot.statusChyronPlant({
     *         runId: "run_id"
     *     })
     */
    public async statusChyronPlant(
        request: Gooey.StatusChyronPlantRequest,
        requestOptions?: ChyronPlantBot.RequestOptions
    ): Promise<Gooey.ChyronPlantPageStatusResponse> {
        const { runId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["run_id"] = runId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.GooeyEnvironment.Default,
                "v3/ChyronPlant/status/"
            ),
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
            return serializers.ChyronPlantPageStatusResponse.parseOrThrow(_response.body, {
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