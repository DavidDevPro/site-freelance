import Marquee from "@/components/magicui/marquee";
import { Testimonial } from "@/services/testimonialsApi";
import { Avatar } from "./Avatar";
import AddTestimonialDialog from "./AddTestimonialDialog";
import { TestimonialCard } from "./TestimonialCard";

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
        <h2 className="text-3xl md:text-4xl font-bold">
          Recommandations
          <span className="bg-gradient-primary text-primary bg-clip-text">
            {" "}
            Professionnelles{" "}
          </span>
          & Avis
          <span className="bg-gradient-primary text-transparent bg-clip-text">
            {" "}
            Clients
          </span>
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

        <div className="flex justify-center pt-8 relative z-10 gap-4">
          <AddTestimonialDialog onTestimonialAdded={onTestimonialAdded} />
          <Avatar testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
