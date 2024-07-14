/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { EmailFaceInpaintingPageOutput } from "./EmailFaceInpaintingPageOutput";

export const EmailFaceInpaintingPageResponse: core.serialization.ObjectSchema<
    serializers.EmailFaceInpaintingPageResponse.Raw,
    Gooey.EmailFaceInpaintingPageResponse
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    output: EmailFaceInpaintingPageOutput,
});

export declare namespace EmailFaceInpaintingPageResponse {
    interface Raw {
        id: string;
        url: string;
        created_at: string;
        output: EmailFaceInpaintingPageOutput.Raw;
    }
}
