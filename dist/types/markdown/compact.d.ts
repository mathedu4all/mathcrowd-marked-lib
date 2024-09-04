/**
 * Parse Inline Markdown to HTML.
 */
export declare const renderMarkdownCompact: (text: string) => {
    parsed: string;
    lexed: import("marked").Token[];
    time: number;
};
