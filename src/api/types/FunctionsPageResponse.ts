/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface FunctionsPageResponse {
    /** Unique ID for this run */
    id: string;
    /** Web URL for this run */
    url: string;
    /** Time when the run was created as ISO format */
    createdAt: string;
    /** Output of the run */
    output: Gooey.FunctionsPageOutput;
}
