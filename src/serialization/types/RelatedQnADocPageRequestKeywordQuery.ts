/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const RelatedQnADocPageRequestKeywordQuery: core.serialization.Schema<
    serializers.RelatedQnADocPageRequestKeywordQuery.Raw,
    Gooey.RelatedQnADocPageRequestKeywordQuery
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace RelatedQnADocPageRequestKeywordQuery {
    type Raw = string | string[];
}