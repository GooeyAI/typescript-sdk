/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface CompareUpscalerPageOutput {
    /** Output Images */
    outputImages?: Record<string, string>;
    /** Output Videos */
    outputVideos?: Record<string, string>;
    calledFunctions?: Gooey.CalledFunctionResponse[];
}