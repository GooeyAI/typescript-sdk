/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const ImageUrlDetail: core.serialization.Schema<serializers.ImageUrlDetail.Raw, Gooey.ImageUrlDetail> =
    core.serialization.enum_(["auto", "low", "high"]);

export declare namespace ImageUrlDetail {
    type Raw = "auto" | "low" | "high";
}
