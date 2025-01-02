module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00fff9',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-dark': '#0a0a0f',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00fff9, 0 0 20px #00fff9',
        'neon-pink': '0 0 5px #ff00ff, 0 0 20px #ff00ff',
      }
    }
  },
  plugins: [],
}

