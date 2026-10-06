/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        r2r: {
          navy: '#075783',
          deep: '#0B3657',
          teal: '#20B7B2',
          tealdark: '#0E7F7B', // teal for text on light backgrounds (contrast)
          cyan: '#DFF5F5',
          sky: '#EDF7FA',
          paper: '#F8FBFC',
          ink: '#152B3C',
          muted: '#607382',
          line: '#DDE9ED',
        },
      },
      fontFamily: {
        heading: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,54,87,0.05), 0 4px 14px rgba(11,54,87,0.05)',
        lift: '0 2px 4px rgba(11,54,87,0.06), 0 12px 28px rgba(11,54,87,0.10)',
      },
    },
  },
  plugins: [],
};
