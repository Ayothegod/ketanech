module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#1fb6ff",
        "blue-dark": "#1810ff",
        "blue": "#407bff",
      },
      backgroundImage: {
        'background': "url('./asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')",
      },
    },
  },
  plugins: [],
}