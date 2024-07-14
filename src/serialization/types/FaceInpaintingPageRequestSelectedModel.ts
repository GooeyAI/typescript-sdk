/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const FaceInpaintingPageRequestSelectedModel: core.serialization.Schema<
    serializers.FaceInpaintingPageRequestSelectedModel.Raw,
    Gooey.FaceInpaintingPageRequestSelectedModel
> = core.serialization.enum_(["sd_2", "runway_ml", "dall_e", "jack_qiao"]);

export declare namespace FaceInpaintingPageRequestSelectedModel {
    type Raw = "sd_2" | "runway_ml" | "dall_e" | "jack_qiao";
}
