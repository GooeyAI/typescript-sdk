/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface BulkEvalPageRequest {
    functions?: Gooey.RecipeFunction[];
    /** Variables to be used as Jinja prompt templates and in functions as arguments */
    variables?: Record<string, unknown>;
    selectedModel?: Gooey.BulkEvalPageRequestSelectedModel;
    avoidRepetition?: boolean;
    numOutputs?: number;
    quality?: number;
    maxTokens?: number;
    samplingTemperature?: number;
    /**
     * Upload or link to a CSV or google sheet that contains your sample input data.
     * For example, for Copilot, this would sample questions or for Art QR Code, would would be pairs of image descriptions and URLs.
     * Remember to includes header names in your CSV too.
     */
    documents: string[];
    /**
     * Specify custom LLM prompts to calculate metrics that evaluate each row of the input data. The output should be a JSON object mapping the metric names to values.
     * _The `columns` dictionary can be used to reference the spreadsheet columns._
     *
     */
    evalPrompts?: Gooey.EvalPrompt[];
    /** Aggregate using one or more operations. Uses [pandas](https://pandas.pydata.org/pandas-docs/stable/reference/groupby.html#dataframegroupby-computations-descriptive-stats). */
    aggFunctions?: Gooey.AggFunction[];
    settings?: Gooey.RunSettings;
}
