/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface BulkRunnerPageRequest {
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    /**
     * Upload or link to a CSV or google sheet that contains your sample input data.
     * For example, for Copilot, this would sample questions or for Art QR Code, would would be pairs of image descriptions and URLs.
     * Remember to includes header names in your CSV too.
     */
    documents: string[];
    /**
     * Provide one or more Gooey.AI workflow runs.
     * You can add multiple runs from the same recipe (e.g. two versions of your copilot) and we'll run the inputs over both of them.
     */
    runUrls: string[];
    /** For each input field in the Gooey.AI workflow, specify the column in your input data that corresponds to it. */
    inputColumns: Record<string, string>;
    /** For each output field in the Gooey.AI workflow, specify the column name that you'd like to use for it in the output data. */
    outputColumns: Record<string, string>;
    /** _(optional)_ Add one or more Gooey.AI Evaluator Workflows to evaluate the results of your runs. */
    evalUrls?: string[];
    settings?: Gooey.RunSettings;
}
