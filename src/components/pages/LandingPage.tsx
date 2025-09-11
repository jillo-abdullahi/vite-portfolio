import type { FC } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ContactLinks from "@/components/ContactLinks";
import WavingHand from "@/components/WavingHand";
import { SlideMeIn } from "../shared/slideMeIn";
import { PageContainer } from "../shared/PageContainer";
import SkillSplitBar from "../SkillSplitBar";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { usePageTitle } from "../../hooks/usePageTitle";

const LandingPage: FC = () => {
  usePageTitle("Portfolio | Jillo Woche");

  return (
    <PageContainer>
      <SlideMeIn>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center rounded-3xl border border-gray-700 bg-gray-900/70 p-6 pt-8 md:p-10 w-full">
          <div className="rounded-full border-8 border-[#E7A11A78] flex-shrink-0 md:mr-8 flex-shrink-0">
            <div className="profile-img">
              <img
                src={"/me.webp"}
                alt="profile"
                className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start border-0 md:border-l md:border-t-0 border-gray-700 pl-0 md:pl-8 pt-4 md:pt-0">
            <div className="flex items-center space-x-1 w-full justify-center md:justify-start pb-4">
              <WavingHand />
              <span className="text-xl sm:text-2xl text-gray-300/80 font-medium">
                Hello, I am
              </span>
            </div>

            <span className="text-3xl md:text-4xl sm:text-5xl text-orange font-bold flex-shrink-0 text-center md:text-left pt-1 w-full">
              Jillo Woche
            </span>
            <span className="font-semibold pt-1 text-xl sm:text-2xl text-gray-300 w-full text-center md:text-left">
              Full Stack Software Engineer
            </span>

            <div className="w-full max-w-3xl pt-6">
              <p className="text-gray-300/80 text-center md:text-left tracking-wide">
                As a Full Stack Software Engineer, I'm on a mission to build
                amazing things - with a <b>dash of innovation</b> and a whole
                lot of
                <b> precision!</b> From <b>pixel-perfect front-ends</b> to{" "}
                <b>rock-solid back-ends</b>. I genuinely enjoy transforming
                intricate problems into <b>streamlined, impactful solutions</b>{" "}
                within the dynamic web2 and web3 realms.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-1 pt-4 w-full">
              <MapPinIcon className="text-orange h-4 w-4" />{" "}
              <span className="text-md text-gray-300 font-semibold">
                Nairobi, Kenya
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-1 w-full pt-2">
              <ContactLinks />
            </div>
          </div>
        </div>
      </SlideMeIn>

      <SlideMeIn>
        <div className="rounded-3xl border border-gray-700 bg-gray-900/70 p-6 md:p-10 w-full mt-6">
          {/* skill split bar  */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="text-center md:text-left md:flex-shrink-0">
              <p className="text-lg font-medium text-gray-300">Skill split</p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <SkillSplitBar
                leftLabel="Frontend"
                rightLabel="Backend"
                leftPercent={70}
                height={40}
              />
            </div>
          </div>

          {/* Main languages  */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-medium text-gray-300">Languages</p>
            </div>

            <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-2">
              <div className="flex items-center space-x-2 border border-gray-700 rounded-full px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800/70 transition cursor-default">
                <RiJavascriptFill className="text-yellow-400 h-4.5 w-4.5" />
                <span className="text-gray-300 font-semibold text-sm">
                  JavaScript/TypeScript
                </span>
              </div>
              <div className="flex items-center space-x-2 border border-gray-700 rounded-full px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800/70 transition cursor-default">
                <SiSolidity className="text-gray-300 h-4.5 w-4.5" />
                <span className="text-gray-300 font-semibold text-sm">
                  Solidity
                </span>
              </div>
              <div className="flex items-center space-x-2 border border-gray-700 rounded-full px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800/70 transition cursor-default">
                <FaPython className="text-blue-400 h-4.5 w-4.5" />
                <span className="text-gray-300 font-semibold text-sm">
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>
      </SlideMeIn>
    </PageContainer>
  );
};

export default LandingPage;
