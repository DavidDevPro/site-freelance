import Marquee from "@/components/magicui/marquee";
import { TestimonialCard } from "./TestimonialCard";
import AddTestimonialDialog from "./AddTestimonialDialog";
import { Testimonial } from "@/services/testimonialsApi"; // Assurez-vous que ce chemin est correct
import { Avatar } from "./Avatar";

interface TestimonialsProps {
  testimonials: Testimonial[];
  onTestimonialAdded: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  onTestimonialAdded,
}) => {
  // if (testimonials.length === 0) {
  //   return <p>No testimonials available.</p>;
  // }
  return (
    <section className="relative container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Recommandations
        <span className="bg-gradient-primary"> Professionnelles </span>& Avis
        <span className="bg-gradient-primary"> Clients </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8 text-center">
        Découvrez les recommandations de professionnels avec qui nous avons
        travaillés et les avis de nos clients.
      </p>
      <div className="relative">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
        <div className="flex justify-center pt-8 relative z-10 space-x-4">
          <AddTestimonialDialog onTestimonialAdded={onTestimonialAdded} />
          <Avatar />
        </div>
      </div>
    </section>
  );
};
