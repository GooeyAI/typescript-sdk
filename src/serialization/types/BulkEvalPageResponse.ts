/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { BulkEvalPageOutput } from "./BulkEvalPageOutput";

export const BulkEvalPageResponse: core.serialization.ObjectSchema<
    serializers.BulkEvalPageResponse.Raw,
    Gooey.BulkEvalPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: BulkEvalPageOutput,
});

export declare namespace BulkEvalPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: BulkEvalPageOutput.Raw;
    }
}
