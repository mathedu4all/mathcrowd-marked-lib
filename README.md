# mathcrowd-marked-lib

[![npm version](https://badge.fury.io/js/%40mathcrowd%2Fmathcrowd-marked-lib.svg)](https://badge.fury.io/js/%40mathcrowd%2Fmathcrowd-marked-lib)
[![License: Custom](https://img.shields.io/badge/License-Custom-yellow.svg)](https://opensource.org/licenses/)

A powerful TypeScript library for rendering customized markdown syntax with LaTeX support, designed for mathematical visualization in educational contexts.

## 🌟 Features

- ✅ Full CommonMark syntax support
- 🔢 Auto-numbering footnotes with reference links
- 📘 Theorem-like block rendering
- 🖼️ Image resizing capabilities
- 🔍 Hidden/show solution blocks
- 🧮 Server-side TeX to SVG conversion

## 🚀 Quick Start

### Server Integration


#### Installation

```bash
npm install @mathcrowd/mathcrowd-geometry-lib mathjax-full highlight.js
```

### Basic Usage

```typescript
import { tex2svg, renderMarkdown } from '@mathcrowd/mathcrowd-marked-lib'

// Convert TeX to SVG
const svg = tex2svg('$x^2$')

// Render Markdown to HTML
const html = renderMarkdown('### Heading').parsed
```


### Web Integration

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
            tex2svg(renderMarkdown('# Marked in the browser \n\n $x^2+y^2=1$ \n\nRendered by **mathcrowd-marked-lib**.').parsed);
        console.log(renderMarkdown('# Marked in the browser\n\nRendered by **marked**.').lexed)
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

For detailed documentation in Chinese, visit our [Product Page](https://wwww.mathedu4all.com/markdown).

## 🎮 Demo

Try out our interactive demo [here](https://mathedu4all.github.io/mathcrowd-marked-lib/demo/).

## 👥 About Mathcrowd

Mathcrowd is an innovative startup founded by experienced independent developers and mathematics educators. We're on a mission to revolutionize math education in China through cutting-edge technology. Our goal is to create an engaging online community for math enthusiasts and self-learners, offering rich, interactive, and visualized learning content.

🌐 Official Website: [https://www.mathedu4all.com](https://www.mathedu4all.com) 

🌐 Our Online Math Community: [https://www.mathcrowd.cn](https://www.mathcrowd.cn) 

## 📄 License

All Rights Reserved

Copyright © Mathcrowd 2016-2024 (charles@mathcrowd.cn)

```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📞 Support

For any questions or issues, please [open an issue](https://github.com/mathedu4all/mathcrowd-marked-lib/issues) on our GitHub repository.