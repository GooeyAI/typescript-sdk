/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const VideoBotsPageRequestLipsyncModel: core.serialization.Schema<
    serializers.VideoBotsPageRequestLipsyncModel.Raw,
    Gooey.VideoBotsPageRequestLipsyncModel
> = core.serialization.enum_(["Wav2Lip", "SadTalker"]);

export declare namespace VideoBotsPageRequestLipsyncModel {
    type Raw = "Wav2Lip" | "SadTalker";
}
