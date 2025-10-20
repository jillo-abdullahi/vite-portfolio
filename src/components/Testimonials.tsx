import type { FC } from "react";
import { testimonials } from "@/data";
import TestimonialCard from "./shared/TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            {...testimonial}
            key={`${testimonial.name}-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
