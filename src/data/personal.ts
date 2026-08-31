import { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "Building modern web experiences with clean code and creative solutions.",
  about: [
    "I am a passionate full-stack developer with experience in building modern web applications. I specialize in creating performant, accessible, and visually appealing digital experiences.",
    "With a strong foundation in both frontend and backend technologies, I deliver end-to-end solutions that solve real problems and delight users.",
  ],
  location: "Indonesia",
  email: "your.email@example.com",
  // avatarUrl: "/images/profile/avatar.jpg",
  // resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "Twitter",
  },
];
