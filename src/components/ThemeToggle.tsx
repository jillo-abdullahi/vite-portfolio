import { type FC, useRef } from "react";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import {
  useTheme,
  THEME_COLORS,
  THEME_FONTS,
  type ThemeColor,
  type ThemeFont,
} from "@/contexts/ThemeContext";
import { LuPaintbrush } from "react-icons/lu";
import { XIcon, type XIconHandle } from "./ui/XIcon";

export const ThemeToggle: FC = () => {
  const { currentTheme, setTheme, currentFont, setFont } = useTheme();
  const xIconRef = useRef<XIconHandle | null>(null);

  // Reorder colors for better visual contrast between adjacent segments
  const colorOrder: ThemeColor[] = [
    "orange",
    "blue",
    "slate",
    "green",
    "pesto",
    "purple",
  ];
  const colors = colorOrder.map((key) => THEME_COLORS[key]);
  const segmentAngle = 360 / colors.length;

  return (
    <Menu as="div" className="relative">
      {({ close }) => (
        <>
          <MenuButton
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 group cursor-pointer border-2 border-gray-700/50 hover:border-[var(--color-primary)]/70 focus:border-[var(--color-primary)]/30 focus:outline-none"
            aria-label="Change theme color"
            title="Change theme color"
          >
            {/* Segmented color border */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              {colors.map((color, index) => {
                const startAngle = index * segmentAngle;
                const endAngle = (index + 1) * segmentAngle;
                const isActive = THEME_COLORS[currentTheme] === color;

                // Calculate SVG path for arc segment
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;
                const radius = 45;
                const x1 = 50 + radius * Math.cos(startRad);
                const y1 = 50 + radius * Math.sin(startRad);
                const x2 = 50 + radius * Math.cos(endRad);
                const y2 = 50 + radius * Math.sin(endRad);

                return (
                  <path
                    key={index}
                    d={`M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                    fill={color.primary}
                    opacity={isActive ? 1 : 0.4}
                    className="transition-opacity duration-200"
                  />
                );
              })}
            </svg>

            <div className="relative z-10 w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200">
              <LuPaintbrush className="w-3 h-3 text-gray-300" />
            </div>
          </MenuButton>

          <Transition
            enter="duration-300 ease-out"
            enterFrom="h-0 opacity-0 -translate-y-2"
            enterTo="h-32 opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="h-32 opacity-100 translate-y-0"
            leaveTo="h-0 opacity-0 -translate-y-2"
          >
            <MenuItems className="absolute -right-4.5 top-14 mt-2 w-[90vw] sm:max-w-[360px] bg-gray-900 border-2 border-[var(--color-primary)]/30 rounded-3xl overflow-hidden z-50 h-fit overflow-y-auto focus:outline-none">
              <div className="p-4">
                {/* Close Button */}
                <div className="flex justify-end -mt-1 -mr-1">
                  <button
                    onClick={close}
                    className="cursor-pointer p-1.5 rounded-xl text-gray-400 hover:text-gray-200 hover:bg-[var(--color-primary)]/10 transition-all duration-200 w-10 h-10 flex items-center justify-center"
                    aria-label="Close theme menu"
                    onMouseEnter={() => xIconRef.current?.startAnimation()}
                    onMouseLeave={() => xIconRef.current?.stopAnimation()}
                  >
                    <XIcon ref={xIconRef} />
                  </button>
                </div>

                {/* Colors Section */}
                <div>
                  <p className="text-sm text-gray-400 pb-2 font-semibold">
                    theme color
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(THEME_COLORS) as ThemeColor[]).map(
                      (colorKey) => {
                        const color = THEME_COLORS[colorKey];
                        const isActive = currentTheme === colorKey;

                        return (
                          <button
                            key={colorKey}
                            onClick={() => {
                              setTheme(colorKey);
                            }}
                            className={`cursor-pointer px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                              isActive
                                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-gray-200"
                                : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                            }`}
                          >
                            <div
                              className={`rounded-full w-4 h-4 flex items-center justify-center border-1`}
                              style={{
                                borderColor: color.primary,
                              }}
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: color.primary }}
                              />
                            </div>
                            <span>{color.name}</span>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Fonts Section */}
                <div className="pt-4">
                  <p className="text-sm text-gray-400 py-2 font-semibold">
                    font style
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(THEME_FONTS) as ThemeFont[]).map(
                      (fontKey) => {
                        const font = THEME_FONTS[fontKey];
                        const isActive = currentFont === fontKey;

                        return (
                          <button
                            key={fontKey}
                            onClick={() => {
                              setFont(fontKey);
                            }}
                            className={`cursor-pointer px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                              isActive
                                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-gray-200"
                                : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                            }`}
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};
