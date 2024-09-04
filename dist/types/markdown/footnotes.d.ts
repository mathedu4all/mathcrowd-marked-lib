/**
 * 脚注
 */
import type { Tokens } from 'marked';
/**
 * 脚注引用
 */
export declare const footnoteRefExtension: {
    name: string;
    level: string;
    start: (src: string) => number;
    tokenizer: (src: string) => Tokens.Generic | undefined;
    renderer: (token: Tokens.Generic) => string;
};
/**
 * 脚注定义
 */
export declare const footnoteDefExtension: {
    name: string;
    level: string;
    start: (src: string) => number;
    tokenizer: (src: string) => {
        type: string;
        raw: string;
        id: string;
        text: string;
        tokens: never[];
    } | undefined;
    renderer: (token: Tokens.Generic) => string;
};
export declare const modifyFootnoteTokens: (tokens: Tokens.Generic[]) => Tokens.Generic[];
export declare const modifyFootnoteHtml: (html: string) => string;
