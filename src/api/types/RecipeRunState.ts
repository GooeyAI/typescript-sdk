/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An enumeration.
 */
export type RecipeRunState = "starting" | "running" | "completed" | "failed";

export const RecipeRunState = {
    Starting: "starting",
    Running: "running",
    Completed: "completed",
    Failed: "failed",
} as const;
