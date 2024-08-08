/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Gooey from "../../../api/index";
import * as core from "../../../core";
import { RecipeFunction } from "../../types/RecipeFunction";
import { EvalPrompt } from "../../types/EvalPrompt";
import { AggFunction } from "../../types/AggFunction";
import { BulkEvalPageRequestSelectedModel } from "../../types/BulkEvalPageRequestSelectedModel";
import { BulkEvalPageRequestResponseFormatType } from "../../types/BulkEvalPageRequestResponseFormatType";
import { RunSettings } from "../../types/RunSettings";

export const BulkEvalPageRequest: core.serialization.Schema<
    serializers.BulkEvalPageRequest.Raw,
    Omit<Gooey.BulkEvalPageRequest, "exampleId">
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    documents: core.serialization.list(core.serialization.string()),
    evalPrompts: core.serialization.property("eval_prompts", core.serialization.list(EvalPrompt).optional()),
    aggFunctions: core.serialization.property("agg_functions", core.serialization.list(AggFunction).optional()),
    selectedModel: core.serialization.property("selected_model", BulkEvalPageRequestSelectedModel.optional()),
    avoidRepetition: core.serialization.property("avoid_repetition", core.serialization.boolean().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
    samplingTemperature: core.serialization.property("sampling_temperature", core.serialization.number().optional()),
    responseFormatType: core.serialization.property(
        "response_format_type",
        BulkEvalPageRequestResponseFormatType.optional()
    ),
    settings: RunSettings.optional(),
});

export declare namespace BulkEvalPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        documents: string[];
        eval_prompts?: EvalPrompt.Raw[] | null;
        agg_functions?: AggFunction.Raw[] | null;
        selected_model?: BulkEvalPageRequestSelectedModel.Raw | null;
        avoid_repetition?: boolean | null;
        num_outputs?: number | null;
        quality?: number | null;
        max_tokens?: number | null;
        sampling_temperature?: number | null;
        response_format_type?: BulkEvalPageRequestResponseFormatType.Raw | null;
        settings?: RunSettings.Raw | null;
    }
}
