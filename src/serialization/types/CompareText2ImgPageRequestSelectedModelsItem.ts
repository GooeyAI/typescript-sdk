/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const CompareText2ImgPageRequestSelectedModelsItem: core.serialization.Schema<
    serializers.CompareText2ImgPageRequestSelectedModelsItem.Raw,
    Gooey.CompareText2ImgPageRequestSelectedModelsItem
> = core.serialization.enum_([
    "dream_shaper",
    "dreamlike_2",
    "sd_2",
    "sd_1_5",
    "dall_e",
    "dall_e_3",
    "openjourney_2",
    "openjourney",
    "analog_diffusion",
    "protogen_5_3",
    "jack_qiao",
    "rodent_diffusion_1_5",
    "deepfloyd_if",
]);

export declare namespace CompareText2ImgPageRequestSelectedModelsItem {
    type Raw =
        | "dream_shaper"
        | "dreamlike_2"
        | "sd_2"
        | "sd_1_5"
        | "dall_e"
        | "dall_e_3"
        | "openjourney_2"
        | "openjourney"
        | "analog_diffusion"
        | "protogen_5_3"
        | "jack_qiao"
        | "rodent_diffusion_1_5"
        | "deepfloyd_if";
}
