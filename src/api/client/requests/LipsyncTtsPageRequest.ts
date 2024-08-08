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
export interface LipsyncTtsPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    textPrompt: string;
    ttsProvider?: Gooey.LipsyncTtsPageRequestTtsProvider;
    uberduckVoiceName?: string;
    uberduckSpeakingRate?: number;
    googleVoiceName?: string;
    googleSpeakingRate?: number;
    googlePitch?: number;
    barkHistoryPrompt?: string;
    /** Use `elevenlabs_voice_id` instead */
    elevenlabsVoiceName?: string;
    elevenlabsApiKey?: string;
    elevenlabsVoiceId?: string;
    elevenlabsModel?: string;
    elevenlabsStability?: number;
    elevenlabsSimilarityBoost?: number;
    elevenlabsStyle?: number;
    elevenlabsSpeakerBoost?: boolean;
    azureVoiceName?: string;
    openaiVoiceName?: Gooey.LipsyncTtsPageRequestOpenaiVoiceName;
    openaiTtsModel?: Gooey.LipsyncTtsPageRequestOpenaiTtsModel;
    inputFace?: string;
    facePaddingTop?: number;
    facePaddingBottom?: number;
    facePaddingLeft?: number;
    facePaddingRight?: number;
    sadtalkerSettings?: Gooey.SadTalkerSettings;
    selectedModel?: Gooey.LipsyncTtsPageRequestSelectedModel;
    settings?: Gooey.RunSettings;
}
