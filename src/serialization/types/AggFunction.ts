/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Gooey from "../../api/index";
import * as core from "../../core";
import { AggFunctionFunction } from "./AggFunctionFunction";

export const AggFunction: core.serialization.ObjectSchema<serializers.AggFunction.Raw, Gooey.AggFunction> =
    core.serialization.object({
        column: core.serialization.string().optional(),
        function: AggFunctionFunction,
    });

export declare namespace AggFunction {
    interface Raw {
        column?: string | null;
        function: AggFunctionFunction.Raw;
    }
}
