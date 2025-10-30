## Description

This plugin automatically runs `dts-minify` package for every `.d.ts` generated file by Rollup. It WON'T emit `.d.ts` declarations so you should use another plugin for it, for example `rollup-plugin-dts`

## Usage

### Basic

Install

```shell
npm i -D rollup-plugin-dts-minify
```

Connect to rollup

```typescript
import dtsMinify from "rollup-plugin-dts-minify";
import { RollupOptions } from "rollup";

export default {
    plugins: [dtsMinify()]
} as RollupOptions;
```

### Configuration options

#### `quiet: boolean = false`

If `true` plugin won't print any logs

#### `keepJsDocs: boolean = true`

If `false` plugin will also remove JsDocs comments
