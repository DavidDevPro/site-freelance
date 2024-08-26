import { cn } from "@/lib/utils";
import { Star, StarHalf, Star as StarFull } from "lucide-react";

import { pictureUrl } from "@/pictureConfig";

interface TestimonialCardProps {
  id: number;
  image_url: string | null;
  name: string;
  role: string;
  rating: number;
  created_at: string;
  source?: string; // Ajout de la propriété source
  comment: string;
  className?: string;
  [key: string]: any;
}
const imageBasePath = `${pictureUrl}storage/testimonial_images/`;
const DEFAULT_AVATAR_URL = `${pictureUrl}storage/profile_images/defaut.jpg`;
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image_url,
  name,
  role,
  comment,
  rating,
  created_at,
  source,
  className,
  // ...props
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
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      className={cn(
        "max-w-sm md:break-inside-avoid overflow-hidden flex flex-col justify-between p-3 rounded-lg shadow-lg",
        // light styles
        " border border-background bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className="select-none text-sm font-normal text-secondary dark:text-neutral-400">
        {comment}
        <div className="flex flex-row py-1">{renderStars()}</div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <img
          src={image_url ? `${imageBasePath}${image_url}` : DEFAULT_AVATAR_URL}
          className="h-10 w-10 rounded-full  ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-primary">{name}</p>
          <p className="text-xs font-normal text-secondary">{role}</p>
          <p className="text-sm text-secondary">
            Créé le {formatDate(created_at)}
            {source && ` Recommandation via ${source}`}
          </p>
        </div>
      </div>
    </div>
  );
};
