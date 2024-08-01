/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const SmartGptPageRequestResponseFormatType: core.serialization.Schema<
    serializers.SmartGptPageRequestResponseFormatType.Raw,
    Gooey.SmartGptPageRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace SmartGptPageRequestResponseFormatType {
    type Raw = "text" | "json_object";
}