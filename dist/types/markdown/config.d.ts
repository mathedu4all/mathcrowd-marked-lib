import type { Tokens, Renderer, Lexer } from 'marked';
/**
 * Override block level tokenizer methods rules:
 * 1. space(src: string): Tokens.Space
 * 2. code(src: string): Tokens.Code
 * 3. fences(src: string): Tokens.Code
 * 4. heading(src: string): Tokens.Heading
 * 5. hr(src: string): Tokens.Hr
 * 6. blockquote(src: string): Tokens.Blockquote
 * 7. list(src: string): Tokens.List
 * 8. html(src: string): Tokens.HTML
 * 9. def(src: string): Tokens.Def
 * 10.table(src: string): Tokens.Table
 * 11. lheading(src: string): Tokens.Heading
 * 12. paragraph(src: string): Tokens.Paragraph
 * 13. text(src: string): Tokens.Text
 */
export declare const overrideBlockRules: (lexer: Lexer) => Lexer;
/**
 * Override inline level tokenizer methods rules:
 * 1. escape(src: string): Tokens.Escape
 * 2. tag(src: string): Tokens.Tag
 * 3. link(src: string): Tokens.Link | Tokens.Image
 * 4. reflink(src: string, links: object): Tokens.Link | Tokens.Image | Tokens.Text
 * 5. emStrong(src: string, maskedSrc: string, prevChar: string): Tokens.Em | Tokens.Strong
 * 6. codespan(src: string): Tokens.Codespan
 * 7. br(src: string): Tokens.Br
 * 8. del(src: string): Tokens.Del
 * 9. autolink(src: string): Tokens.Link
 * 10. url(src: string): Tokens.Link
 * 11. inlineText(src: string): Tokens.Text
 */
export declare const overrideInlineRules: (lexer: Lexer) => Lexer;
/**
 * Override block-level renderer methods:
 * 1. space(token: Tokens.Space): string
 * 2. code(token: Tokens.Code): string
 * 3. blockquote(token: Tokens.Blockquote): string
 * 4. html(token: Tokens.HTML | Tokens.Tag): string
 * 5. heading(token: Tokens.Heading): string
 * 6. hr(token: Tokens.Hr): string
 * 7. list(token: Tokens.List): string
 * 8. listitem(token: Tokens.ListItem): string
 * 9. checkbox(token: Tokens.Checkbox): string
 * 10. paragraph(token: Tokens.Paragraph): string
 * 11. table(token: Tokens.Table): string
 * 12. tablerow(token: Tokens.TableRow): string
 * 13. tablecell(token: Tokens.TableCell): string
 */
export declare const overrideBlockRenderer: {
    paragraph(this: Renderer, { tokens }: Tokens.Paragraph): string;
    list(this: Renderer, token: Tokens.List): string;
    listitem(this: Renderer, item: Tokens.ListItem): string;
};
/**
 * Override inline renderer methods:
 *
 * 1. strong(token: Tokens.Strong): string
 * 2. em(token: Tokens.Em): string
 * 3. codespan(token: Tokens.Codespan): string
 * 4. br(token: Tokens.Br): string
 * 5. del(token: Tokens.Del): string
 * 6. link(token: Tokens.Link): string
 * 7. image(token: Tokens.Image): string
 * 8. text(token: Tokens.Text | Tokens.Escape | Tokens.Tag): string
 *
 */
export declare const overrideInlineRenderer: {
    image(this: Renderer, item: Tokens.Image): string;
};
