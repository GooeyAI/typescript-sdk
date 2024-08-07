/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {}
 */
export interface TranslationPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    texts?: string[];
    selectedModel?: Gooey.TranslationPageRequestSelectedModel;
    translationSource?: string;
    translationTarget?: string;
    /**
     * Provide a glossary to customize translation and improve accuracy of domain-specific terms.
     * If not specified or invalid, no glossary will be used. Read about the expected format [here](https://docs.google.com/document/d/1TwzAvFmFYekloRKql2PXNPIyqCbsHRL8ZtnWkzAYrh8/edit?usp=sharing).
     */
    glossaryDocument?: string;
    settings?: Gooey.RunSettings;
}
