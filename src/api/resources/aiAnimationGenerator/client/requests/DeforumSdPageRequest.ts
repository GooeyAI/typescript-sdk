/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../../../index";

/**
 * @example
 *     {
 *         animationPrompts: [{
 *                 frame: "frame",
 *                 prompt: "prompt"
 *             }]
 *     }
 */
export interface DeforumSdPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    animationPrompts: Gooey.AnimationPrompt[];
    maxFrames?: number;
    selectedModel?: Gooey.DeforumSdPageRequestSelectedModel;
    animationMode?: string;
    zoom?: string;
    translationX?: string;
    translationY?: string;
    rotation3DX?: string;
    rotation3DY?: string;
    rotation3DZ?: string;
    fps?: number;
    seed?: number;
    settings?: Gooey.RunSettings;
}