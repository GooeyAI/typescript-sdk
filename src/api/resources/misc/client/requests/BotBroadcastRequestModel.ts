/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../../../index";

/**
 * @example
 *     {
 *         text: "text"
 *     }
 */
export interface BotBroadcastRequestModel {
    exampleId?: string;
    runId?: string;
    /** Message to broadcast to all users */
    text: string;
    /** Audio URL to send to all users */
    audio?: string;
    /** Video URL to send to all users */
    video?: string;
    /** Video URL to send to all users */
    documents?: string[];
    /** Buttons to send to all users */
    buttons?: Gooey.ReplyButton[];
    /** Filters to select users to broadcast to. If not provided, will broadcast to all users of this bot. */
    filters?: Gooey.BotBroadcastFilters;
}
