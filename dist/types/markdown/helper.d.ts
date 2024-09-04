/**
 * 编码URL并将%25替换回%
 * @param href 需要编码的URL字符串
 * @returns 编码后的URL字符串，如果编码过程中出错则返回null
 */
export declare function cleanUrl(href: string): string | null;
/**
 * 查找字符串中给定类型的闭合括号的位置
 * @param str 需要查找的字符串
 * @param b 包含两个字符的字符串，如"()"或"[]"
 * @returns 闭合括号的位置，如果找不到或匹配不正确则返回-1
 */
export declare function findClosingBracket(str: string, b: string): number;
/**
 * 移除字符串末尾的指定字符（或非指定字符）
 * 等价于 str.replace(/c*$/, '')。
 * /c*$/ 可能会导致正则表达式拒绝服务（REDOS）攻击。
 *
 * @param str 需要处理的字符串
 * @param c 要移除的字符
 * @param invert 是否反转移除条件，默认为 false，即移除指定字符
 * @returns 处理后的字符串
 */
export declare function rtrim(str: string, c: string, invert?: boolean): string;
/**
 * 占位符对象，模拟一个没有实际功能的 RegExp 对象
 */
export declare const noopTest: RegExp;
/**
 * 用于创建和修改正则表达式
 *
 * @param regex 可以是字符串或 RegExp 对象
 * @param opt 可选的正则表达式标志
 * @returns 一个对象，允许链式调用 replace 方法并获取修改后的正则表达式
 */
export declare function edit(regex: string | RegExp, opt?: string): {
    replace: (name: string | RegExp, val: string | RegExp) => any;
    getRegex: () => RegExp;
};
export declare const generateValidClassName: (name: string) => string;
export declare const isNodeEnvironment: () => boolean;
export declare function parseSizeFromTitle(str: string): {
    text: string | null;
    width: number | null;
    height: number | null;
};
