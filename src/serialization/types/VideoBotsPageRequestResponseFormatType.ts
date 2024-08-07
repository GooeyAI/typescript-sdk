/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const VideoBotsPageRequestResponseFormatType: core.serialization.Schema<
    serializers.VideoBotsPageRequestResponseFormatType.Raw,
    Gooey.VideoBotsPageRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace VideoBotsPageRequestResponseFormatType {
    type Raw = "text" | "json_object";
}
