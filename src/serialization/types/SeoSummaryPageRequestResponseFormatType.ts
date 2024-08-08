/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const SeoSummaryPageRequestResponseFormatType: core.serialization.Schema<
    serializers.SeoSummaryPageRequestResponseFormatType.Raw,
    Gooey.SeoSummaryPageRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace SeoSummaryPageRequestResponseFormatType {
    type Raw = "text" | "json_object";
}