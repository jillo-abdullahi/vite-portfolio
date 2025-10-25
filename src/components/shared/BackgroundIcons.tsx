import { SectionContent } from "./SectionContent";

interface BackgroundIconsProps {
  icons: React.ComponentType<{ className?: string }>[];
  className?: string;
}

const BackgroundIcons: React.FC<BackgroundIconsProps> = ({
  icons,
  className,
}) => {
  return (
    <SectionContent padding="py-0 pb-1">
      <div
        className={`flex items-center gap-2 pointer-events-none px-2 ${className}`}
      >
        {icons.map((Icon, idx) => (
          <Icon
            key={idx}
            className="text-gray-700 w-4"
          />
        ))}
      </div>
    </SectionContent>
  );
};

export default BackgroundIcons;
