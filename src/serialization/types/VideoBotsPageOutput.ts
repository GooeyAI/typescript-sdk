/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { VideoBotsPageOutputFinalPrompt } from "./VideoBotsPageOutputFinalPrompt";
import { SearchReference } from "./SearchReference";
import { VideoBotsPageOutputFinalKeywordQuery } from "./VideoBotsPageOutputFinalKeywordQuery";
import { ReplyButton } from "./ReplyButton";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const VideoBotsPageOutput: core.serialization.ObjectSchema<
    serializers.VideoBotsPageOutput.Raw,
    Gooey.VideoBotsPageOutput
> = core.serialization.object({
    finalPrompt: core.serialization.property("final_prompt", VideoBotsPageOutputFinalPrompt.optional()),
    outputText: core.serialization.property(
        "output_text",
        core.serialization.list(core.serialization.string()).optional()
    ),
    outputAudio: core.serialization.property(
        "output_audio",
        core.serialization.list(core.serialization.string()).optional()
    ),
    outputVideo: core.serialization.property(
        "output_video",
        core.serialization.list(core.serialization.string()).optional()
    ),
    rawInputText: core.serialization.property("raw_input_text", core.serialization.string().optional()),
    rawTtsText: core.serialization.property(
        "raw_tts_text",
        core.serialization.list(core.serialization.string()).optional()
    ),
    rawOutputText: core.serialization.property(
        "raw_output_text",
        core.serialization.list(core.serialization.string()).optional()
    ),
    references: core.serialization.list(SearchReference).optional(),
    finalSearchQuery: core.serialization.property("final_search_query", core.serialization.string().optional()),
    finalKeywordQuery: core.serialization.property(
        "final_keyword_query",
        VideoBotsPageOutputFinalKeywordQuery.optional()
    ),
    outputDocuments: core.serialization.property(
        "output_documents",
        core.serialization.list(core.serialization.string()).optional()
    ),
    replyButtons: core.serialization.property("reply_buttons", core.serialization.list(ReplyButton).optional()),
    finishReason: core.serialization.property(
        "finish_reason",
        core.serialization.list(core.serialization.string()).optional()
    ),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace VideoBotsPageOutput {
    interface Raw {
        final_prompt?: VideoBotsPageOutputFinalPrompt.Raw | null;
        output_text?: string[] | null;
        output_audio?: string[] | null;
        output_video?: string[] | null;
        raw_input_text?: string | null;
        raw_tts_text?: string[] | null;
        raw_output_text?: string[] | null;
        references?: SearchReference.Raw[] | null;
        final_search_query?: string | null;
        final_keyword_query?: VideoBotsPageOutputFinalKeywordQuery.Raw | null;
        output_documents?: string[] | null;
        reply_buttons?: ReplyButton.Raw[] | null;
        finish_reason?: string[] | null;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}