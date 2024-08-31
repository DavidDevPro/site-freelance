import React, { useState, useEffect } from "react";
import { fetchTestimonials, Testimonial } from "@/services/testimonialsApi";
import { Feedback } from "@/components/landing/feedback";

export const UserFeedback: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const loadTestimonials = async () => {
    try {
      const data = await fetchTestimonials();
      setTestimonials(data);
    } catch {
      setError("Failed to fetch testimonials"); // Définir l'erreur si l'appel API échoue
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleTestimonialAdded = () => {
    loadTestimonials(); // Recharger les témoignages après l'ajout
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Passer l'erreur comme prop au composant Feedback */}
      <Feedback
        testimonials={testimonials}
        onTestimonialAdded={handleTestimonialAdded}
        error={error}
      />
    </>
  );
};
