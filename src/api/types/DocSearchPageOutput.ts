/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface DocSearchPageOutput {
    outputText: string[];
    references: Gooey.SearchReference[];
    finalPrompt: string;
    finalSearchQuery?: string;
    calledFunctions?: Gooey.CalledFunctionResponse[];
}
