/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { CalledFunctionResponseTrigger } from "./CalledFunctionResponseTrigger";

export const CalledFunctionResponse: core.serialization.ObjectSchema<
    serializers.CalledFunctionResponse.Raw,
    Gooey.CalledFunctionResponse
> = core.serialization.object({
    url: core.serialization.string(),
    trigger: CalledFunctionResponseTrigger,
    returnValue: core.serialization.property("return_value", core.serialization.unknown().optional()),
});

export declare namespace CalledFunctionResponse {
    interface Raw {
        url: string;
        trigger: CalledFunctionResponseTrigger.Raw;
        return_value?: unknown | null;
    }
}
