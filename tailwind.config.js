/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Giữ lại darkMode nếu bạn muốn hỗ trợ cả light/dark mode sau này
  theme: {
    extend: {
      // Bổ sung đầy đủ bảng màu cho dự án
      colors: {
        'dark-bg': '#111217',
        'dark-surface': '#1E1F2B',
        'accent': '#8B5CF6',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        'border-color': '#374151',
      },
      // Bổ sung font chữ Inter
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // Bổ sung hiệu ứng animation fade-in
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};