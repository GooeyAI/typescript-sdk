/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface GoogleGptPageRequest {
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    serpSearchLocation?: Gooey.SerpSearchLocation;
    /** DEPRECATED: use `serp_search_location` instead */
    scaleserpLocations?: string[];
    serpSearchType?: Gooey.SerpSearchType;
    /** DEPRECATED: use `serp_search_type` instead */
    scaleserpSearchField?: string;
    searchQuery: string;
    siteFilter: string;
    taskInstructions?: string;
    queryInstructions?: string;
    selectedModel?: Gooey.GoogleGptPageRequestSelectedModel;
    avoidRepetition?: boolean;
    numOutputs?: number;
    quality?: number;
    maxTokens?: number;
    samplingTemperature?: number;
    maxSearchUrls?: number;
    maxReferences?: number;
    maxContextWords?: number;
    scrollJump?: number;
    embeddingModel?: Gooey.GoogleGptPageRequestEmbeddingModel;
    /**
     * Weightage for dense vs sparse embeddings. `0` for sparse, `1` for dense, `0.5` for equal weight.
     * Generally speaking, dense embeddings excel at understanding the context of the query, whereas sparse vectors excel at keyword matches.
     */
    denseWeight?: number;
    settings?: Gooey.RunSettings;
}