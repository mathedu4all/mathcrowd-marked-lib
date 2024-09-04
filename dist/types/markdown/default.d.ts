import { Tokens } from 'marked';
/**
 * Parse Markdown to HTML.
 */
export declare const renderMarkdown: (text: string) => {
    parsed: string;
    lexed: Tokens.Generic[];
    time: number;
};
