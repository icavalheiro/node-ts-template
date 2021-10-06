import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist/',
        sourcemap: true,
        format: 'cjs'
    },
    plugins: [ typescript( { allowJs: true } ) ]
};