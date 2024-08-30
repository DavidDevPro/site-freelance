import { LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

// utils/socialLinks.ts
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/david-changea",
  github: "https://github.com/david-backup",
  facebook: "https://www.facebook.com/DavidWebProjects/",
  twitter: "https://x.com/DavidWebProject",
  instagram: "https://www.instagram.com/davidwebprojects/",
  
};

// Les icônes de réseaux sociaux, associées aux liens
export const socialIcons = [
  { href: socialLinks.linkedin, icon: LuLinkedin, label: "Linkedin", title: "Linkedin" },
  { href: socialLinks.github, icon: LuGithub, label: "Github", title: "Github" },
  { href: socialLinks.facebook, icon: LuFacebook, label: "Facebook", title: "Facebook" },
  { href: socialLinks.twitter, icon: LuTwitter, label: "Twitter", title: "Twitter" },
  { href: socialLinks.instagram, icon: LuInstagram, label: "Instagram", title: "Instagram" },
];