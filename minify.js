import { createMinifier } from "dts-minify";
import { readFileSync, writeFileSync } from "fs";
import ts from "typescript";

const minifier = createMinifier(ts);
writeFileSync("./dist/index.d.ts", minifier.minify(readFileSync("./dist/index.d.ts").toString(), { keepJsDocs: true }));
