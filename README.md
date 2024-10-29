# mmarked

[![npm version](https://badge.fury.io/js/%40mathcrowd%2Fmmarked.svg)](https://badge.fury.io/js/%40mathcrowd%2Fmmarked)
[![License: Custom](https://img.shields.io/badge/License-Custom-yellow.svg)](https://creativecommons.org/licenses/by-nc/4.0)

A powerful TypeScript library for rendering customized markdown syntax with LaTeX support, designed for mathematical visualization in educational contexts.

## 🌟 Features

- ✅ **Full CommonMark syntax support:** Comprehensive compatibility with CommonMark standards.
- 🔢 **Footnotes Blocks:** Supports rendering auto-numbered footnotes with easy reference links.
- 📘 **Theorem-like blocks:**  Supports rendering mathematical theorems, lemmas, and examples in a block format with titles, auto-numbering, and reference links.
- 🖼️ **Image resizing capabilities:** Allows for customizable rendering of images and videos using simple syntax.
- 🔍 **Hidden/show solution blocks:** Provides a solution block with a toggle button for easy visibility control, implemented with straightforward syntax.
- 🧮 **TeX to SVG conversion:** Converts TeX equations to scalable vector graphics for high-quality rendering.
- 🔗 **Easy Integration with Existing Systems:** Supports both server-side and browser-side implementations for flexible use.

## 🚀 Quick Start

### Editor Integeration

Use mmarked in VSCode : https://marketplace.visualstudio.com/items?itemName=MCLab.mmarked

### Server Side Integration

#### Installation

```bash
npm install @mathcrowd/mmarked mathjax-full highlight.js
```

#### Basic Usage

```typescript
import { tex2svg, renderMarkdown } from '@mathcrowd/mmarked'

// Convert TeX to SVG
const svg = tex2svg('$x^2$')

// Render Markdown to HTML
const html = renderMarkdown('### Heading').parsed
```


### Web Browser Side Integration

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Marked in the browser</title>
</head>

<body>
    <div id="content"></div>
    <script src="dist/browser.umd.js"></script>
    <script>
        const { tex2svg, renderMarkdown } = marked
        document.getElementById('content').innerHTML =
            tex2svg(renderMarkdown('# Marked in the browser \n\n $x^2+y^2=1$ \n\nRendered by **mmarked**.').parsed);
        console.log(renderMarkdown('# Marked in the browser\n\nRendered by **mmarked**.').lexed)
    </script>
</body>

</html>
```

## 📚 API Reference

| Function | Description |
|----------|-------------|
| `tex2svg(tex: string): string` | Converts TeX to SVG in HTML format |
| `renderMarkdown(markdown: string): {parsed:string, lexed: Token[], time: number}` | Renders Markdown to HTML |
| `renderMarkdownCompact(markdown: string): {parsed:string, lexed: Token[], time: number}` | Renders Markdown to HTML without `<p>` tags |

⚠️ **Important**: Always purify the output HTML using [DOMPurify](https://github.com/cure53/DOMPurify) to prevent XSS attacks.

## 📖 Documentation

For detailed documentation in Chinese, visit our [Product Page](https://lab.mathcrowd.cn/mmarked).

## 🎮 Demo

Try out our interactive demo [here](https://mathedu4all.github.io/mmarked/demo/).

## 👥 About Mathcrowd

Mathcrowd is an innovative startup founded by experienced independent developers and mathematics educators. We're on a mission to revolutionize math education in China through cutting-edge technology. Our goal is to create an engaging online community for math enthusiasts and self-learners, offering rich, interactive, and visualized learning content.

🌐 MCLab Official Website: [https://lab.mathcrowd.cn](https://lab.mathcrowd.cn) 

🌐 Our Online Math Community: [https://www.mathcrowd.cn](https://www.mathcrowd.cn) 

💬 Join Our Discord: https://discord.gg/6VMUVA5Yq2

## 📄 License

[LICENSE](./LICENSE.md)

For commercial use, please contact [charles@mathcrowd.cn] for details on commercial licensing.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📞 Support

For any questions or issues, please [open an issue](https://github.com/mathedu4all/mathcrowd-marked-lib/issues) on our GitHub repository.