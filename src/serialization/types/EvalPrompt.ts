/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const EvalPrompt: core.serialization.ObjectSchema<serializers.EvalPrompt.Raw, Gooey.EvalPrompt> =
    core.serialization.object({
        name: core.serialization.string(),
        prompt: core.serialization.string(),
    });

export declare namespace EvalPrompt {
    interface Raw {
        name: string;
        prompt: string;
    }
}