/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Gooey from "../../../../api/index";
import * as core from "../../../../core";

export const VideoBotsPageRequestTtsProvider: core.serialization.Schema<
    serializers.VideoBotsPageRequestTtsProvider.Raw,
    Gooey.VideoBotsPageRequestTtsProvider
> = core.serialization.enum_(["GOOGLE_TTS", "ELEVEN_LABS", "UBERDUCK", "BARK", "AZURE_TTS", "OPEN_AI"]);

export declare namespace VideoBotsPageRequestTtsProvider {
    type Raw = "GOOGLE_TTS" | "ELEVEN_LABS" | "UBERDUCK" | "BARK" | "AZURE_TTS" | "OPEN_AI";
}