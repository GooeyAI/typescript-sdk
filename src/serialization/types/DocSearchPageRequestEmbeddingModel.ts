/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const DocSearchPageRequestEmbeddingModel: core.serialization.Schema<
    serializers.DocSearchPageRequestEmbeddingModel.Raw,
    Gooey.DocSearchPageRequestEmbeddingModel
> = core.serialization.enum_([
    "openai_3_large",
    "openai_3_small",
    "openai_ada_2",
    "e5_large_v2",
    "e5_base_v2",
    "multilingual_e5_base",
    "multilingual_e5_large",
    "gte_large",
    "gte_base",
]);

export declare namespace DocSearchPageRequestEmbeddingModel {
    type Raw =
        | "openai_3_large"
        | "openai_3_small"
        | "openai_ada_2"
        | "e5_large_v2"
        | "e5_base_v2"
        | "multilingual_e5_base"
        | "multilingual_e5_large"
        | "gte_large"
        | "gte_base";
}
