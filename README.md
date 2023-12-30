# svg-path-utils

[![license][license badge]][license link]
[![npm package][npm badge]][npm link]
[![github stars][stars badge]][stars link]
[![follow taep96 on x][x badge]][x link]

[license badge]: https://img.shields.io/github/license/taep96/svg-path-utils?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY2FsZSI%2BPHBhdGggZD0ibTE2IDE2IDMtOCAzIDhjLS44Ny42NS0xLjkyIDEtMyAxcy0yLjEzLS4zNS0zLTFaIi8%2BPHBhdGggZD0ibTIgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiLz48cGF0aCBkPSJNNyAyMWgxMCIvPjxwYXRoIGQ9Ik0xMiAzdjE4Ii8%2BPHBhdGggZD0iTTMgN2gyYzIgMCA1LTEgNy0yIDIgMSA1IDIgNyAyaDIiLz48L3N2Zz4%3D&logoColor=white&labelColor=black&color=white
[npm badge]: https://img.shields.io/npm/v/%40taep96%2Fsvg-path-utils?style=for-the-badge&logo=npm&labelColor=black&color=white
[stars badge]: https://img.shields.io/github/stars/taep96/svg-path-utils?style=for-the-badge&logo=github&labelColor=black&color=white
[x badge]: https://img.shields.io/twitter/follow/taep96?style=for-the-badge&logo=x&labelColor=black&color=%230000
[license link]: https://github.com/taep96/svg-path-utils/blob/main/LICENSE
[npm link]: https://www.npmjs.com/package/@taep96/svg-path-utils
[stars link]: https://github.com/taep96/svg-path-utils/stargazers
[x link]: https://twitter.com/intent/follow?screen_name=taep96

## Installation

```sh
bun install @taep96/svg-path-utils
```

## Usage

<!-- prettier-ignore-start -->

```tsx
import { Path } from "@taep96/svg-path-utils";

const path = new Path()
  .M([10, 30])
  .A([[20, 20], 0, 0, 1, [50, 30]])
  .A([[20, 20], 0, 0, 1, [90, 30]])
  .Q(
    // Possible but not recommended
    [[90, 60], [50, 90]],
    [[10, 60], [10, 30]],
  )
  .Z()
  .toString();

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d={path} />
</svg>
```

<!-- prettier-ignore-end -->

## Commands

Available commands: `M`, `m`, `L`, `l`, `H`, `h`, `V`, `v`, `C`, `c`, `S`, `s`,
`Q`, `q`, `T`, `t`, `A`, `a`, `Z`, `z`

See: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
