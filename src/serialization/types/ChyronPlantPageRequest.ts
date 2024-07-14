/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { RecipeFunction } from "./RecipeFunction";
import { RunSettings } from "./RunSettings";

export const ChyronPlantPageRequest: core.serialization.ObjectSchema<
    serializers.ChyronPlantPageRequest.Raw,
    Gooey.ChyronPlantPageRequest
> = core.serialization.object({
    functions: core.serialization.list(RecipeFunction).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    midiNotes: core.serialization.property("midi_notes", core.serialization.string()),
    midiNotesPrompt: core.serialization.property("midi_notes_prompt", core.serialization.string().optional()),
    chyronPrompt: core.serialization.property("chyron_prompt", core.serialization.string().optional()),
    settings: RunSettings.optional(),
});

export declare namespace ChyronPlantPageRequest {
    interface Raw {
        functions?: RecipeFunction.Raw[] | null;
        variables?: Record<string, unknown> | null;
        midi_notes: string;
        midi_notes_prompt?: string | null;
        chyron_prompt?: string | null;
        settings?: RunSettings.Raw | null;
    }
}
