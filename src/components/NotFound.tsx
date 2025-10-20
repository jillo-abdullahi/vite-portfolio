import type { FC } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { PageContainer } from "./shared/PageContainer";
import { SlideMeIn } from "./shared/slideMeIn";
import NavigationCard from "./shared/NavigationCard";
import { SectionContent } from "./shared/SectionContent";

const NotFound: FC = () => {
  return (
    <PageContainer>
      <SlideMeIn marginBottom="mt-4">
        <SectionContent>
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="mb-6">
              <img
                src={"/notFound.svg"}
                alt="not-found"
                className="w-36 opacity-80"
              />
            </div>

            <div className="text-center mb-8">
              <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-gray-300 text-lg mb-2">
                The page you're looking for seems to have wandered off into the
                digital void.
              </p>
              <p className="text-gray-400 text-base">
                Don't worry though - let's get you back on track!
              </p>
            </div>

            {/* Navigation Suggestions */}
            <div className="w-full mb-8">
              <h2 className="text-white text-xl font-semibold mb-4 text-center">
                Where would you like to go?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <NavigationCard
                  href="/"
                  icon={HomeIcon}
                  title="Home"
                  description="Start your journey"
                />
                <NavigationCard
                  href="/resume"
                  icon={UserIcon}
                  title="Resumé"
                  description="My experience"
                />
                <NavigationCard
                  href="/projects"
                  icon={BriefcaseIcon}
                  title="Projects"
                  description="See my work"
                />
                <NavigationCard
                  href="/contact"
                  icon={EnvelopeIcon}
                  title="Contact"
                  description="Let's connect"
                />
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>
    </PageContainer>
  );
};

export default NotFound;
