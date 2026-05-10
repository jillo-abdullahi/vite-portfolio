import {
  createContext,
  useContext,
  useState,
  useEffect,
  type FC,
  type ReactNode,
} from "react";

export const THEME_COLORS = {
  coral: {
    name: "Coral",
    primary: "#ff6f3c",
    primaryHover: "#ff5722",
    primaryLight: "rgba(255, 111, 60, 0.1)",
    primaryBorder: "rgba(255, 111, 60, 0.4)",
  },
  orange: {
    name: "Orange",
    primary: "#c2410c",
    primaryHover: "#9a3412",
    primaryLight: "rgba(194, 65, 12, 0.1)",
    primaryBorder: "rgba(194, 65, 12, 0.4)",
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
  emerald: {
    name: "Emerald",
    primary: "#2ecc40",
    primaryHover: "#27ae60",
    primaryLight: "rgba(46, 204, 64, 0.1)",
    primaryBorder: "rgba(46, 204, 64, 0.4)",
  },
  slate: {
    name: "Slate",
    primary: "#64748b",
    primaryHover: "#475569",
    primaryLight: "rgba(100, 116, 139, 0.1)",
    primaryBorder: "rgba(100, 116, 139, 0.4)",
  },
  pesto: {
    name: "Pesto",
    primary: "#A89A04",
    primaryHover: "#8a7e03",
    primaryLight: "rgba(168, 154, 4, 0.1)",
    primaryBorder: "rgba(168, 154, 4, 0.4)",
  },
  teal: {
    name: "Teal",
    primary: "#0d9488",
    primaryHover: "#0f766e",
    primaryLight: "rgba(13, 148, 136, 0.1)",
    primaryBorder: "rgba(13, 148, 136, 0.4)",
  },
} as const;

export type ThemeColor = keyof typeof THEME_COLORS;
export type ThemeMode = "dark" | "light";

interface ThemeContextType {
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  themeColors: (typeof THEME_COLORS)[ThemeColor];
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
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
    // Validate that the saved color still exists in THEME_COLORS
    if (saved && saved in THEME_COLORS) {
      return saved as ThemeColor;
    }
    return "blue";
  });



  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme-mode");
    if (saved === "light" || saved === "dark") {
      // Apply the saved theme immediately during initialization
      const root = document.documentElement;
      if (saved === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      return saved;
    }
    // Default to dark mode
    document.documentElement.classList.add("dark");
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = THEME_COLORS[currentTheme];

    // Set CSS variables for colors
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



  const setThemeMode = (mode: ThemeMode) => {
    // Apply the class immediately before state update to prevent flicker
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to localStorage immediately
    localStorage.setItem("theme-mode", mode);

    // Then update state
    setThemeModeState(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themeColors: THEME_COLORS[currentTheme],
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
