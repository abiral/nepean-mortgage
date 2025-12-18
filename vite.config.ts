import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: "default",
        },
      }),
    ],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    build: {
      // Optimize chunk sizes for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['framer-motion', '@fancyapps/ui'],
          },
          // Ensure CSS is extracted into separate files
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return '[name]-[hash][extname]';
            const info = assetInfo.name.split('.');
            const extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/css/i.test(extType)) {
              return `css/[name]-[hash][extname]`;
            }
            return `[name]-[hash][extname]`;
          },
        },
      },
      // Improve build performance
      target: 'esnext',
      minify: 'esbuild',
      sourcemap: false, // Remove in production for smaller files
      cssCodeSplit: true, // Enable CSS code splitting
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
    // CSS optimization
    css: {
      devSourcemap: false,
    },
    // Configure server headers for development
    server: {
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
    // Configure preview server with cache headers
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  };
});
