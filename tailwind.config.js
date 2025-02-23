/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        'tf-black': '#000000',
        'tf-dark-gray': '#171719',
        'tf-light-gray': '#232326',
        'tf-white': '#FFFFFF',
        'tf-gray-white': '#cacfd5',

        // Accent colors
        'tf-accent-blue': '#4448da',
        'tf-accent-blue-light': '#4448da80',
        'tf-accent-pink': '#be2ec7',
        'tf-accent-red': '#de1c28',
        'tf-accent-yellow': '#ffaf70',
        'tf-accent-green': '#54e3b1',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 5px theme(colors.tf-accent-blue), 0 0 10px theme(colors.tf-accent-blue)',
          },
          '50%': {
            'box-shadow': '0 0 20px theme(colors.tf-accent-blue), 0 0 25px theme(colors.tf-accent-blue)',
          },
        },
      },
    },
  },
  plugins: [],
}
