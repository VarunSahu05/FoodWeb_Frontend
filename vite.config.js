import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FoodWeb_Frontend',  // Replace with your GitHub repo name
});
