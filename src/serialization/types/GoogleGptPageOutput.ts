/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { SearchReference } from "./SearchReference";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const GoogleGptPageOutput: core.serialization.ObjectSchema<
    serializers.GoogleGptPageOutput.Raw,
    Gooey.GoogleGptPageOutput
> = core.serialization.object({
    outputText: core.serialization.property("output_text", core.serialization.list(core.serialization.string())),
    serpResults: core.serialization.property(
        "serp_results",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
    references: core.serialization.list(SearchReference),
    finalPrompt: core.serialization.property("final_prompt", core.serialization.string()),
    finalSearchQuery: core.serialization.property("final_search_query", core.serialization.string().optional()),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace GoogleGptPageOutput {
    interface Raw {
        output_text: string[];
        serp_results: Record<string, unknown>;
        references: SearchReference.Raw[];
        final_prompt: string;
        final_search_query?: string | null;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}
