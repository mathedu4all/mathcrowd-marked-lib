/**
 * 证明、解答
 */
import { Tokens } from 'marked';
export declare const solutionExtension: {
    name: string;
    level: string;
    start: (src: string) => number;
    tokenizer: (src: string) => Tokens.Generic | undefined;
    renderer: (token: Tokens.Generic) => string;
};
