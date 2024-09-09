import { FaRegStar,FaStarHalfAlt,FaStar as StarFull } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  sizeClass?: string; // Ajout d'une propriété pour la classe de taille
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, sizeClass = "w-5 h-5" }) => {
  const handleClick = (event: React.MouseEvent<SVGElement>, value: number) => {
    if (!onRatingChange) return;

    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickPosition = event.clientX - left;
    const isHalf = clickPosition < width / 2; // Vérifie si le clic est sur la moitié gauche

    onRatingChange(isHalf ? value - 0.5 : value); // Si c'est sur la gauche, demi-étoile; sinon, étoile entière
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <StarFull
            key={i}
            className={`text-yellow-500 ${sizeClass} shrink-0 cursor-pointer`}
            fill="currentColor"
            onClick={(e) => handleClick(e, i)}
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            className={`text-yellow-500 ${sizeClass} shrink-0 cursor-pointer`}
            fill="currentColor"
            onClick={(e) => handleClick(e, i)}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className={`text-gray-300 ${sizeClass} shrink-0 cursor-pointer`}
            onClick={(e) => handleClick(e, i)}
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};
