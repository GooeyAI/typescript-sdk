/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeRunState } from "./RecipeRunState";
import { ImageSegmentationPageOutput } from "./ImageSegmentationPageOutput";

export const ImageSegmentationPageStatusResponse: core.serialization.ObjectSchema<
    serializers.ImageSegmentationPageStatusResponse.Raw,
    Gooey.ImageSegmentationPageStatusResponse
> = core.serialization.object({
    runId: core.serialization.property("run_id", core.serialization.string()),
    webUrl: core.serialization.property("web_url", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    runTimeSec: core.serialization.property("run_time_sec", core.serialization.number()),
    status: RecipeRunState,
    detail: core.serialization.string(),
    output: ImageSegmentationPageOutput.optional(),
});

export declare namespace ImageSegmentationPageStatusResponse {
    interface Raw {
        run_id: string;
        web_url: string;
        created_at: string;
        run_time_sec: number;
        status: RecipeRunState.Raw;
        detail: string;
        output?: ImageSegmentationPageOutput.Raw | null;
    }
}