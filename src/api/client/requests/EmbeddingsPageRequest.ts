/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {
 *         texts: ["texts"]
 *     }
 */
export interface EmbeddingsPageRequest {
    exampleId?: string;
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    texts: string[];
    selectedModel?: Gooey.EmbeddingsPageRequestSelectedModel;
    settings?: Gooey.RunSettings;
}
