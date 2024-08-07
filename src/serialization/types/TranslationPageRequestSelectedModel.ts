/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";

export const TranslationPageRequestSelectedModel: core.serialization.Schema<
    serializers.TranslationPageRequestSelectedModel.Raw,
    Gooey.TranslationPageRequestSelectedModel
> = core.serialization.enum_(["google", "ghana_nlp"]);

export declare namespace TranslationPageRequestSelectedModel {
    type Raw = "google" | "ghana_nlp";
}
