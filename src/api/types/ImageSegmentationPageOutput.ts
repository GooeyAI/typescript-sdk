/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Gooey from "../index";

export interface ImageSegmentationPageOutput {
    outputImage: string;
    cutoutImage: string;
    resizedImage: string;
    resizedMask: string;
    calledFunctions?: Gooey.CalledFunctionResponse[];
}
