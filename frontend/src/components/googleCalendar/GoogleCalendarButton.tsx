import React, { useEffect, useRef } from "react";

interface GoogleCalendarButtonProps {
  url: string;
  color?: string;
  label?: string;
}

// Déclarez `window.calendar` globalement
declare global {
  interface Window {
    calendar: any;
  }
}

const GoogleCalendarButton: React.FC<GoogleCalendarButtonProps> = ({
  url,
  color = "#039BE5",
  label = "Réserver un rendez-vous",
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vérifiez si le script est déjà chargé
    if (
      !document.querySelector(
        'script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]'
      )
    ) {
      const link = document.createElement("link");
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        if (calendarRef.current && window.calendar) {
          // Vide le contenu existant pour éviter les doublons
          calendarRef.current.innerHTML = "";
          window.calendar.schedulingButton.load({
            url,
            color,
            label,
            target: calendarRef.current,
          });
        }
      };
      document.body.appendChild(script);
    } else {
      if (calendarRef.current && window.calendar) {
        calendarRef.current.innerHTML = "";
        window.calendar.schedulingButton.load({
          url,
          color,
          label,
          target: calendarRef.current,
        });
      }
    }
  }, [url, color, label]);

  return <div ref={calendarRef} id="calendar-scheduling-button" />;
};

export default GoogleCalendarButton;
