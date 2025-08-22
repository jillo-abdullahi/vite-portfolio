import type { FC } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ContactLinks from "@/components/ContactLinks";
import WavingHand from "@/components/WavingHand";

const LandingPage: FC = () => {
  return (
    <main>
      <header id="home">
        <div className="flex flex-col items-center justify-center relative w-full max-w-7xl mt-24 md:mt-48 px-4 md:px-0">
          <div className="w-full p-2 rounded-[2rem] border border-gray-800 w-full md:w-[82vw] shadowy bg-[#2A2F3C]">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center header-title justify-center rounded-[1.5rem] bg-[#272F37] p-4 pt-8 md:p-10 w-full">
              <div className="rounded-full bg-yellow border-8 border-[#E7A11A78] flex-shrink-0 md:mr-8">
                <div className="profile-img">
                  <img
                    src={"/src/assets/me.webp"}
                    alt="profile"
                    className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start content justify-start border-0 md:border-l md:border-t-0 border-gray-900 pl-0 md:pl-8 pt-4 md:pt-0">
                <div className="flex items-center space-x-1 w-full justify-center md:justify-start">
                  <WavingHand />
                  <span className="text-xl text-gray-300 font-medium flex-shrink-0">
                    Hello, I am
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-center space-x-3 pt-2 w-full">
                  <span className="text-4xl text-orange font-bold flex-shrink-0">
                    Jillo Woche
                  </span>
                  <div className="hidden md:flex items-center justify-center md:justify-start space-x-1 w-fit-content md:w-full">
                    <ContactLinks />
                  </div>
                </div>
                <span className="font-semibold pt-1 text-xl text-gray-300 w-full text-center md:text-left">
                  Full Stack Software Engineer
                </span>

                <div className="flex items-center justify-center md:justify-start space-x-1 pt-4 w-full">
                  <MapPinIcon className="text-orange h-4 w-4" />{" "}
                  <span className="text-sm text-gray-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center justify-center space-x-1 w-full pt-2 md:hidden">
                  <ContactLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* projects section  */}

      {/* contact section  */}
    </main>
  );
};

export default LandingPage;
