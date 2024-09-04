import * as marked from 'marked';
import { Tokens } from 'marked';

/**
 * Parse Inline Markdown to HTML.
 */
declare const renderMarkdownCompact: (text: string) => {
    parsed: string;
    lexed: marked.Token[];
    time: number;
};

/**
 * Parse Markdown to HTML.
 */
declare const renderMarkdown: (text: string) => {
    parsed: string;
    lexed: Tokens.Generic[];
    time: number;
};

/**
 * convert TeX to SVG in HTML.
 */
declare const tex2svg: (html: string) => string;

export { renderMarkdown, renderMarkdownCompact, tex2svg };
//# sourceMappingURL=index.d.ts.map
