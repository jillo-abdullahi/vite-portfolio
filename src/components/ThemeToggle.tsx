import { type FC, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useTheme,
  THEME_COLORS,
  type ThemeColor,
} from "@/contexts/ThemeContext";
import { PencilIcon } from "@heroicons/react/24/outline";
import { FaCheck } from "react-icons/fa6";

export const ThemeToggle: FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Reorder colors for better visual contrast between adjacent segments
  const colorOrder: ThemeColor[] = [
    "orange",
    "blue",
    "pink",
    "green",
    "red",
    "purple",
  ];
  const colors = colorOrder.map((key) => THEME_COLORS[key]);
  const segmentAngle = 360 / colors.length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 group cursor-pointer border-2 border-gray-700/50 hover:border-gray-500"
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

        {/* Center circle with edit icon */}
        <div className="relative z-10 w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200">
          <PencilIcon className="w-3 h-3 text-gray-300" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50"
          >
            <div className="p-2">
              <p className="text-xs text-gray-400 px-3 py-2 font-medium">
                Change theme color
              </p>
              <div className="space-y-1">
                {(Object.keys(THEME_COLORS) as ThemeColor[]).map((colorKey) => {
                  const color = THEME_COLORS[colorKey];
                  const isActive = currentTheme === colorKey;

                  return (
                    <button
                      key={colorKey}
                      onClick={() => {
                        setTheme(colorKey);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-700/60 ${
                        isActive ? "bg-gray-700/40" : ""
                      } transition-colors duration-150 cursor-pointer`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`rounded-full w-6 h-6 flex items-center justify-center border-2`}
                          style={{
                            borderColor: color.primary,
                          }}
                        >
                          <div
                            className={`rounded-full w-4 h-4`}
                            style={{
                              backgroundColor: color.primary,
                            }}
                          />
                        </div>

                        <span className="text-sm text-gray-200 font-medium">
                          {color.name}
                        </span>
                      </div>
                      {isActive && (
                        <FaCheck
                          className="w-4 h-4"
                          style={{ color: color.primary }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
