/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponse } from "./CalledFunctionResponse";

export const QrCodeGeneratorPageOutput: core.serialization.ObjectSchema<
    serializers.QrCodeGeneratorPageOutput.Raw,
    Gooey.QrCodeGeneratorPageOutput
> = core.serialization.object({
    outputImages: core.serialization.property("output_images", core.serialization.list(core.serialization.string())),
    rawImages: core.serialization.property("raw_images", core.serialization.list(core.serialization.string())),
    shortenedUrl: core.serialization.property("shortened_url", core.serialization.string().optional()),
    cleanedQrCode: core.serialization.property("cleaned_qr_code", core.serialization.string()),
    calledFunctions: core.serialization.property(
        "called_functions",
        core.serialization.list(CalledFunctionResponse).optional()
    ),
});

export declare namespace QrCodeGeneratorPageOutput {
    interface Raw {
        output_images: string[];
        raw_images: string[];
        shortened_url?: string | null;
        cleaned_qr_code: string;
        called_functions?: CalledFunctionResponse.Raw[] | null;
    }
}
