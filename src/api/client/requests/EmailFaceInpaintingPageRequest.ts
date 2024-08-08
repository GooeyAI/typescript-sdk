/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {
 *         emailAddress: "sean@dara.network",
 *         textPrompt: "winter's day in paris"
 *     }
 */
export interface EmailFaceInpaintingPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    emailAddress?: string;
    twitterHandle?: string;
    textPrompt: string;
    faceScale?: number;
    facePosX?: number;
    facePosY?: number;
    selectedModel?: Gooey.EmailFaceInpaintingPageRequestSelectedModel;
    negativePrompt?: string;
    numOutputs?: number;
    quality?: number;
    upscaleFactor?: number;
    outputWidth?: number;
    outputHeight?: number;
    guidanceScale?: number;
    shouldSendEmail?: boolean;
    emailFrom?: string;
    emailCc?: string;
    emailBcc?: string;
    emailSubject?: string;
    emailBody?: string;
    emailBodyEnableHtml?: boolean;
    fallbackEmailBody?: string;
    seed?: number;
    settings?: Gooey.RunSettings;
}
