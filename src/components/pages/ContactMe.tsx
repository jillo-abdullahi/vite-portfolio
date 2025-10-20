import { SlideMeIn } from "../shared/slideMeIn";
import { SectionHeading } from "../shared/PageTitle";
import { PageContainer } from "../shared/PageContainer";
import ContactLinks from "../ContactLinks";
import { usePageTitle } from "../../hooks/usePageTitle";
import { SectionContent } from "../shared/SectionContent";

export const ContactMe = () => {
  usePageTitle("Contact | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <section>
        <div className="w-full pb-4">
          <SectionHeading
            linkText="say hi!"
            linkHref="mailto:jayloabdullahi@gmail.com"
            isContactPage={true}
          >
            I'd love to build something
            <br /> great with you,
          </SectionHeading>
        </div>

        <SlideMeIn>
          <SectionContent padding="py-6 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="text-gray-300 text-2xl">Let's connect</p>
              <div className="md:col-span-2">
                <ContactLinks isContactPage />
              </div>
            </div>
          </SectionContent>
        </SlideMeIn>
      </section>
    </PageContainer>
  );
};
