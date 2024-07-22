/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeRunState } from "./RecipeRunState";
import { FaceInpaintingPageOutput } from "./FaceInpaintingPageOutput";

export const FaceInpaintingPageStatusResponse: core.serialization.ObjectSchema<
    serializers.FaceInpaintingPageStatusResponse.Raw,
    Gooey.FaceInpaintingPageStatusResponse
> = core.serialization.object({
    runId: core.serialization.property("run_id", core.serialization.string()),
    webUrl: core.serialization.property("web_url", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    runTimeSec: core.serialization.property("run_time_sec", core.serialization.number()),
    status: RecipeRunState,
    detail: core.serialization.string(),
    output: FaceInpaintingPageOutput.optional(),
});

export declare namespace FaceInpaintingPageStatusResponse {
    interface Raw {
        run_id: string;
        web_url: string;
        created_at: string;
        run_time_sec: number;
        status: RecipeRunState.Raw;
        detail: string;
        output?: FaceInpaintingPageOutput.Raw | null;
    }
}
