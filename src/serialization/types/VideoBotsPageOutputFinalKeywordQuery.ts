/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const VideoBotsPageOutputFinalKeywordQuery: core.serialization.Schema<
    serializers.VideoBotsPageOutputFinalKeywordQuery.Raw,
    Gooey.VideoBotsPageOutputFinalKeywordQuery
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace VideoBotsPageOutputFinalKeywordQuery {
    type Raw = string | string[];
}
