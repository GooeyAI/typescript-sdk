/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Gooey from "../../../api/index";
import * as core from "../../../core";
import { SeoSummaryPageRequestSelectedModel } from "../../types/SeoSummaryPageRequestSelectedModel";
import { SeoSummaryPageRequestResponseFormatType } from "../../types/SeoSummaryPageRequestResponseFormatType";
import { SerpSearchLocation } from "../../types/SerpSearchLocation";
import { SerpSearchType } from "../../types/SerpSearchType";
import { RunSettings } from "../../types/RunSettings";

export const SeoSummaryPageRequest: core.serialization.Schema<
    serializers.SeoSummaryPageRequest.Raw,
    Omit<Gooey.SeoSummaryPageRequest, "exampleId">
> = core.serialization.object({
    searchQuery: core.serialization.property("search_query", core.serialization.string()),
    keywords: core.serialization.string(),
    title: core.serialization.string(),
    companyUrl: core.serialization.property("company_url", core.serialization.string()),
    taskInstructions: core.serialization.property("task_instructions", core.serialization.string().optional()),
    enableHtml: core.serialization.property("enable_html", core.serialization.boolean().optional()),
    selectedModel: core.serialization.property("selected_model", SeoSummaryPageRequestSelectedModel.optional()),
    maxSearchUrls: core.serialization.property("max_search_urls", core.serialization.number().optional()),
    enableCrosslinks: core.serialization.property("enable_crosslinks", core.serialization.boolean().optional()),
    seed: core.serialization.number().optional(),
    avoidRepetition: core.serialization.property("avoid_repetition", core.serialization.boolean().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
    samplingTemperature: core.serialization.property("sampling_temperature", core.serialization.number().optional()),
    responseFormatType: core.serialization.property(
        "response_format_type",
        SeoSummaryPageRequestResponseFormatType.optional()
    ),
    serpSearchLocation: core.serialization.property("serp_search_location", SerpSearchLocation.optional()),
    scaleserpLocations: core.serialization.property(
        "scaleserp_locations",
        core.serialization.list(core.serialization.string()).optional()
    ),
    serpSearchType: core.serialization.property("serp_search_type", SerpSearchType.optional()),
    scaleserpSearchField: core.serialization.property("scaleserp_search_field", core.serialization.string().optional()),
    settings: RunSettings.optional(),
});

export declare namespace SeoSummaryPageRequest {
    interface Raw {
        search_query: string;
        keywords: string;
        title: string;
        company_url: string;
        task_instructions?: string | null;
        enable_html?: boolean | null;
        selected_model?: SeoSummaryPageRequestSelectedModel.Raw | null;
        max_search_urls?: number | null;
        enable_crosslinks?: boolean | null;
        seed?: number | null;
        avoid_repetition?: boolean | null;
        num_outputs?: number | null;
        quality?: number | null;
        max_tokens?: number | null;
        sampling_temperature?: number | null;
        response_format_type?: SeoSummaryPageRequestResponseFormatType.Raw | null;
        serp_search_location?: SerpSearchLocation.Raw | null;
        scaleserp_locations?: string[] | null;
        serp_search_type?: SerpSearchType.Raw | null;
        scaleserp_search_field?: string | null;
        settings?: RunSettings.Raw | null;
    }
}
