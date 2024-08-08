/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const TextToSpeechPageRequestOpenaiTtsModel: core.serialization.Schema<
    serializers.TextToSpeechPageRequestOpenaiTtsModel.Raw,
    Gooey.TextToSpeechPageRequestOpenaiTtsModel
> = core.serialization.enum_(["tts_1", "tts_1_hd"]);

export declare namespace TextToSpeechPageRequestOpenaiTtsModel {
    type Raw = "tts_1" | "tts_1_hd";
}