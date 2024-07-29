/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const ObjectInpaintingPageOutput: core.serialization.ObjectSchema<
    serializers.ObjectInpaintingPageOutput.Raw,
    Gooey.ObjectInpaintingPageOutput
> = core.serialization.object({
    resizedImage: core.serialization.property("resized_image", core.serialization.string()),
    objMask: core.serialization.property("obj_mask", core.serialization.string()),
    outputImages: core.serialization.property("output_images", core.serialization.list(core.serialization.string())),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace ObjectInpaintingPageOutput {
    interface Raw {
        resized_image: string;
        obj_mask: string;
        output_images: string[];
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}
