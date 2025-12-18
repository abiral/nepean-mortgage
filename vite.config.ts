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
        },
      },
      // Improve build performance
      target: 'esnext',
      minify: 'esbuild',
      sourcemap: false, // Remove in production for smaller files
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
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
