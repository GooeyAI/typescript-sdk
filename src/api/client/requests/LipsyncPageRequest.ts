/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {}
 */
export interface LipsyncPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    inputFace?: string;
    facePaddingTop?: number;
    facePaddingBottom?: number;
    facePaddingLeft?: number;
    facePaddingRight?: number;
    sadtalkerSettings?: Gooey.SadTalkerSettings;
    selectedModel?: Gooey.LipsyncPageRequestSelectedModel;
    inputAudio?: string;
    settings?: Gooey.RunSettings;
}
