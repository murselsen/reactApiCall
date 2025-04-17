import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from "process";


const appName = process.env.npm_package_name;
const appMode = process.env.NODE_ENV; // Development or Production

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  //uygulama yolu
  base: appMode === "development" ? "/" : `/${appName}/`,
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }

})
