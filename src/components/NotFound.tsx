import type { FC } from "react";
import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { PageContainer } from "./shared/PageContainer";
import { SlideMeIn } from "./shared/SlideMeIn";
import NavigationCard from "./shared/NavigationCard";
import { SectionContent } from "./shared/SectionContent";
import { HouseIcon, type HouseHandle } from "./ui/HouseIcon";
import {
  BookOpenTextIcon,
  type BookOpenTextIconHandle,
} from "./ui/BookOpenTextIcon";
import { LayoutGridIcon, type LayoutGridHandle } from "./ui/LayoutGridIcon";
import { ContactIcon, type ContactHandle } from "./ui/ContactIcon";

const NotFound: FC = () => {
  const houseRef = useRef<HouseHandle | null>(null);
  const bookRef = useRef<BookOpenTextIconHandle | null>(null);
  const gridRef = useRef<LayoutGridHandle | null>(null);
  const contactRef = useRef<ContactHandle | null>(null);

  return (
    <PageContainer>
      <SlideMeIn marginBottom="mt-8 mb-8">
        <SectionContent padding="bg-blue-300/5 pt-6">
          <div className="flex items-center justify-center">
            {/* <img
              src={"/notFound.svg"}
              alt="not-found"
              className="w-48 opacity-80"
            /> */}

            <DotLottieReact
              src="/notFound.lottie"
              loop
              autoplay
              className="w-[500px]"
            />
          </div>
        </SectionContent>
      </SlideMeIn>
      <SlideMeIn marginBottom="mt-4">
        <SectionContent>
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="text-center mb-8">
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
                  icon={HouseIcon}
                  title="Home"
                  description="Start your journey"
                  iconRef={houseRef}
                />
                <NavigationCard
                  href="/resume"
                  icon={BookOpenTextIcon}
                  iconRef={bookRef}
                  title="Resumé"
                  description="My experience"
                />
                <NavigationCard
                  href="/projects"
                  icon={LayoutGridIcon}
                  iconRef={gridRef}
                  title="Projects"
                  description="See my work"
                />
                <NavigationCard
                  href="/contact"
                  icon={ContactIcon}
                  iconRef={contactRef}
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
