import { cn } from "@/lib/utils";
import { Star, StarHalf, Star as StarFull } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  rating: number;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  img,
  name,
  role,
  description,
  rating,
  className,
  ...props
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Étoile pleine
        stars.push(
          <StarFull key={i} className="text-yellow-500" fill="currentColor" />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Demi-étoile
        stars.push(
          <StarHalf key={i} className="text-yellow-500" fill="currentColor" />
        );
      } else {
        // Étoile vide
        stars.push(
          <Star
            key={i}
            className="text-gray-300"
            fill="none"
            stroke="currentColor"
          />
        );
      }
    }
    return stars;
  };
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        " border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
      {...props} // Spread the rest of the props here
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">{renderStars()}</div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <img
          src={img}
          className="h-10 w-10 rounded-full  ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
