/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { QrCodeGeneratorPageOutput } from "./QrCodeGeneratorPageOutput";

export const QrCodeGeneratorPageResponse: core.serialization.ObjectSchema<
    serializers.QrCodeGeneratorPageResponse.Raw,
    Gooey.QrCodeGeneratorPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: QrCodeGeneratorPageOutput,
});

export declare namespace QrCodeGeneratorPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: QrCodeGeneratorPageOutput.Raw;
    }
}