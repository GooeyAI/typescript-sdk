/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeFunction } from "./RecipeFunction";
import { FaceInpaintingPageRequestSelectedModel } from "./FaceInpaintingPageRequestSelectedModel";
import { RunSettings } from "./RunSettings";

export const FaceInpaintingPageRequest: core.serialization.ObjectSchema<
    serializers.FaceInpaintingPageRequest.Raw,
    Gooey.FaceInpaintingPageRequest
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    inputImage: core.serialization.property("input_image", core.serialization.string()),
    textPrompt: core.serialization.property("text_prompt", core.serialization.string()),
    faceScale: core.serialization.property("face_scale", core.serialization.number().optional()),
    facePosX: core.serialization.property("face_pos_x", core.serialization.number().optional()),
    facePosY: core.serialization.property("face_pos_y", core.serialization.number().optional()),
    selectedModel: core.serialization.property("selected_model", FaceInpaintingPageRequestSelectedModel.optional()),
    negativePrompt: core.serialization.property("negative_prompt", core.serialization.string().optional()),
    numOutputs: core.serialization.property("num_outputs", core.serialization.number().optional()),
    quality: core.serialization.number().optional(),
    upscaleFactor: core.serialization.property("upscale_factor", core.serialization.number().optional()),
    outputWidth: core.serialization.property("output_width", core.serialization.number().optional()),
    outputHeight: core.serialization.property("output_height", core.serialization.number().optional()),
    guidanceScale: core.serialization.property("guidance_scale", core.serialization.number().optional()),
    seed: core.serialization.number().optional(),
    settings: RunSettings.optional(),
});

export declare namespace FaceInpaintingPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        input_image: string;
        text_prompt: string;
        face_scale?: number | null;
        face_pos_x?: number | null;
        face_pos_y?: number | null;
        selected_model?: FaceInpaintingPageRequestSelectedModel.Raw | null;
        negative_prompt?: string | null;
        num_outputs?: number | null;
        quality?: number | null;
        upscale_factor?: number | null;
        output_width?: number | null;
        output_height?: number | null;
        guidance_scale?: number | null;
        seed?: number | null;
        settings?: RunSettings.Raw | null;
    }
}
