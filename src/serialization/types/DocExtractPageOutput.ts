/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const DocExtractPageOutput: core.serialization.ObjectSchema<
    serializers.DocExtractPageOutput.Raw,
    Gooey.DocExtractPageOutput
> = core.serialization.object({
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace DocExtractPageOutput {
    interface Raw {
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}