/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const CompareText2ImgPageOutput: core.serialization.ObjectSchema<
    serializers.CompareText2ImgPageOutput.Raw,
    Gooey.CompareText2ImgPageOutput
> = core.serialization.object({
    outputImages: core.serialization.property(
        "output_images",
        core.serialization.record(core.serialization.string(), core.serialization.list(core.serialization.string()))
    ),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace CompareText2ImgPageOutput {
    interface Raw {
        output_images: Record<string, string[]>;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}