import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /** доступ с другого устройства в той же сети (через IP:порт) */
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
});
