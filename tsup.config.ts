import { defineConfig } from 'tsup';
import { readFileSync } from 'fs';

export default defineConfig(({ watch }) => [
  {
    entry: ['src/index.ts'],
    format: 'esm',
    minify: true,
    dts: false,
    clean: !watch,
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    cjsInterop: true,
    minify: true,
    dts: true,
    clean: !watch,
    esbuildPlugins: [
      {
        // Workaround for the default export issue in CJS,
        // where you would need to use require('pkg').default
        name: 'fix-cjs-default-export',
        setup(build) {
          build.onLoad({ filter: /src\/index\.ts$/ }, ({ path }) => {
            const contents = readFileSync(path, 'utf8');

            return {
              contents: contents.replace(/export\s+default\s+/, 'export = '),
              loader: 'ts',
            };
          });
        },
      },
    ],
  },
]);
