/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Gooey from "../../../../../api/index";
import * as core from "../../../../../core";
import { RecipeFunction } from "../../../../types/RecipeFunction";
import { AsrPageRequestSelectedModel } from "../../types/AsrPageRequestSelectedModel";
import { AsrPageRequestTranslationModel } from "../../types/AsrPageRequestTranslationModel";
import { AsrPageRequestOutputFormat } from "../../types/AsrPageRequestOutputFormat";
import { RunSettings } from "../../../../types/RunSettings";

export const AsrPageRequest: core.serialization.Schema<
    serializers.AsrPageRequest.Raw,
    Omit<Gooey.AsrPageRequest, "exampleId">
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    documents: core.serialization.list(core.serialization.string()),
    selectedModel: core.serialization.property("selected_model", AsrPageRequestSelectedModel.optional()),
    language: core.serialization.string().optional(),
    translationModel: core.serialization.property("translation_model", AsrPageRequestTranslationModel.optional()),
    outputFormat: core.serialization.property("output_format", AsrPageRequestOutputFormat.optional()),
    googleTranslateTarget: core.serialization.property(
        "google_translate_target",
        core.serialization.string().optional()
    ),
    translationSource: core.serialization.property("translation_source", core.serialization.string().optional()),
    translationTarget: core.serialization.property("translation_target", core.serialization.string().optional()),
    glossaryDocument: core.serialization.property("glossary_document", core.serialization.string().optional()),
    settings: RunSettings.optional(),
});

export declare namespace AsrPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        documents: string[];
        selected_model?: AsrPageRequestSelectedModel.Raw | null;
        language?: string | null;
        translation_model?: AsrPageRequestTranslationModel.Raw | null;
        output_format?: AsrPageRequestOutputFormat.Raw | null;
        google_translate_target?: string | null;
        translation_source?: string | null;
        translation_target?: string | null;
        glossary_document?: string | null;
        settings?: RunSettings.Raw | null;
    }
}
