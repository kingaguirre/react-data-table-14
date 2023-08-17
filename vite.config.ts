import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  logLevel: 'warn',
  plugins: [react()],
  build: {
    ssr: true,
    sourcemap: true,
    lib: {
      entry: 'src/DataTable/index.tsx',
      name: 'DataTable',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-data-table.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'font-awesome',
        'stream',
        'fs',
        'path',
        'http',
        'https',
        'url',
        'zlib',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'font-awesome': 'fontAwesome',
        },
      },
    },
  },
})
