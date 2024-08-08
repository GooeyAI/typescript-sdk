/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Gooey from "../../../api/index";
import * as core from "../../../core";
import { RecipeFunction } from "../../types/RecipeFunction";
import { TextToSpeechPageRequestTtsProvider } from "../../types/TextToSpeechPageRequestTtsProvider";
import { TextToSpeechPageRequestOpenaiVoiceName } from "../../types/TextToSpeechPageRequestOpenaiVoiceName";
import { TextToSpeechPageRequestOpenaiTtsModel } from "../../types/TextToSpeechPageRequestOpenaiTtsModel";
import { RunSettings } from "../../types/RunSettings";

export const TextToSpeechPageRequest: core.serialization.Schema<
    serializers.TextToSpeechPageRequest.Raw,
    Omit<Gooey.TextToSpeechPageRequest, "exampleId">
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    textPrompt: core.serialization.property("text_prompt", core.serialization.string()),
    ttsProvider: core.serialization.property("tts_provider", TextToSpeechPageRequestTtsProvider.optional()),
    uberduckVoiceName: core.serialization.property("uberduck_voice_name", core.serialization.string().optional()),
    uberduckSpeakingRate: core.serialization.property("uberduck_speaking_rate", core.serialization.number().optional()),
    googleVoiceName: core.serialization.property("google_voice_name", core.serialization.string().optional()),
    googleSpeakingRate: core.serialization.property("google_speaking_rate", core.serialization.number().optional()),
    googlePitch: core.serialization.property("google_pitch", core.serialization.number().optional()),
    barkHistoryPrompt: core.serialization.property("bark_history_prompt", core.serialization.string().optional()),
    elevenlabsVoiceName: core.serialization.property("elevenlabs_voice_name", core.serialization.string().optional()),
    elevenlabsApiKey: core.serialization.property("elevenlabs_api_key", core.serialization.string().optional()),
    elevenlabsVoiceId: core.serialization.property("elevenlabs_voice_id", core.serialization.string().optional()),
    elevenlabsModel: core.serialization.property("elevenlabs_model", core.serialization.string().optional()),
    elevenlabsStability: core.serialization.property("elevenlabs_stability", core.serialization.number().optional()),
    elevenlabsSimilarityBoost: core.serialization.property(
        "elevenlabs_similarity_boost",
        core.serialization.number().optional()
    ),
    elevenlabsStyle: core.serialization.property("elevenlabs_style", core.serialization.number().optional()),
    elevenlabsSpeakerBoost: core.serialization.property(
        "elevenlabs_speaker_boost",
        core.serialization.boolean().optional()
    ),
    azureVoiceName: core.serialization.property("azure_voice_name", core.serialization.string().optional()),
    openaiVoiceName: core.serialization.property(
        "openai_voice_name",
        TextToSpeechPageRequestOpenaiVoiceName.optional()
    ),
    openaiTtsModel: core.serialization.property("openai_tts_model", TextToSpeechPageRequestOpenaiTtsModel.optional()),
    settings: RunSettings.optional(),
});

export declare namespace TextToSpeechPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        text_prompt: string;
        tts_provider?: TextToSpeechPageRequestTtsProvider.Raw | null;
        uberduck_voice_name?: string | null;
        uberduck_speaking_rate?: number | null;
        google_voice_name?: string | null;
        google_speaking_rate?: number | null;
        google_pitch?: number | null;
        bark_history_prompt?: string | null;
        elevenlabs_voice_name?: string | null;
        elevenlabs_api_key?: string | null;
        elevenlabs_voice_id?: string | null;
        elevenlabs_model?: string | null;
        elevenlabs_stability?: number | null;
        elevenlabs_similarity_boost?: number | null;
        elevenlabs_style?: number | null;
        elevenlabs_speaker_boost?: boolean | null;
        azure_voice_name?: string | null;
        openai_voice_name?: TextToSpeechPageRequestOpenaiVoiceName.Raw | null;
        openai_tts_model?: TextToSpeechPageRequestOpenaiTtsModel.Raw | null;
        settings?: RunSettings.Raw | null;
    }
}