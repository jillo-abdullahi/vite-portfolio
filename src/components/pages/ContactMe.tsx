import { SlideMeIn } from "../shared/slideMeIn";
import { PageContainer } from "../shared/PageContainer";
import ContactLinks from "../ContactLinks";

export const ContactMe = () => {
  return (
    <PageContainer>
      <section id="contact" className="contact pb-8">
        <div className="pt-20">
          <div className="w-full flex flex-col space-y-4 pb-4">
            <SlideMeIn>
              <div className="description w-full max-w-7xl">
                <p className="text-6xl text-gray-300 text-center md:text-left space-x-2">
                  <span>
                    I'd love to build something
                    <br /> great with you,
                  </span>
                  <a
                    href="mailto:jayloabdullahi@gmail.com"
                    className="text-orange/80 underline hover:text-orange transition-all duration-150"

                  >
                    say hi!
                  </a>
                </p>
              </div>
            </SlideMeIn>
          </div>
        </div>

        <SlideMeIn>
          <hr className="border-t border-gray-700 my-6" />
        </SlideMeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <SlideMeIn>
            <p className="text-gray-300 text-2xl">Let's connect</p>
          </SlideMeIn>
          <div className="md:col-span-2">
            <ContactLinks isInFooter={true} />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
