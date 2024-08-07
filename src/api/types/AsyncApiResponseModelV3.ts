/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AsyncApiResponseModelV3 {
    /** Unique ID for this run */
    runId: string;
    /** Web URL for this run */
    webUrl: string;
    /** Time when the run was created as ISO format */
    createdAt: string;
    /** URL to check the status of the run. Also included in the `Location` header of the response. */
    statusUrl: string;
}
