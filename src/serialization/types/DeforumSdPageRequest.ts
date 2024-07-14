/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeFunction } from "./RecipeFunction";
import { AnimationPrompt } from "./AnimationPrompt";
import { DeforumSdPageRequestSelectedModel } from "./DeforumSdPageRequestSelectedModel";
import { RunSettings } from "./RunSettings";

export const DeforumSdPageRequest: core.serialization.ObjectSchema<
    serializers.DeforumSdPageRequest.Raw,
    Gooey.DeforumSdPageRequest
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    animationPrompts: core.serialization.property("animation_prompts", core.serialization.list(AnimationPrompt)),
    maxFrames: core.serialization.property("max_frames", core.serialization.number().optional()),
    selectedModel: core.serialization.property("selected_model", DeforumSdPageRequestSelectedModel.optional()),
    animationMode: core.serialization.property("animation_mode", core.serialization.string().optional()),
    zoom: core.serialization.string().optional(),
    translationX: core.serialization.property("translation_x", core.serialization.string().optional()),
    translationY: core.serialization.property("translation_y", core.serialization.string().optional()),
    rotation3DX: core.serialization.property("rotation_3d_x", core.serialization.string().optional()),
    rotation3DY: core.serialization.property("rotation_3d_y", core.serialization.string().optional()),
    rotation3DZ: core.serialization.property("rotation_3d_z", core.serialization.string().optional()),
    fps: core.serialization.number().optional(),
    seed: core.serialization.number().optional(),
    settings: RunSettings.optional(),
});

export declare namespace DeforumSdPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        animation_prompts: AnimationPrompt.Raw[];
        max_frames?: number | null;
        selected_model?: DeforumSdPageRequestSelectedModel.Raw | null;
        animation_mode?: string | null;
        zoom?: string | null;
        translation_x?: string | null;
        translation_y?: string | null;
        rotation_3d_x?: string | null;
        rotation_3d_y?: string | null;
        rotation_3d_z?: string | null;
        fps?: number | null;
        seed?: number | null;
        settings?: RunSettings.Raw | null;
    }
}
