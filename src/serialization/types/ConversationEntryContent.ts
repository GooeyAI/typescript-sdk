/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { ConversationEntryContentItem } from "./ConversationEntryContentItem";

export const ConversationEntryContent: core.serialization.Schema<
    serializers.ConversationEntryContent.Raw,
    Gooey.ConversationEntryContent
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(ConversationEntryContentItem),
]);

export declare namespace ConversationEntryContent {
    type Raw = string | ConversationEntryContentItem.Raw[];
}
