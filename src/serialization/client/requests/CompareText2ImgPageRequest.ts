/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Gooey from "../../../api/index";
import * as core from "../../../core";
import { RecipeFunction } from "../../types/RecipeFunction";
import { CompareText2ImgPageRequestSelectedModelsItem } from "../../types/CompareText2ImgPageRequestSelectedModelsItem";
import { CompareText2ImgPageRequestScheduler } from "../../types/CompareText2ImgPageRequestScheduler";
import { RunSettings } from "../../types/RunSettings";

export const CompareText2ImgPageRequest: core.serialization.Schema<
    serializers.CompareText2ImgPageRequest.Raw,
    Omit<Gooey.CompareText2ImgPageRequest, "exampleId">
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    textPrompt: core.serialization.property("text_prompt", core.serialization.string()),
    negativePrompt: core.serialization.property("negative_prompt", core.serialization.string().optional()),
    outputWidth: core.serialization.property("output_width", core.serialization.number().optional()),
    outputHeight: core.serialization.property("output_height", core.serialization.number().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    dallE3Quality: core.serialization.property("dall_e_3_quality", core.serialization.string().optional()),
    dallE3Style: core.serialization.property("dall_e_3_style", core.serialization.string().optional()),
    guidanceScale: core.serialization.property("guidance_scale", core.serialization.number().optional()),
    seed: core.serialization.number().optional(),
    sd2Upscaling: core.serialization.property("sd_2_upscaling", core.serialization.boolean().optional()),
    selectedModels: core.serialization.property(
        "selected_models",
        core.serialization.list(CompareText2ImgPageRequestSelectedModelsItem).optional()
    ),
    scheduler: CompareText2ImgPageRequestScheduler.optional(),
    editInstruction: core.serialization.property("edit_instruction", core.serialization.string().optional()),
    imageGuidanceScale: core.serialization.property("image_guidance_scale", core.serialization.number().optional()),
    settings: RunSettings.optional(),
});

export declare namespace CompareText2ImgPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        text_prompt: string;
        negative_prompt?: string | null;
        output_width?: number | null;
        output_height?: number | null;
        num_outputs?: number | null;
        quality?: number | null;
        dall_e_3_quality?: string | null;
        dall_e_3_style?: string | null;
        guidance_scale?: number | null;
        seed?: number | null;
        sd_2_upscaling?: boolean | null;
        selected_models?: CompareText2ImgPageRequestSelectedModelsItem.Raw[] | null;
        scheduler?: CompareText2ImgPageRequestScheduler.Raw | null;
        edit_instruction?: string | null;
        image_guidance_scale?: number | null;
        settings?: RunSettings.Raw | null;
    }
}
