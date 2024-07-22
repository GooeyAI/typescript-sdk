/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ConversationStart {
    /** The conversation ID you provided in the request, or a random ID if not provided */
    conversationId: string;
    /** The user ID associated with this conversation */
    userId: string;
    /** The user message ID you provided in the request, or a random ID if not provided. */
    userMessageId: string;
    /** The bot message ID. Use this ID as the `context_msg_id` when sending a `button_pressed`. */
    botMessageId: string;
    /** Time when the conversation was created as ISO format */
    createdAt: string;
    /** The conversation was started. Save the IDs for future requests. */
    type?: string;
}
