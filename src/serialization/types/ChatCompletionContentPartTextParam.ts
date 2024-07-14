/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const ChatCompletionContentPartTextParam: core.serialization.ObjectSchema<
    serializers.ChatCompletionContentPartTextParam.Raw,
    Gooey.ChatCompletionContentPartTextParam
> = core.serialization.object({
    text: core.serialization.string().optional(),
});

export declare namespace ChatCompletionContentPartTextParam {
    interface Raw {
        text?: string | null;
    }
}
