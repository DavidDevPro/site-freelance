import React, { useEffect, useState } from "react";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { fetchTestimonials, Testimonial } from "@/services/testimonialsApi";
import { pictureUrl } from "@/pictureConfig";

export const Avatar: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [numPeople, setNumPeople] = useState(0);

  useEffect(() => {
    const loadAvatars = async () => {
      try {
        const testimonials: Testimonial[] = await fetchTestimonials();
        const urls = testimonials.map((testimonial) =>
          testimonial.image_url
            ? `${pictureUrl}storage/testimonial_images/${testimonial.image_url}`
            : ""
        );
        setAvatarUrls(urls);
        setNumPeople(testimonials.length);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    loadAvatars();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <AvatarCircles numPeople={numPeople} avatarUrls={avatarUrls} />;
};
