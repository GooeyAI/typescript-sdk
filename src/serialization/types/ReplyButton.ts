/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const ReplyButton: core.serialization.ObjectSchema<serializers.ReplyButton.Raw, Gooey.ReplyButton> =
    core.serialization.object({
        id: core.serialization.string(),
        title: core.serialization.string(),
    });

export declare namespace ReplyButton {
    interface Raw {
        id: string;
        title: string;
    }
}