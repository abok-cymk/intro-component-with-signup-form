import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/intro-component-with-signup-form/",
  plugins: [react(), tailwindcss()],
});


