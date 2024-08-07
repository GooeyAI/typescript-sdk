/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * SadTalker only generates 512x512 output. 'crop' handles this by cropping the input to 512x512. 'resize' scales down the input to fit 512x512 and scales it back up after lipsyncing (does not work well for full person images, better for portraits). 'full' processes the cropped region and pastes it back into the original input. 'extcrop' and 'extfull' are similar to 'crop' and 'full' but with extended cropping.
 */
export type SadTalkerSettingsPreprocess = "crop" | "extcrop" | "resize" | "full" | "extfull";

export const SadTalkerSettingsPreprocess = {
    Crop: "crop",
    Extcrop: "extcrop",
    Resize: "resize",
    Full: "full",
    Extfull: "extfull",
} as const;
