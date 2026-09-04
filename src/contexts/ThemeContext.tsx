import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(newTheme: Theme) {
  try {
    const html = document.documentElement;

    // Remove any existing theme classes
    html.classList.remove('light', 'dark');

    // Add the new theme class
    html.classList.add(newTheme);

    // Also set data-theme for CSS selectors
    if (newTheme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }

    // Set color-scheme for browser UI
    html.style.colorScheme = newTheme;

    // Save preference
    try {
      localStorage.setItem('theme-preference', newTheme);
    } catch (err) {
      console.warn('Could not save theme preference:', err);
    }
  } catch (err) {
    console.error('Error applying theme:', err);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    try {
      let savedTheme: Theme | null = null;
      try {
        savedTheme = localStorage.getItem('theme-preference') as Theme | null;
      } catch (err) {
        console.warn('Could not read from localStorage:', err);
      }

      let initialTheme: Theme = 'light';

      if (savedTheme === 'dark' || savedTheme === 'light') {
        initialTheme = savedTheme;
      } else {
        // Check system preference as fallback
        if (typeof window !== 'undefined' && window.matchMedia) {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          initialTheme = prefersDark ? 'dark' : 'light';
        }
      }

      // Apply the theme immediately
      applyTheme(initialTheme);
      setThemeState(initialTheme);

      // Mark as ready for transitions
      setTimeout(() => {
        document.documentElement.classList.add('theme-ready');
        setMounted(true);
      }, 0);
    } catch (err) {
      console.error('Error initializing theme:', err);
      setMounted(true);
    }
  }, []);

  // Apply theme whenever it changes (after mount)
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
