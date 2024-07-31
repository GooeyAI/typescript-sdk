/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const RelatedQnADocPageRequestResponseFormatType: core.serialization.Schema<
    serializers.RelatedQnADocPageRequestResponseFormatType.Raw,
    Gooey.RelatedQnADocPageRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace RelatedQnADocPageRequestResponseFormatType {
    type Raw = "text" | "json_object";
}
