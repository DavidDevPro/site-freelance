// data/socialLinks.ts
import { LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";


// Les liens de réseaux sociaux
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/david-changea",
  github: "https://github.com/david-backup",
  facebook: "https://www.facebook.com/DavidWebProjects/",
  twitter: "https://x.com/DavidWebProject",
  instagram: "https://www.instagram.com/davidwebprojects/",
};

// Les icônes de réseaux sociaux, associées aux liens
export const socialMediaIcons = [
  { href: socialMediaLinks.linkedin, icon: LuLinkedin, label: "Linkedin", title: "Linkedin" },
  { href: socialMediaLinks.github, icon: LuGithub, label: "Github", title: "Github" },
  { href: socialMediaLinks.facebook, icon: LuFacebook, label: "Facebook", title: "Facebook" },
  { href: socialMediaLinks.twitter, icon: LuTwitter, label: "Twitter", title: "Twitter" },
  { href: socialMediaLinks.instagram, icon: LuInstagram, label: "Instagram", title: "Instagram" },
];
