# mmarked

[![npm version](https://badge.fury.io/js/%40mathcrowd%2Fmmarked.svg)](https://badge.fury.io/js/%40mathcrowd%2Fmmarked)
[![License: Custom](https://img.shields.io/badge/License-Custom-yellow.svg)](https://creativecommons.org/licenses/by-nc/4.0)

![icon.png](./icon.png)

[English](./README.md)

这是一个功能强大的 TypeScript 库,用于渲染带有 LaTeX 支持的自定义 Markdown 语法,专为教育领域中的数学可视化而设计

## 🌟 功能特性

- ✅ **完整的 CommonMark 语法支持:** 与 CommonMark 标准完全兼容
- 🔢 **脚注块:** 支持自动编号的脚注,并带有易于引用的链接
- 📘 **定理样式块:** 支持以标题、自动编号和引用链接的形式呈现数学定理、引理和例子
- 🖼️ **图像缩放功能:** 使用简单的语法可自定义渲染图像和视频
- 🔍 **隐藏/显示解决方案块:** 带有切换按钮的解决方案块,轻松控制可见性
- 🧮 **TeX 转 SVG:** 将 TeX 方程式转换为矢量图形,实现高质量渲染
- 🔗 **与现有系统轻松集成:** 支持服务器端和浏览器端实现

## 🚀 快速入门

### 编辑器集成

在 VSCode 中使用 mmarked: https://marketplace.visualstudio.com/items?itemName=MCLab.mmarked  
在 Logseq 中使用 mmarked: https://github.com/mathedu4all/mmarked-logseq-extension

### 服务器端集成

#### 安装

```bash
npm install @mathcrowd/mmarked mathjax-full highlight.js
```

#### 基本用法

```typescript
import { tex2svg, renderMarkdown } from '@mathcrowd/mmarked'

// 将 TeX 转换为 SVG
const svg = tex2svg('$x^2$')

// 将 Markdown 渲染为 HTML
const html = renderMarkdown('### 标题').parsed
```

### 浏览器端集成

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>在浏览器中使用 Marked</title>
</head>
<body>
    <div id="content"></div>
    <script src="dist/browser.umd.js"></script>
    <script>
        const { tex2svg, renderMarkdown } = marked;
        document.getElementById('content').innerHTML = 
            tex2svg(renderMarkdown('# 在浏览器中使用 Marked \n\n $x^2+y^2=1$ \n\n由 **mmarked** 渲染').parsed);
        console.log(renderMarkdown('# 在浏览器中使用 Marked\n\n由 **mmarked** 渲染').lexed);
    </script>
</body>
</html>
```

## 📚 API 参考

| 函数 | 描述 |
|----------|-------------|
| `tex2svg(tex: string): string` | 将 TeX 转换为 HTML 格式的 SVG |
| `renderMarkdown(markdown: string): {parsed: string, lexed: Token[], time: number}` | 将 Markdown 渲染为 HTML |
| `renderMarkdownCompact(markdown: string): {parsed: string, lexed: Token[], time: number}` | 将 Markdown 渲染为 HTML,不包含 `<p>` 标签 |

⚠️ **重要提示:** 始终使用 [DOMPurify](https://github.com/cure53/DOMPurify) 清洁输出的 HTML,以防止 XSS 攻击

## 📖 文档

详细的中文文档请访问我们的 [产品页面](https://lab.mathcrowd.cn/mmarked)

## 🎮 演示

您可以在这里尝试我们的交互式演示: [https://mathedu4all.github.io/mmarked/demo/](https://mathedu4all.github.io/mmarked/demo/)

## 👥 关于 Mathcrowd

Mathcrowd 是一家由经验丰富的独立开发者和数学教育工作者创办的创新型初创公司我们的目标是通过尖端技术革新中国的数学教育,为数学爱好者和自主学习者创造一个富有吸引力的在线社区,提供丰富、互动和可视化的学习内容

🌐 MCLab 官方网站: [https://lab.mathcrowd.cn](https://lab.mathcrowd.cn)  
🌐 我们的在线数学社区: [https://www.mathcrowd.cn](https://www.mathcrowd.cn)  
💬 加入我们的 Discord: [https://discord.gg/6VMUVA5Yq2](https://discord.gg/6VMUVA5Yq2)

## 📄 许可证

请参见 [LICENSE](./LICENSE.md)

如需商业用途,请联系 charles@mathcrowd.cn 获取许可证详情

## 🤝 贡献

我们欢迎各种形式的贡献!请查看我们的[贡献指南](CONTRIBUTING.md)了解更多详情

## 📞 支持

如有任何问题或问题,请在我们的 GitHub 仓库[提交 issue](https://github.com/mathedu4all/mathcrowd-marked-lib/issues)