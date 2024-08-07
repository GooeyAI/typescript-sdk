/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const AsrPageRequestSelectedModel: core.serialization.Schema<
    serializers.AsrPageRequestSelectedModel.Raw,
    Gooey.AsrPageRequestSelectedModel
> = core.serialization.enum_([
    "whisper_large_v2",
    "whisper_large_v3",
    "whisper_hindi_large_v2",
    "whisper_telugu_large_v2",
    "nemo_english",
    "nemo_hindi",
    "vakyansh_bhojpuri",
    "gcp_v1",
    "usm",
    "deepgram",
    "azure",
    "seamless_m4t",
    "mms_1b_all",
]);

export declare namespace AsrPageRequestSelectedModel {
    type Raw =
        | "whisper_large_v2"
        | "whisper_large_v3"
        | "whisper_hindi_large_v2"
        | "whisper_telugu_large_v2"
        | "nemo_english"
        | "nemo_hindi"
        | "vakyansh_bhojpuri"
        | "gcp_v1"
        | "usm"
        | "deepgram"
        | "azure"
        | "seamless_m4t"
        | "mms_1b_all";
}
