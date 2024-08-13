import React, { useState, useEffect } from "react";
import { fetchTestimonials, Testimonial } from "@/services/testimonialsApi";
import { Testimonials } from "@/components/Testimonials";

export const UserFeedback: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadTestimonials = async () => {
    try {
      const data = await fetchTestimonials();
      setTestimonials(data);
    } catch (err) {
      setError("Failed to fetch testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleTestimonialAdded = () => {
    loadTestimonials();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Testimonials
        testimonials={testimonials}
        onTestimonialAdded={handleTestimonialAdded}
      />
    </>
  );
};
