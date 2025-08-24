import type { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PageContainer } from "./shared/PageContainer";
import { SlideMeIn } from "./shared/slideMeIn";

const NotFound: FC = () => {
  return (
    <PageContainer>
      <SlideMeIn>
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="mb-2">
            <img
              src={"/notFound.svg"}
              alt="not-found"
              className="w-64"
            />
          </div>
          <div className="text-white/90 text-xl sm:text-2xl font-semibold">
            <span>Page not be found.</span>
          </div>
          <div className="text-white/90 text-base text-center mb-4">
            <span>
              The page you are looking for doesn't exist or has been moved.
            </span>
          </div>
          <div className="flex-shrink-0">
            <a
              type="button"
              className="relative inline-flex uppercase items-center gap-x-1.5 rounded-lg bg-orange px-4 py-3 text-base font-semibold text-gray-800 shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
              href="/"
            >
              <HomeIcon
                className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                aria-hidden="true"
              />
              <span>Go back home</span>
            </a>
          </div>
        </div>
      </SlideMeIn>
    </PageContainer>
  );
};

export default NotFound;
