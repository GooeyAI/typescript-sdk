/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const DeforumSdPageOutput: core.serialization.ObjectSchema<
    serializers.DeforumSdPageOutput.Raw,
    Gooey.DeforumSdPageOutput
> = core.serialization.object({
    outputVideo: core.serialization.property("output_video", core.serialization.string()),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace DeforumSdPageOutput {
    interface Raw {
        output_video: string;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}
