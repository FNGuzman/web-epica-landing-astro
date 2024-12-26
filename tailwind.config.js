/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Asegúrate de que todos los archivos relevantes estén incluidos
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(176,255,64,1) 0%, rgba(49,197,232,1) 42%, rgba(120,42,244,1) 100%)',
      },
    },
  },
  plugins: [],
};