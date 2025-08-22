import { externalLinks } from "@/data";
import {
  FaceSmileIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import ContactMeForm from "../ContactMeForm";
import { SectionHeading } from "../shared/sectionHeading";
import { SlideMeIn } from "../shared/slideMeIn";
import type { CSSProperties } from "react";

export const ContactMe = () => {
  const dividerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section id="contact" className="contact pb-8 withBubblesBackground">
      <div className="pt-20">
        <div className="mb-2">
          <SectionHeading heading={"Contact"} subHeading={"me"} id="contact" />
        </div>
        <div className="w-full flex flex-col space-y-4 items-center justify-center pb-4">
          <SlideMeIn>
            <div className="description w-full max-w-4xl">
              <p className="text-base text-gray-200 text-center flex items-center justify-center space-x-2">
                <span>I would love to hear from you!</span>
                <FaceSmileIcon className="text-orange w-5 h-5 inline" />
              </p>
            </div>
          </SlideMeIn>
          {/* button to send email and schedule call */}
          <SlideMeIn>
            <div className="flex items-center justify-start space-x-3">
              <a
                type="button"
                className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                href="mailto:jayloabdullahi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnvelopeIcon
                  className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                  aria-hidden="true"
                />
                <span>email me</span>
              </a>
              <a
                type="button"
                className="relative inline-flex uppercase items-center gap-x-1.5 rounded-md bg-orange px-3 py-3 text-sm font-semibold text-blue shadow-sm hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/80 cursor-pointer group transition"
                href={externalLinks.calLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDaysIcon
                  className="-ml-0.5 h-5 w-5 group-hover:translate-x-0.5 transition origin-center duration-200"
                  aria-hidden="true"
                />
                <span>schedule call</span>
              </a>
            </div>
          </SlideMeIn>
        </div>
      </div>

      <div className="content flex flex-col">
        {/* divider  */}
        <SlideMeIn style={dividerStyle}>
          <div className="relative flex py-5 items-center w-full max-w-2xl self-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 uppercase">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </SlideMeIn>
        <SlideMeIn>
          <ContactMeForm />
        </SlideMeIn>
      </div>
    </section>
  );
};
