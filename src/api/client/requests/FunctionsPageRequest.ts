/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../../index";

/**
 * @example
 *     {}
 */
export interface FunctionsPageRequest {
    exampleId?: string;
    /** The JS code to be executed. */
    code?: string;
    /** Variables to be used in the code */
    variables?: Record<string, unknown>;
    settings?: Gooey.RunSettings;
}
