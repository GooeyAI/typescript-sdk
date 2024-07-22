/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { Text2AudioPageOutput } from "./Text2AudioPageOutput";

export const Text2AudioPageResponse: core.serialization.ObjectSchema<
    serializers.Text2AudioPageResponse.Raw,
    Gooey.Text2AudioPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: Text2AudioPageOutput,
});

export declare namespace Text2AudioPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: Text2AudioPageOutput.Raw;
    }
}