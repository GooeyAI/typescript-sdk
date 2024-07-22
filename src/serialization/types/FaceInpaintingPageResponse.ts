/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { FaceInpaintingPageOutput } from "./FaceInpaintingPageOutput";

export const FaceInpaintingPageResponse: core.serialization.ObjectSchema<
    serializers.FaceInpaintingPageResponse.Raw,
    Gooey.FaceInpaintingPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: FaceInpaintingPageOutput,
});

export declare namespace FaceInpaintingPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: FaceInpaintingPageOutput.Raw;
    }
}