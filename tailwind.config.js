/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Modern dark theme
        'tf-black': '#0A0A0F',        // Deeper black for better contrast
        'tf-dark-gray': '#13131A',    // Slightly warmer dark gray
        'tf-light-gray': '#1F1F2C',   // Subtle purple tint
        'tf-white': '#FFFFFF',
        'tf-gray-white': '#E2E8F0',   // Cooler white for better readability

        // Primary accent - Electric indigo
        'tf-accent-primary': '#6366F1',      // Main accent
        'tf-accent-primary-light': '#818CF8', // Lighter variant
        'tf-accent-primary-dark': '#4F46E5',  // Darker variant

        // Secondary accents - Vibrant complementary colors
        'tf-accent-rose': '#F43F5E',    // Modern pink-red
        'tf-accent-amber': '#F59E0B',    // Warm amber
        'tf-accent-emerald': '#10B981',  // Fresh emerald
        'tf-accent-sky': '#0EA5E9',      // Bright sky blue
        'tf-accent-violet': '#8B5CF6',   // Rich violet

        // Semantic colors
        'tf-success': '#22C55E',         // Success green
        'tf-warning': '#F59E0B',         // Warning amber
        'tf-error': '#EF4444',           // Error red
        'tf-info': '#3B82F6',            // Info blue

        // Gradients (use with bg-gradient-to-r)
        'tf-gradient-1-from': '#6366F1',  // Indigo
        'tf-gradient-1-to': '#8B5CF6',    // Violet
        'tf-gradient-2-from': '#F43F5E',  // Rose
        'tf-gradient-2-to': '#F59E0B',    // Amber
        'tf-gradient-3-from': '#10B981',  // Emerald
        'tf-gradient-3-to': '#0EA5E9',    // Sky
      },
      animation: {
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.2',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.3',
          },
        },
      },
    },
  },
  plugins: [],
}
