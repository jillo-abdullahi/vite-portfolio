// Utility classes for using theme colors
// These map Tailwind's orange classes to CSS variables

export const themeClasses = {
  // Text colors
  "text-primary": "text-[var(--color-primary)]",
  "text-primary-hover": "text-[var(--color-primary-hover)]",
  
  // Background colors
  "bg-primary": "bg-[var(--color-primary)]",
  "bg-primary-hover": "bg-[var(--color-primary-hover)]",
  "bg-primary-light": "bg-[var(--color-primary-light)]",
  
  // Border colors
  "border-primary": "border-[var(--color-primary)]",
  "border-primary-light": "border-[var(--color-primary-border)]",
  
  // Ring colors
  "ring-primary": "ring-[var(--color-primary)]",
} as const;

// Helper function to replace orange classes with theme classes
export const withTheme = (className: string): string => {
  return className
    .replace(/text-orange(\/\d+)?/g, (match) => {
      if (match.includes("/")) {
        const opacity = match.split("/")[1];
        return `text-[var(--color-primary)]/${opacity}`;
      }
      return "text-[var(--color-primary)]";
    })
    .replace(/bg-orange(\/\d+)?/g, (match) => {
      if (match.includes("/")) {
        const opacity = match.split("/")[1];
        return `bg-[var(--color-primary)]/${opacity}`;
      }
      return "bg-[var(--color-primary)]";
    })
    .replace(/border-orange(\/\d+)?/g, (match) => {
      if (match.includes("/")) {
        const opacity = match.split("/")[1];
        return `border-[var(--color-primary)]/${opacity}`;
      }
      return "border-[var(--color-primary)]";
    })
    .replace(/ring-orange(\/\d+)?/g, (match) => {
      if (match.includes("/")) {
        const opacity = match.split("/")[1];
        return `ring-[var(--color-primary)]/${opacity}`;
      }
      return "ring-[var(--color-primary)]";
    });
};
