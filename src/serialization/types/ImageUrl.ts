/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { Detail } from "./Detail";

export const ImageUrl: core.serialization.ObjectSchema<serializers.ImageUrl.Raw, Gooey.ImageUrl> =
    core.serialization.object({
        url: core.serialization.string().optional(),
        detail: Detail.optional(),
    });

export declare namespace ImageUrl {
    interface Raw {
        url?: string | null;
        detail?: Detail.Raw | null;
    }
}