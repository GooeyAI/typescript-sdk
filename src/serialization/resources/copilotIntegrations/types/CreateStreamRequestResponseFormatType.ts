/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Gooey from "../../../../api/index";
import * as core from "../../../../core";

export const CreateStreamRequestResponseFormatType: core.serialization.Schema<
    serializers.CreateStreamRequestResponseFormatType.Raw,
    Gooey.CreateStreamRequestResponseFormatType
> = core.serialization.enum_(["text", "json_object"]);

export declare namespace CreateStreamRequestResponseFormatType {
    type Raw = "text" | "json_object";
}
