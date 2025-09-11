import type { FC } from "react";
import { testimonials } from "@/data";
import TestimonialCard from "./shared/TestimonialCard";
import { SlideMeIn } from "./shared/slideMeIn";

const Testimonials: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-6">
        {testimonials.map((testimonial, index) => (
          <SlideMeIn key={`${testimonial.name}-${index}`} cascade>
            <TestimonialCard {...testimonial} />
          </SlideMeIn>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
