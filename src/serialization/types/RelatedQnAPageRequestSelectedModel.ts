/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const RelatedQnAPageRequestSelectedModel: core.serialization.Schema<
    serializers.RelatedQnAPageRequestSelectedModel.Raw,
    Gooey.RelatedQnAPageRequestSelectedModel
> = core.serialization.enum_([
    "gpt_4_o",
    "gpt_4_o_mini",
    "gpt_4_turbo_vision",
    "gpt_4_vision",
    "gpt_4_turbo",
    "gpt_4",
    "gpt_4_32k",
    "gpt_3_5_turbo",
    "gpt_3_5_turbo_16k",
    "gpt_3_5_turbo_instruct",
    "llama3_70b",
    "llama_3_groq_70b_tool_use",
    "llama3_8b",
    "llama_3_groq_8b_tool_use",
    "llama2_70b_chat",
    "mixtral_8x7b_instruct_0_1",
    "gemma_2_9b_it",
    "gemma_7b_it",
    "gemini_1_5_pro",
    "gemini_1_pro_vision",
    "gemini_1_pro",
    "palm2_chat",
    "palm2_text",
    "claude_3_5_sonnet",
    "claude_3_opus",
    "claude_3_sonnet",
    "claude_3_haiku",
    "sea_lion_7b_instruct",
    "text_davinci_003",
    "text_davinci_002",
    "code_davinci_002",
    "text_curie_001",
    "text_babbage_001",
    "text_ada_001",
]);

export declare namespace RelatedQnAPageRequestSelectedModel {
    type Raw =
        | "gpt_4_o"
        | "gpt_4_o_mini"
        | "gpt_4_turbo_vision"
        | "gpt_4_vision"
        | "gpt_4_turbo"
        | "gpt_4"
        | "gpt_4_32k"
        | "gpt_3_5_turbo"
        | "gpt_3_5_turbo_16k"
        | "gpt_3_5_turbo_instruct"
        | "llama3_70b"
        | "llama_3_groq_70b_tool_use"
        | "llama3_8b"
        | "llama_3_groq_8b_tool_use"
        | "llama2_70b_chat"
        | "mixtral_8x7b_instruct_0_1"
        | "gemma_2_9b_it"
        | "gemma_7b_it"
        | "gemini_1_5_pro"
        | "gemini_1_pro_vision"
        | "gemini_1_pro"
        | "palm2_chat"
        | "palm2_text"
        | "claude_3_5_sonnet"
        | "claude_3_opus"
        | "claude_3_sonnet"
        | "claude_3_haiku"
        | "sea_lion_7b_instruct"
        | "text_davinci_003"
        | "text_davinci_002"
        | "code_davinci_002"
        | "text_curie_001"
        | "text_babbage_001"
        | "text_ada_001";
}
