/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {
 *         searchQuery: "search_query",
 *         keywords: "keywords",
 *         title: "title",
 *         companyUrl: "company_url"
 *     }
 */
export interface SeoSummaryPageRequest {
    exampleId?: string;
    searchQuery: string;
    keywords: string;
    title: string;
    companyUrl: string;
    taskInstructions?: string;
    enableHtml?: boolean;
    selectedModel?: Gooey.SeoSummaryPageRequestSelectedModel;
    maxSearchUrls?: number;
    enableCrosslinks?: boolean;
    seed?: number;
    avoidRepetition?: boolean;
    numOutputs?: number;
    quality?: number;
    maxTokens?: number;
    samplingTemperature?: number;
    responseFormatType?: Gooey.SeoSummaryPageRequestResponseFormatType;
    serpSearchLocation?: Gooey.SerpSearchLocation;
    /** DEPRECATED: use `serp_search_location` instead */
    scaleserpLocations?: string[];
    serpSearchType?: Gooey.SerpSearchType;
    /** DEPRECATED: use `serp_search_type` instead */
    scaleserpSearchField?: string;
    settings?: Gooey.RunSettings;
}
