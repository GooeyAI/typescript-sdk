/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../../../index";

/**
 * @example
 *     {}
 */
export interface CompareLlmPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    inputPrompt?: string;
    selectedModels?: Gooey.CompareLlmPageRequestSelectedModelsItem[];
    avoidRepetition?: boolean;
    numOutputs?: number;
    quality?: number;
    maxTokens?: number;
    samplingTemperature?: number;
    responseFormatType?: Gooey.CompareLlmPageRequestResponseFormatType;
    settings?: Gooey.RunSettings;
}