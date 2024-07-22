/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const Trigger: core.serialization.Schema<serializers.Trigger.Raw, Gooey.Trigger> = core.serialization.enum_([
    "pre",
    "post",
]);

export declare namespace Trigger {
    type Raw = "pre" | "post";
}