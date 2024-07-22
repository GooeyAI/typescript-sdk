/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RelatedQnAPageOutput } from "./RelatedQnAPageOutput";

export const RelatedQnAPageResponse: core.serialization.ObjectSchema<
    serializers.RelatedQnAPageResponse.Raw,
    Gooey.RelatedQnAPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: RelatedQnAPageOutput,
});

export declare namespace RelatedQnAPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: RelatedQnAPageOutput.Raw;
    }
}