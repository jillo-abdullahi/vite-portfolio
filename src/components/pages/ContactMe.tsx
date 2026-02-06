import { SlideMeIn } from "../shared/SlideMeIn";
import { SectionHeading } from "../shared/SectionHeading";
import { PageContainer } from "../shared/PageContainer";
import ContactLinks from "../ContactLinks";
import { usePageTitle } from "../../hooks/usePageTitle";
import { SectionContent } from "../shared/SectionContent";
import { MemeText } from "../shared/MemeText";
import { externalLinks } from "@/data";

export const ContactMe = () => {
  usePageTitle("Contact | Jillo Woche");

  return (
    <PageContainer showBreadcrumbs>
      <SectionHeading
        linkText="say hi!"
        linkHref={`mailto:${externalLinks.email}`}
        isContactPage={true}
      >
        I'd love to build something
        <br /> great with you,
      </SectionHeading>

      <SectionContent className="py-6 md:py-10 bg-[var(--color-primary)]/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SlideMeIn delay={0.2} useFade>
            <p className="text-gray-600 dark:text-gray-300 text-2xl font-medium dark:font-normal">
              Let's connect
            </p>
          </SlideMeIn>
          <div className="md:col-span-2">
            <ContactLinks isContactPage />
          </div>
        </div>
      </SectionContent>
      <MemeText
        text={
          "I will stop the war in a minute. First I must pick 47 flowers and pet this fox."
        }
      />
    </PageContainer>
  );
};
