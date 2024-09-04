/**
 * 定理、引理、推论、公理、定义、例
 */
import { TokenizerAndRendererExtension, Tokens } from 'marked';
/**
 * 定理、引理、推论、公理、定义、例 引用
 */
export declare const theoremLikeRefExtension: TokenizerAndRendererExtension;
/**
 * 定理、引理、推论、公理、定义、例 定义
 */
export declare const theoremLikeDefExtension: TokenizerAndRendererExtension;
export declare const modifyTheoremTokens: (tokens: Tokens.Generic[]) => Tokens.Generic[];
