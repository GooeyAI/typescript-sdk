/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {
 *         documents: ["documents"]
 *     }
 */
export interface AsrPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    documents: string[];
    selectedModel?: Gooey.AsrPageRequestSelectedModel;
    language?: string;
    translationModel?: Gooey.AsrPageRequestTranslationModel;
    outputFormat?: Gooey.AsrPageRequestOutputFormat;
    /** use `translation_model` & `translation_target` instead. */
    googleTranslateTarget?: string;
    translationSource?: string;
    translationTarget?: string;
    /**
     * Provide a glossary to customize translation and improve accuracy of domain-specific terms.
     * If not specified or invalid, no glossary will be used. Read about the expected format [here](https://docs.google.com/document/d/1TwzAvFmFYekloRKql2PXNPIyqCbsHRL8ZtnWkzAYrh8/edit?usp=sharing).
     */
    glossaryDocument?: string;
    settings?: Gooey.RunSettings;
}
