# Theme System

## Overview
The site now has a dynamic theme color system that allows users to select their preferred accent color. The default theme is **Orange**, with 5 additional color options available.

## Available Colors
- 🟠 **Orange** (default)
- 🔵 **Blue**
- 🟣 **Purple**
- 🟢 **Green**
- 🌸 **Pink**
- 🔴 **Red**

## How It Works

### 1. Theme Context
The theme is managed via React Context (`ThemeContext.tsx`) which:
- Stores the current theme in localStorage
- Provides CSS variables for dynamic styling
- Allows components to access and change the theme

### 2. CSS Variables
Four CSS variables are set on the `:root` element:
```css
--color-primary         /* Main accent color */
--color-primary-hover   /* Hover state */
--color-primary-light   /* Light background tint */
--color-primary-border  /* Border color with opacity */
```

### 3. Usage in Components

#### Option 1: Using Tailwind with CSS Variables
```tsx
<div className="text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-[var(--color-primary)]/40">
  Themed content
</div>
```

#### Option 2: Using inline styles
```tsx
import { useTheme } from "@/contexts/ThemeContext";

const MyComponent = () => {
  const { themeColors } = useTheme();
  
  return (
    <div style={{ color: themeColors.primary }}>
      Themed content
    </div>
  );
};
```

#### Option 3: Using the utility function
```tsx
import { withTheme } from "@/lib/themeUtils";

<div className={withTheme("text-orange bg-orange/10 border-orange/40")}>
  This will use theme colors
</div>
```

## Theme Toggle Component
Located in the navbar (desktop and mobile), the `ThemeToggle` component:
- Shows current theme color
- Opens a dropdown with all available colors
- Persists selection to localStorage
- Updates all themed elements instantly

## Converting Existing Components
To make an existing component themeable:

1. Replace hardcoded orange colors with CSS variables:
   - `text-orange` → `text-[var(--color-primary)]`
   - `bg-orange/10` → `bg-[var(--color-primary)]/10`
   - `border-orange/40` → `border-[var(--color-primary)]/40`

2. For inline styles, use the theme context:
```tsx
const { themeColors } = useTheme();
<div style={{ backgroundColor: themeColors.primary }} />
```

## Adding New Colors
Edit `THEME_COLORS` in `/src/contexts/ThemeContext.tsx`:

```tsx
yourColor: {
  name: "Your Color",
  primary: "#hexcode",
  primaryHover: "#hexcode",
  primaryLight: "rgba(r, g, b, 0.1)",
  primaryBorder: "rgba(r, g, b, 0.4)",
}
```

## Files Modified
- `/src/contexts/ThemeContext.tsx` - Theme provider and hook
- `/src/components/ThemeToggle.tsx` - Theme selector UI
- `/src/components/NavBar.tsx` - Added theme toggle
- `/src/main.tsx` - Wrapped app with ThemeProvider
- `/src/index.css` - Added CSS variable definitions
- `/src/lib/themeUtils.ts` - Utility functions

## Testing
1. Click the theme toggle in the navbar
2. Select a different color
3. Verify all themed elements update
4. Refresh the page - theme should persist
5. Test on mobile menu as well
