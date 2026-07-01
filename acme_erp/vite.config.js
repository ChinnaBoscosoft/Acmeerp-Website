import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    process.env.ANALYZE && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (
            id.includes('react-dom') ||
            id.includes('node_modules/react/') ||
            id.includes('node_modules\\react\\')
          ) {
            return 'react-vendor'
          }

          if (id.includes('react-router')) {
            return 'router'
          }

          if (id.includes('react-intersection-observer') || id.includes('react-countup')) {
            return 'ui-runtime'
          }

          if (id.includes('framer-motion')) {
            return 'motion'
          }

          if (id.includes('react-icons')) {
            return 'react-icons'
          }

          if (id.includes('lucide-react')) {
            return 'lucide'
          }

          if (id.includes('d3')) {
            return 'charts'
          }

          if (id.includes('uuid')) {
            return 'chat-utils'
          }

          if (id.includes('react-toastify') || id.includes('sweetalert2') || id.includes('react-tooltip')) {
            return 'ui-feedback'
          }

          if (id.includes('react-google-recaptcha-v3') || id.includes('emailjs-com')) {
            return 'forms'
          }

          return 'vendor'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-intersection-observer',
    ],
    exclude: ['web-vitals'],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
  },
})
