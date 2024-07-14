/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { VideoBotsPageOutput } from "./VideoBotsPageOutput";

export const VideoBotsPageResponse: core.serialization.ObjectSchema<
    serializers.VideoBotsPageResponse.Raw,
    Gooey.VideoBotsPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: VideoBotsPageOutput,
});

export declare namespace VideoBotsPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: VideoBotsPageOutput.Raw;
    }
}
