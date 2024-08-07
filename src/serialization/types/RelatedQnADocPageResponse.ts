/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RelatedQnADocPageOutput } from "./RelatedQnADocPageOutput";

export const RelatedQnADocPageResponse: core.serialization.ObjectSchema<
    serializers.RelatedQnADocPageResponse.Raw,
    Gooey.RelatedQnADocPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: RelatedQnADocPageOutput,
});

export declare namespace RelatedQnADocPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: RelatedQnADocPageOutput.Raw;
    }
}
