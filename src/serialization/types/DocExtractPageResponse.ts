/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { DocExtractPageOutput } from "./DocExtractPageOutput";

export const DocExtractPageResponse: core.serialization.ObjectSchema<
    serializers.DocExtractPageResponse.Raw,
    Gooey.DocExtractPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: DocExtractPageOutput,
});

export declare namespace DocExtractPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: DocExtractPageOutput.Raw;
    }
}
