# mathcrowd-marked-lib

This is a Typescript library for rendering customized markdown syntax and providing tex2svg for server-side rendering.

This library is a repack of MathJax and marked.js.

This project is utilized in our mathematical visualization project for educatinal use and provides limited technical support on github.

## Features

- Support CommonMark syntax.
- Support auto-numbering footnotes and generating ref links.
- Support theorem-like block.
- Support image resizing.
- Support hidden/show solution block.

## Install

```
npm i @mathcrowd/mathcrowd-geometry-lib
```

## Usage

```
import { tex2svg } from '@mathcrowd/mathcrowd-marked-lib'

const svg = tex2svg('$x^2$')
const html = renderMarkdown('###Heading')
```


## API

- `tex2svg`: convert TeX to SVG in HTML.
- `renderMarkdown`: render markdown to HTML.
- `renderMarkdownCompact`: render markdown to HTML without `<p>` tag.

**!Important: The output HTML should be purified by [DOMPurify](https://github.com/cure53/DOMPurify)**

https://mathedu4all.github.io/mathcrowd-marked-lib/

## Demo

https://mathedu4all.github.io/mathcrowd-marked-lib/demo/

## About Us

Mathcrowd is a startup founded by independent developers and former math educators, specializing in the application of cutting-edge information technology in mathematics education in China. We are dedicated to building an online community for math enthusiasts and self-learners, offering rich, interactive, and visualized math learning content. Our platform provides a space for sharing and discussing mathematical ideas, fostering an engaging and collaborative learning environment.

Official Site: https://www.mathcrowd.cn (Under construction)

## Copyright and License

All Rights Reserved

Copyright © Mathcrowd 2016-2024 ([charles@mathcrowd.cn](mailto:charles@mathcrowd.cn))  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.