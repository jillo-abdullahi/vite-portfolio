import { createContext, useContext, useState, useEffect, type FC, type ReactNode } from "react";

export const THEME_COLORS = {
  orange: {
    name: "Orange",
    primary: "#e7a11a",
    primaryHover: "#d19115",
    primaryLight: "rgba(231, 161, 26, 0.1)",
    primaryBorder: "rgba(231, 161, 26, 0.4)",
  },
  blue: {
    name: "Blue",
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryLight: "rgba(59, 130, 246, 0.1)",
    primaryBorder: "rgba(59, 130, 246, 0.4)",
  },
  purple: {
    name: "Purple",
    primary: "#a855f7",
    primaryHover: "#9333ea",
    primaryLight: "rgba(168, 85, 247, 0.1)",
    primaryBorder: "rgba(168, 85, 247, 0.4)",
  },
  green: {
    name: "Green",
    primary: "#10b981",
    primaryHover: "#059669",
    primaryLight: "rgba(16, 185, 129, 0.1)",
    primaryBorder: "rgba(16, 185, 129, 0.4)",
  },
  pink: {
    name: "Pink",
    primary: "#ec4899",
    primaryHover: "#db2777",
    primaryLight: "rgba(236, 72, 153, 0.1)",
    primaryBorder: "rgba(236, 72, 153, 0.4)",
  },
  red: {
    name: "Red",
    primary: "#ef4444",
    primaryHover: "#dc2626",
    primaryLight: "rgba(239, 68, 68, 0.1)",
    primaryBorder: "rgba(239, 68, 68, 0.4)",
  },
} as const;

export type ThemeColor = keyof typeof THEME_COLORS;

interface ThemeContextType {
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  themeColors: typeof THEME_COLORS[ThemeColor];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem("theme-color");
    return (saved as ThemeColor) || "orange";
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = THEME_COLORS[currentTheme];

    // Set CSS variables
    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-hover", colors.primaryHover);
    root.style.setProperty("--color-primary-light", colors.primaryLight);
    root.style.setProperty("--color-primary-border", colors.primaryBorder);

    // Save to localStorage
    localStorage.setItem("theme-color", currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themeColors: THEME_COLORS[currentTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
