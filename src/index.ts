import { Plugin } from "rollup";
import { createMinifier } from "dts-minify";
import ts from "typescript";

export type DtsMinifyOptions = {
    quiet: boolean;
    keepJsDocs: boolean;
};

const defaultOptions: DtsMinifyOptions = {
    quiet: false,
    keepJsDocs: true
};

export default function dtsMinifyPlugin(options?: Partial<DtsMinifyOptions>): Plugin {
    const config = {
        ...defaultOptions,
        ...(options ?? {})
    };

    return {
        name: "dts-minify",
        generateBundle: (options, bundle) => {
            const minifier = createMinifier(ts);

            for (const [fileName, file] of Object.entries(bundle)) {
                if (fileName.endsWith(".d.ts") && file.type === "chunk") {
                    file.code = minifier.minify(file.code, { keepJsDocs: config.keepJsDocs });
                    if (!config.quiet) console.log(`Minified ${fileName}`);
                }
            }
        }
    };
}
