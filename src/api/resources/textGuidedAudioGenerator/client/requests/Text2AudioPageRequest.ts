/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../../../index";

/**
 * @example
 *     {
 *         textPrompt: "text_prompt"
 *     }
 */
export interface Text2AudioPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    textPrompt: string;
    negativePrompt?: string;
    durationSec?: number;
    numOutputs?: number;
    quality?: number;
    guidanceScale?: number;
    seed?: number;
    sd2Upscaling?: boolean;
    selectedModels?: "audio_ldm"[];
    settings?: Gooey.RunSettings;
}