import Marquee from "@/components/magicui/marquee";
import { TestimonialCard } from "./TestimonialCard";

const reviews = [
  {
    name: "Jack",
    role: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    rating: 5.0,
  },
  {
    name: "Jill",
    role: "@jill",
    description: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    rating: 5.0,
  },
  {
    name: "John",
    role: "@john",
    description: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    rating: 5.0,
  },
  {
    name: "Jane",
    role: "@jane",
    description: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    rating: 5.0,
  },
  {
    name: "Jenny",
    role: "@jenny",
    description: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    rating: 4.0,
  },
  {
    name: "James",
    role: "@james",
    description: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    rating: 3.5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function Testimonials() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <TestimonialCard key={review.role} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <TestimonialCard key={review.role} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
