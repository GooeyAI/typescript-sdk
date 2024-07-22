/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeFunction } from "./RecipeFunction";
import { SerpSearchLocation } from "./SerpSearchLocation";
import { SerpSearchType } from "./SerpSearchType";
import { GoogleGptPageRequestSelectedModel } from "./GoogleGptPageRequestSelectedModel";
import { GoogleGptPageRequestEmbeddingModel } from "./GoogleGptPageRequestEmbeddingModel";
import { RunSettings } from "./RunSettings";

export const GoogleGptPageRequest: core.serialization.ObjectSchema<
    serializers.GoogleGptPageRequest.Raw,
    Gooey.GoogleGptPageRequest
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    serpSearchLocation: core.serialization.property("serp_search_location", SerpSearchLocation.optional()),
    scaleserpLocations: core.serialization.property(
        "scaleserp_locations",
        core.serialization.list(core.serialization.string()).optional()
    ),
    serpSearchType: core.serialization.property("serp_search_type", SerpSearchType.optional()),
    scaleserpSearchField: core.serialization.property("scaleserp_search_field", core.serialization.string().optional()),
    searchQuery: core.serialization.property("search_query", core.serialization.string()),
    siteFilter: core.serialization.property("site_filter", core.serialization.string()),
    taskInstructions: core.serialization.property("task_instructions", core.serialization.string().optional()),
    queryInstructions: core.serialization.property("query_instructions", core.serialization.string().optional()),
    selectedModel: core.serialization.property("selected_model", GoogleGptPageRequestSelectedModel.optional()),
    avoidRepetition: core.serialization.property("avoid_repetition", core.serialization.boolean().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
    samplingTemperature: core.serialization.property("sampling_temperature", core.serialization.number().optional()),
    maxSearchUrls: core.serialization.property("max_search_urls", core.serialization.number().optional()),
    maxReferences: core.serialization.property("max_references", core.serialization.number().optional()),
    maxContextWords: core.serialization.property("max_context_words", core.serialization.number().optional()),
    scrollJump: core.serialization.property("scroll_jump", core.serialization.number().optional()),
    embeddingModel: core.serialization.property("embedding_model", GoogleGptPageRequestEmbeddingModel.optional()),
    denseWeight: core.serialization.property("dense_weight", core.serialization.number().optional()),
    settings: RunSettings.optional(),
});

export declare namespace GoogleGptPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        serp_search_location?: SerpSearchLocation.Raw | null;
        scaleserp_locations?: string[] | null;
        serp_search_type?: SerpSearchType.Raw | null;
        scaleserp_search_field?: string | null;
        search_query: string;
        site_filter: string;
        task_instructions?: string | null;
        query_instructions?: string | null;
        selected_model?: GoogleGptPageRequestSelectedModel.Raw | null;
        avoid_repetition?: boolean | null;
        num_outputs?: number | null;
        quality?: number | null;
        max_tokens?: number | null;
        sampling_temperature?: number | null;
        max_search_urls?: number | null;
        max_references?: number | null;
        max_context_words?: number | null;
        scroll_jump?: number | null;
        embedding_model?: GoogleGptPageRequestEmbeddingModel.Raw | null;
        dense_weight?: number | null;
        settings?: RunSettings.Raw | null;
    }
}