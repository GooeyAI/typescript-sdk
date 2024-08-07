/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {
 *         textPrompt: "text_prompt"
 *     }
 */
export interface CompareText2ImgPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    textPrompt: string;
    negativePrompt?: string;
    outputWidth?: number;
    outputHeight?: number;
    numOutputs?: number;
    quality?: number;
    dallE3Quality?: string;
    dallE3Style?: string;
    guidanceScale?: number;
    seed?: number;
    sd2Upscaling?: boolean;
    selectedModels?: Gooey.CompareText2ImgPageRequestSelectedModelsItem[];
    scheduler?: Gooey.CompareText2ImgPageRequestScheduler;
    editInstruction?: string;
    imageGuidanceScale?: number;
    settings?: Gooey.RunSettings;
}
