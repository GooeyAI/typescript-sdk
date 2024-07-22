/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Gooey from "../../../../../api/index";
import * as core from "../../../../../core";
import { ReplyButton } from "../../../../types/ReplyButton";
import { BotBroadcastFilters } from "../../../../types/BotBroadcastFilters";

export const BotBroadcastRequestModel: core.serialization.Schema<
    serializers.BotBroadcastRequestModel.Raw,
    Omit<Gooey.BotBroadcastRequestModel, "exampleId" | "runId">
> = core.serialization.object({
    text: core.serialization.string(),
    audio: core.serialization.string().optional(),
    video: core.serialization.string().optional(),
    documents: core.serialization.list(core.serialization.string()).optional(),
    buttons: core.serialization.list(ReplyButton).optional(),
    filters: BotBroadcastFilters.optional(),
});

export declare namespace BotBroadcastRequestModel {
    interface Raw {
        text: string;
        audio?: string | null;
        video?: string | null;
        documents?: string[] | null;
        buttons?: ReplyButton.Raw[] | null;
        filters?: BotBroadcastFilters.Raw | null;
    }
}