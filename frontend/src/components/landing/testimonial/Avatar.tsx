import React, { useEffect, useState } from "react";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { Testimonial } from "@/services/testimonialsApi";
import { pictureUrl } from "@/pictureConfig";

interface AvatarProps {
  testimonials: Testimonial[];
}

export const Avatar: React.FC<AvatarProps> = ({ testimonials }) => {
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [numPeople, setNumPeople] = useState(0);

  useEffect(() => {
    const urls = testimonials.map((testimonial) =>
      testimonial.image_url
        ? `${pictureUrl}storage/testimonial_images/${testimonial.image_url}`
        : ""
    );

    setAvatarUrls(urls);
    setNumPeople(testimonials.length);
  }, [testimonials]);

  if (avatarUrls.length === 0) {
    return <div>Loading...</div>;
  }

  return <AvatarCircles numPeople={numPeople} avatarUrls={avatarUrls} />;
};
