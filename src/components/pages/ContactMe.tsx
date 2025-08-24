import { SlideMeIn } from "../shared/slideMeIn";
import { SectionHeading } from "../shared/PageTitle";
import { PageContainer } from "../shared/PageContainer";
import ContactLinks from "../ContactLinks";

export const ContactMe = () => {
  return (
    <PageContainer>
      <section id="contact" className="contact pb-8">
        <div className="w-full flex flex-col space-y-4 pb-4">
          <SectionHeading
            linkText="say hi!"
            linkHref="mailto:jayloabdullahi@gmail.com"
            isContactPage={true}
          >
            I'd love to build something
            <br /> great with you,
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
