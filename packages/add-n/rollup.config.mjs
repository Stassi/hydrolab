import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import ts from 'rollup-plugin-ts'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'umd',
        name: 'Stassi'
      },
      {
        file: 'dist/index.mjs',
        format: 'es'
      }
    ],
    plugins: [terser(), ts()]
  }
])
