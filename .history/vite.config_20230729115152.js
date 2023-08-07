import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  extends: ["eslint:all", "plugin:react/all"],
  react: {
    fastRefresh: true,
  },
});
