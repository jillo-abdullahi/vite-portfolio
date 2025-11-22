import type { FC } from "react";
import { testimonials } from "@/data";
import TestimonialCard from "./shared/TestimonialCard";
import { SlideMeIn } from "./shared/SlideMeIn";

const Testimonials: FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <SlideMeIn
            useBorderedContent={false}
            delay={0.2 * index}
            key={`${testimonial.name}-${index}`}
          >
            <div className="h-full">
              <TestimonialCard {...testimonial} />
            </div>
          </SlideMeIn>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
