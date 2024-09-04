import type { TokenizerAndRendererExtension } from 'marked';
/**
 * escape, 替换数学公式中的 < 和 > 为 \lt 和 \gt
 */
export declare function escape(str: string): string;
/**
 * marked Extension for inline math `$ ... $`
 */
export declare const inlineMathExt: TokenizerAndRendererExtension;
/**
 * marked Extension for inline math `\( ... \)`
 */
export declare const inlineMathExt2: TokenizerAndRendererExtension;
/**
 * marked Extension for block math `$$ ... $$`
 */
export declare const blockMathExt: TokenizerAndRendererExtension;
/**
 * marked Extension for block math `\[ ... \]`
 */
export declare const blockMathExt2: TokenizerAndRendererExtension;
