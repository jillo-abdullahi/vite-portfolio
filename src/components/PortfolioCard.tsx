import { TbLeaf2 } from "react-icons/tb";
import { type PortfolioProject } from "@/types";

export const PortfolioCard = ({
  title,
  description,
  image,
  preview,
  github,
  stacks,
  completed,
}: PortfolioProject) => {
  return (
    <div className="rounded-xl border-none bg-gray-800 flex flex-col shadowy">
      {/* Top: thumbnail with reserved aspect ratio (prevents layout shift) */}
      <a href={preview} className="block relative rounded-t-xl overflow-hidden">
        <div className="aspect-[16/9] w-full bg-gray-200">
          {image ? (
            <img
              src={`/src/assets/portfolio/${image}`}
              alt={title}
              loading="lazy"
              decoding="async"
              width="1280"
              height="720"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </div>

        {/* published status for admins  */}
        {!completed ? (
          <div className="absolute top-2 right-2 flex items-end gap-1 ">
            <span
              className={`px-2 py-1 text-xs rounded-lg bg-yellow-100 text-yellow-800 border border-yellow-800/40  `}
            >
              In Progress
            </span>
          </div>
        ) : null}

        <div className="absolute bottom-2 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-xl p-3 h-[110px] border border-gray-800/40">
          <h3 className="text-white text-lg font-semibold drop-shadow">
            {title}
          </h3>
          <p className="text-white/90 text-xs mt-1 line-clamp-2 drop-shadow">
            {description}
          </p>
        </div>
      </a>

      {/* branch tags  */}
      {stacks && stacks.length > 0 ? (
        <div className="flex flex-wrap gap-1 mb-3 px-3">
          {stacks.slice(0, 5).map((stack) => (
            <span
              key={stack}
              className="px-2 py-1 text-xs bg-green-800/30 text-green-200 rounded-md"
            >
              {stack}
            </span>
          ))}
          {stacks.length > 5 && (
            <div className="flex items-center justify-center">
              <span className="px-2 text-xs text-gray-100 rounded">
                +{stacks.length - 5}
              </span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
