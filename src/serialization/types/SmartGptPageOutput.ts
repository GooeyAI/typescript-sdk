/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const SmartGptPageOutput: core.serialization.ObjectSchema<
    serializers.SmartGptPageOutput.Raw,
    Gooey.SmartGptPageOutput
> = core.serialization.object({
    outputText: core.serialization.property("output_text", core.serialization.list(core.serialization.string())),
    promptTree: core.serialization.property(
        "prompt_tree",
        core.serialization.list(core.serialization.lazyObject(() => serializers.PromptTreeNode)).optional()
    ),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace SmartGptPageOutput {
    interface Raw {
        output_text: string[];
        prompt_tree?: serializers.PromptTreeNode.Raw[] | null;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}