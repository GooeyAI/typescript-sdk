/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface RelatedGoogleGptResponse {
    outputText: string[];
    serpResults: Record<string, unknown>;
    references: Gooey.SearchReference[];
    finalPrompt: string;
    finalSearchQuery?: string;
    searchQuery: string;
}
