/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface BulkRunnerPageStatusResponse {
    /** Unique ID for this run */
    runId: string;
    /** Web URL for this run */
    webUrl: string;
    /** Time when the run was created as ISO format */
    createdAt: string;
    /** Total run time in seconds */
    runTimeSec: number;
    /** Status of the run */
    status: Gooey.RecipeRunState;
    /** Details about the status of the run as a human readable string */
    detail: string;
    /** Output of the run. Only available if status is `"completed"` */
    output?: Gooey.BulkRunnerPageOutput;
}