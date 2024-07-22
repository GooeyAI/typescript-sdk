/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Gooey from "../../../../api/index";
import * as core from "../../../../core";

export const CreateStreamRequestOpenaiTtsModel: core.serialization.Schema<
    serializers.CreateStreamRequestOpenaiTtsModel.Raw,
    Gooey.CreateStreamRequestOpenaiTtsModel
> = core.serialization.enum_(["tts_1", "tts_1_hd"]);

export declare namespace CreateStreamRequestOpenaiTtsModel {
    type Raw = "tts_1" | "tts_1_hd";
}