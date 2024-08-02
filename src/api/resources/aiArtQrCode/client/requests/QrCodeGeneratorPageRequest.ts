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
export interface QrCodeGeneratorPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    qrCodeData?: string;
    qrCodeInputImage?: string;
    qrCodeVcard?: Gooey.Vcard;
    qrCodeFile?: string;
    useUrlShortener?: boolean;
    textPrompt: string;
    negativePrompt?: string;
    imagePrompt?: string;
    imagePromptControlnetModels?: Gooey.QrCodeGeneratorPageRequestImagePromptControlnetModelsItem[];
    imagePromptStrength?: number;
    imagePromptScale?: number;
    imagePromptPosX?: number;
    imagePromptPosY?: number;
    selectedModel?: Gooey.QrCodeGeneratorPageRequestSelectedModel;
    selectedControlnetModel?: Gooey.QrCodeGeneratorPageRequestSelectedControlnetModelItem[];
    outputWidth?: number;
    outputHeight?: number;
    guidanceScale?: number;
    controlnetConditioningScale?: number[];
    numOutputs?: number;
    quality?: number;
    scheduler?: Gooey.QrCodeGeneratorPageRequestScheduler;
    seed?: number;
    objScale?: number;
    objPosX?: number;
    objPosY?: number;
    settings?: Gooey.RunSettings;
}