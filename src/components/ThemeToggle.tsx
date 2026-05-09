'use client';

import { useTheme } from './ClientLayout';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#14532d] dark:bg-[#22c55e] text-white dark:text-[#14532d] shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
}