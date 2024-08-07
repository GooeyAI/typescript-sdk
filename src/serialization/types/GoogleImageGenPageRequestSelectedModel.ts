/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const GoogleImageGenPageRequestSelectedModel: core.serialization.Schema<
    serializers.GoogleImageGenPageRequestSelectedModel.Raw,
    Gooey.GoogleImageGenPageRequestSelectedModel
> = core.serialization.enum_([
    "dream_shaper",
    "dreamlike_2",
    "sd_2",
    "sd_1_5",
    "dall_e",
    "instruct_pix2pix",
    "openjourney_2",
    "openjourney",
    "analog_diffusion",
    "protogen_5_3",
    "jack_qiao",
    "rodent_diffusion_1_5",
]);

export declare namespace GoogleImageGenPageRequestSelectedModel {
    type Raw =
        | "dream_shaper"
        | "dreamlike_2"
        | "sd_2"
        | "sd_1_5"
        | "dall_e"
        | "instruct_pix2pix"
        | "openjourney_2"
        | "openjourney"
        | "analog_diffusion"
        | "protogen_5_3"
        | "jack_qiao"
        | "rodent_diffusion_1_5";
}
