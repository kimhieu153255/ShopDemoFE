import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    // ... any rules you want
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  // ... others are omitted for brevity
});
