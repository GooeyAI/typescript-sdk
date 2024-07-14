/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type RelatedQnADocPageRequestEmbeddingModel =
    | "openai_3_large"
    | "openai_3_small"
    | "openai_ada_2"
    | "e5_large_v2"
    | "e5_base_v2"
    | "multilingual_e5_base"
    | "multilingual_e5_large"
    | "gte_large"
    | "gte_base";

export const RelatedQnADocPageRequestEmbeddingModel = {
    Openai3Large: "openai_3_large",
    Openai3Small: "openai_3_small",
    OpenaiAda2: "openai_ada_2",
    E5LargeV2: "e5_large_v2",
    E5BaseV2: "e5_base_v2",
    MultilingualE5Base: "multilingual_e5_base",
    MultilingualE5Large: "multilingual_e5_large",
    GteLarge: "gte_large",
    GteBase: "gte_base",
} as const;
