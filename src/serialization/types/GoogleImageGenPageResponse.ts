/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { GoogleImageGenPageOutput } from "./GoogleImageGenPageOutput";

export const GoogleImageGenPageResponse: core.serialization.ObjectSchema<
    serializers.GoogleImageGenPageResponse.Raw,
    Gooey.GoogleImageGenPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: GoogleImageGenPageOutput,
});

export declare namespace GoogleImageGenPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: GoogleImageGenPageOutput.Raw;
    }
}