/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeFunction } from "./RecipeFunction";
import { DocSearchPageRequestKeywordQuery } from "./DocSearchPageRequestKeywordQuery";
import { DocSearchPageRequestEmbeddingModel } from "./DocSearchPageRequestEmbeddingModel";
import { DocSearchPageRequestSelectedModel } from "./DocSearchPageRequestSelectedModel";
import { DocSearchPageRequestCitationStyle } from "./DocSearchPageRequestCitationStyle";
import { DocSearchPageRequestResponseFormatType } from "./DocSearchPageRequestResponseFormatType";
import { RunSettings } from "./RunSettings";

export const DocSearchPageRequest: core.serialization.ObjectSchema<
    serializers.DocSearchPageRequest.Raw,
    Gooey.DocSearchPageRequest
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    searchQuery: core.serialization.property("search_query", core.serialization.string()),
    keywordQuery: core.serialization.property("keyword_query", DocSearchPageRequestKeywordQuery.optional()),
    documents: core.serialization.list(core.serialization.string()).optional(),
    maxReferences: core.serialization.property("max_references", core.serialization.number().optional()),
    maxContextWords: core.serialization.property("max_context_words", core.serialization.number().optional()),
    scrollJump: core.serialization.property("scroll_jump", core.serialization.number().optional()),
    docExtractUrl: core.serialization.property("doc_extract_url", core.serialization.string().optional()),
    embeddingModel: core.serialization.property("embedding_model", DocSearchPageRequestEmbeddingModel.optional()),
    denseWeight: core.serialization.property("dense_weight", core.serialization.number().optional()),
    taskInstructions: core.serialization.property("task_instructions", core.serialization.string().optional()),
    queryInstructions: core.serialization.property("query_instructions", core.serialization.string().optional()),
    selectedModel: core.serialization.property("selected_model", DocSearchPageRequestSelectedModel.optional()),
    citationStyle: core.serialization.property("citation_style", DocSearchPageRequestCitationStyle.optional()),
    avoidRepetition: core.serialization.property("avoid_repetition", core.serialization.boolean().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
    samplingTemperature: core.serialization.property("sampling_temperature", core.serialization.number().optional()),
    responseFormatType: core.serialization.property(
        "response_format_type",
        DocSearchPageRequestResponseFormatType.optional()
    ),
    settings: RunSettings.optional(),
});

export declare namespace DocSearchPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        search_query: string;
        keyword_query?: DocSearchPageRequestKeywordQuery.Raw | null;
        documents?: string[] | null;
        max_references?: number | null;
        max_context_words?: number | null;
        scroll_jump?: number | null;
        doc_extract_url?: string | null;
        embedding_model?: DocSearchPageRequestEmbeddingModel.Raw | null;
        dense_weight?: number | null;
        task_instructions?: string | null;
        query_instructions?: string | null;
        selected_model?: DocSearchPageRequestSelectedModel.Raw | null;
        citation_style?: DocSearchPageRequestCitationStyle.Raw | null;
        avoid_repetition?: boolean | null;
        num_outputs?: number | null;
        quality?: number | null;
        max_tokens?: number | null;
        sampling_temperature?: number | null;
        response_format_type?: DocSearchPageRequestResponseFormatType.Raw | null;
        settings?: RunSettings.Raw | null;
    }
}
