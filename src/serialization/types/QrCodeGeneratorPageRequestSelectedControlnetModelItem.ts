/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const QrCodeGeneratorPageRequestSelectedControlnetModelItem: core.serialization.Schema<
    serializers.QrCodeGeneratorPageRequestSelectedControlnetModelItem.Raw,
    Gooey.QrCodeGeneratorPageRequestSelectedControlnetModelItem
> = core.serialization.enum_([
    "sd_controlnet_canny",
    "sd_controlnet_depth",
    "sd_controlnet_hed",
    "sd_controlnet_mlsd",
    "sd_controlnet_normal",
    "sd_controlnet_openpose",
    "sd_controlnet_scribble",
    "sd_controlnet_seg",
    "sd_controlnet_tile",
    "sd_controlnet_brightness",
    "control_v1p_sd15_qrcode_monster_v2",
]);

export declare namespace QrCodeGeneratorPageRequestSelectedControlnetModelItem {
    type Raw =
        | "sd_controlnet_canny"
        | "sd_controlnet_depth"
        | "sd_controlnet_hed"
        | "sd_controlnet_mlsd"
        | "sd_controlnet_normal"
        | "sd_controlnet_openpose"
        | "sd_controlnet_scribble"
        | "sd_controlnet_seg"
        | "sd_controlnet_tile"
        | "sd_controlnet_brightness"
        | "control_v1p_sd15_qrcode_monster_v2";
}