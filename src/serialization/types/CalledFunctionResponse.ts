/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { Trigger } from "./Trigger";

export const CalledFunctionResponse: core.serialization.ObjectSchema<
    serializers.CalledFunctionResponse.Raw,
    Gooey.CalledFunctionResponse
> = core.serialization.object({
    url: core.serialization.string(),
    trigger: Trigger,
    returnValue: core.serialization.property("return_value", core.serialization.unknown().optional()),
});

export declare namespace CalledFunctionResponse {
    interface Raw {
        url: string;
        trigger: Trigger.Raw;
        return_value?: unknown | null;
    }
}
