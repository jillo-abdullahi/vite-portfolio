import type { FC } from "react";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
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
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/notFound.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <PageContainer>
      <SlideMeIn marginBottom="mt-8 mb-8">
        <SectionContent padding="bg-[var(--color-primary)]/3 pt-6">
          <SlideMeIn useBorderedContent={false} delay={0.2}>
            <div className="flex items-center justify-center">
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop
                  className="w-[500px]"
                />
              )}
            </div>
          </SlideMeIn>
        </SectionContent>
      </SlideMeIn>
      <SlideMeIn marginBottom="mt-4">
        <SectionContent padding="bg-[var(--color-primary)]/3 pt-6">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <SlideMeIn useBorderedContent={false} delay={0.1}>
              <div className="text-center mb-8">
                <p className="text-gray-300 text-lg mb-2">
                  The page you're looking for seems to have wandered off into
                  the digital void.
                </p>
                <p className="text-gray-400 text-base">
                  Don't worry though - let's get you back on track!
                </p>
              </div>
            </SlideMeIn>

            {/* Navigation Suggestions */}
            <div className="w-full mb-8">
              <SlideMeIn useBorderedContent={false} delay={0.1}>
                <h2 className="text-white text-xl font-semibold mb-4 text-center">
                  Where would you like to go?
                </h2>
              </SlideMeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <SlideMeIn useBorderedContent={false} delay={0.1}>
                  <NavigationCard
                    href="/"
                    icon={HouseIcon}
                    title="Home"
                    description="Start your journey"
                    iconRef={houseRef}
                  />
                </SlideMeIn>

                <SlideMeIn useBorderedContent={false} delay={0.2}>
                  <NavigationCard
                    href="/resume"
                    icon={BookOpenTextIcon}
                    iconRef={bookRef}
                    title="Resumé"
                    description="My experience"
                  />
                </SlideMeIn>
                <SlideMeIn useBorderedContent={false} delay={0.3}>
                  <NavigationCard
                    href="/projects"
                    icon={LayoutGridIcon}
                    iconRef={gridRef}
                    title="Projects"
                    description="See my work"
                  />
                </SlideMeIn>
                <SlideMeIn useBorderedContent={false} delay={0.4}>
                  <NavigationCard
                    href="/contact"
                    icon={ContactIcon}
                    iconRef={contactRef}
                    title="Contact"
                    description="Let's connect"
                  />
                </SlideMeIn>
              </div>
            </div>
          </div>
        </SectionContent>
      </SlideMeIn>
    </PageContainer>
  );
};

export default NotFound;
