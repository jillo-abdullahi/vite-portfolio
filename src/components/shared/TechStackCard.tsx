import type { PortfolioProject } from "@/types";

const TechStackCard = ({ stacks }: { stacks: PortfolioProject["stacks"] }) => {
  if (!stacks || stacks.length === 0) return null;
  return (
    <div className="flex-1 border-t border-[var(--color-primary)]/10 pt-4 w-full">
      {stacks && stacks.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm uppercase font-bold text-[var(--color-primary)]/90 tracking-wide pb-1">
            Tech Stack
          </p>
          {(() => {
            // Check if stacks are categorized or flat
            const isOrganized =
              stacks.length > 0 &&
              typeof stacks[0] === "object" &&
              "label" in (stacks[0] as unknown as Record<string, unknown>);

            if (isOrganized) {
              return (
                <div className="space-y-4 max-w-3xl">
                  {(stacks as Array<{ label: string; items: string[] }>).map(
                    (section) => (
                      <div
                        key={section.label}
                        className="md:grid md:grid-cols-12 md:gap-2"
                      >
                        <p className="text-sm lowercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 pl-1 col-span-2">
                          {section.label}
                        </p>
                        <div className="flex flex-wrap gap-2 col-span-10">
                          {section.items.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              );
            } else {
              // Render flat list (backward compatibility for non-organized stacks)
              return (
                <div className="flex flex-wrap gap-2">
                  {(stacks as string[]).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              );
            }
          })()}
        </div>
      )}
    </div>
  );
};

export default TechStackCard;
