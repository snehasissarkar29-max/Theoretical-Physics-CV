import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // If running in GitHub Actions, resolve the exact repository base path
  const getBasePath = () => {
    let p = process.env.VITE_BASE_PATH;
    if (p) {
      p = p.replace(/\/+/g, '/');
      if (!p.startsWith('/')) p = '/' + p;
      if (!p.endsWith('/')) p = p + '/';
      return p;
    }
    if (process.env.GITHUB_REPOSITORY) {
      const parts = process.env.GITHUB_REPOSITORY.split('/');
      if (parts[1]) {
        return `/${parts[1]}/`;
      }
    }
    return './';
  };

  const base = getBasePath();

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
