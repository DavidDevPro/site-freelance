import { cn } from "@/lib/utils";
import { pictureUrl } from "@/pictureConfig";
import { formatDate } from "@/utils/utils";
import StarRating from "@/components/StarRating";

interface TestimonialCardProps {
  id: number;
  image_url: string | null;
  name: string;
  role: string;
  rating: number;
  created_at: string;
  source?: string;
  comment: string;
  className?: string;
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
}) => {
  return (
    <div
      className={cn(
        "max-w-sm md:break-inside-avoid overflow-hidden flex flex-col justify-between p-6 rounded-2xl shadow-lg",
        // light styles
        "border border-primary bg-card",
        // dark styles
        "dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-neutral-800",
        className
      )}
    >
      <div className="text-sm font-normal text-gray-700 dark:text-neutral-300 mb-4">
        {comment}
        {!source && (
          <div className="flex ml-auto">
            <StarRating rating={rating} />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <img
          src={image_url ? `${imageBasePath}${image_url}` : DEFAULT_AVATAR_URL}
          className="h-12 w-12 rounded-full ring-2 ring-gray-200 dark:ring-neutral-700"
          alt={`Avatar de ${name}`}
        />

        <div>
          <p className="text-lg font-semibold text-primary dark:text-primary-light">
            {name}
          </p>
          <p className="text-xs font-medium text-gray-500 dark:text-neutral-400">
            {role}
          </p>
          <p className="text-xs text-gray-500 dark:text-neutral-500">
            Créé le {formatDate(created_at)}
            {source && ` • Recommandation via ${source}`}
          </p>
        </div>
      </div>
    </div>
  );
};
