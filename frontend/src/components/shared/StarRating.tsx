import React from 'react';
import { Star, StarHalf, Star as StarFull } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Étoile pleine
        stars.push(
          <StarFull
            key={i}
            className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="currentColor"
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Demi-étoile
        stars.push(
          <StarHalf
            key={i}
            className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="currentColor"
          />
        );
      } else {
        // Étoile vide
        stars.push(
          <Star
            key={i}
            className="text-gray-300 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};
