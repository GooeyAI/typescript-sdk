/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const DocSearchPageRequestResponseFormatType: core.serialization.Schema<
    serializers.DocSearchPageRequestResponseFormatType.Raw,
    Gooey.DocSearchPageRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace DocSearchPageRequestResponseFormatType {
    type Raw = "text" | "json_object";
}
