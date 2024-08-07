/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const BulkRunnerPageOutput: core.serialization.ObjectSchema<
    serializers.BulkRunnerPageOutput.Raw,
    Gooey.BulkRunnerPageOutput
> = core.serialization.object({
    outputDocuments: core.serialization.property(
        "output_documents",
        core.serialization.list(core.serialization.string())
    ),
    evalRuns: core.serialization.property("eval_runs", core.serialization.list(core.serialization.string()).optional()),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace BulkRunnerPageOutput {
    interface Raw {
        output_documents: string[];
        eval_runs?: string[] | null;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}
