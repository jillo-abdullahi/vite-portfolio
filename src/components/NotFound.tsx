import type { FC, CSSProperties } from "react";
import { Fade } from "react-awesome-reveal";
import { HomeIcon } from "@heroicons/react/24/outline";

const NotFound: FC = () => {
  const fadeStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="not-found-main px-8">
      <Fade style={fadeStyle}>
        <div className="mb-2">
          <img
            src={"/src/assets/notFound.svg"}
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
            className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-4 py-3 text-base font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
            href="/"
          >
            <HomeIcon
              className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
              aria-hidden="true"
            />
            <span>Go back home</span>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default NotFound;
