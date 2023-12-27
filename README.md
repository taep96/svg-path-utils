# svg-path-utils

Create SVG paths using a builder pattern

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
