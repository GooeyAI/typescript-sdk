/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const GoogleImageGenPageOutput: core.serialization.ObjectSchema<
    serializers.GoogleImageGenPageOutput.Raw,
    Gooey.GoogleImageGenPageOutput
> = core.serialization.object({
    outputImages: core.serialization.property("output_images", core.serialization.list(core.serialization.string())),
    imageUrls: core.serialization.property("image_urls", core.serialization.list(core.serialization.string())),
    selectedImage: core.serialization.property("selected_image", core.serialization.string().optional()),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace GoogleImageGenPageOutput {
    interface Raw {
        output_images: string[];
        image_urls: string[];
        selected_image?: string | null;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}