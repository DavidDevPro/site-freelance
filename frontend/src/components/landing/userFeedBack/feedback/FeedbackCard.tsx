import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pictureUrl } from '@/config/pictureConfig';
import { formatDate } from "@/lib/utils";
import { StarRating } from "@/components/shared";

interface FeedbackCardProps {
  id: number;
  image_url: string | null;
  name: string;
  role: string;
  comment: string;
  rating: number;
  created_at: string;
  source?: string; // Ajout de la propriété source
}

const imageBasePath = `${pictureUrl}storage/testimonial_images/`;
const DEFAULT_AVATAR_URL = `${pictureUrl}storage/profile_images/defaut.jpg`;

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ image_url, name, role, comment, rating, created_at, source }) => {
  return (
    <Card className="max-w-md md:break-inside-avoid overflow-hidden flex flex-col border border-primary p-4">
      <div>
        <CardHeader className="flex flex-col lg:flex-row items-center gap-4 pb-2 p-4">
          <Avatar>
            <AvatarImage 
              alt={name} 
              src={image_url ? `${imageBasePath}${image_url}` : DEFAULT_AVATAR_URL} 
              onError={(e) => (e.currentTarget.src = DEFAULT_AVATAR_URL)}
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="p-2 text-lg font-semibold text-primary dark:text-primary-light">{name}</CardTitle>
            <CardDescription className="text-xs font-medium text-gray-500 dark:text-neutral-400">{role}</CardDescription>
            <p className="text-xs text-gray-500 dark:text-neutral-500">Créé le {formatDate(created_at)}{source && ` • Recommandation via ${source}`}</p>
          </div>
          {!source ? (
            <div className="flex">
              <StarRating rating={rating} onRatingChange={() => {}} sizeClass="w-6 h-6" />
            </div>
          ) : (
            <div>
            </div>
          )}
        </CardHeader>
        <CardContent className="text-sm font-normal text-gray-700 dark:text-neutral-300 mb-4">
          {comment}
        </CardContent>
      </div>
    </Card>
  );
};

