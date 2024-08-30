import Marquee from "@/components/magicui/marquee";
import { Testimonial } from "@/services/testimonialsApi";
import { TestimonialAvatar, TestimonialCard, TestimonialAddModal } from "./";

interface TestimonialsProps {
  testimonials: Testimonial[];
  onTestimonialAdded: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  onTestimonialAdded,
}) => {
  return (
    <section id="testimonials" className="container py-14 sm:py-24">
      <div className="text-center">
        <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  text-center font-bold mb-4">
          Recommandations & Avis Clients
        </h2>
        <p className="text-lg md:text-xl text-black/70 dark:text-white py-6">
          Découvrez les recommandations de professionnels avec qui nous avons
          travaillés et les avis de nos clients.
        </p>
      </div>

      <div className="relative py-12">
        <Marquee pauseOnHover className="[--duration:20s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-neutral-900"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-neutral-900"></div>

        <div className="flex flex-col items-center justify-center pt-8 relative z-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <TestimonialAddModal onTestimonialAdded={onTestimonialAdded} />
          <TestimonialAvatar testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
