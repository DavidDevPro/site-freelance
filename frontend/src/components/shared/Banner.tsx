import React from "react";
import { ShieldCheck, Globe, Headset } from "lucide-react"; // Assurez-vous d'utiliser des icônes pertinentes
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  description: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "mt-8 p-6 bg-primary text-white rounded-lg shadow-lg flex items-center",
        className
      )}
    >
      <div className="mr-4 flex-shrink-0">
        <Globe className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-sm mt-2 text-center">{description}</p>
      </div>
      <div className="ml-4 flex-shrink-0">
        <ShieldCheck className="w-8 h-8 text-white" />
        <Headset className="w-8 h-8 text-white mt-2" />
      </div>
    </div>
  );
};
