import { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Indra Pranata",
  title: "Full-Stack Developer",
  tagline:
    "Membangun aplikasi web modern yang cepat, accessible, dan scalable — dari ideasi hingga produksi.",
  about: [
    "Saya seorang full-stack developer yang bersemangat membangun solusi digital yang tidak hanya fungsional, tetapi juga terasa premium bagi penggunanya. Saya berspesialisasi dalam ekosistem JavaScript/TypeScript modern (Next.js, React) dan PHP (Laravel).",
    "Dengan perhatian tinggi pada detail UI/UX, performa, dan maintainability kode, saya menghadirkan pengalaman end-to-end yang solid — dari arsitektur database hingga animasi micro-interaction yang halus di frontend.",
  ],
  location: "Makassar, Indonesia",
  email: "indra7dev@gmail.com",
  // avatarUrl: "/images/profile/avatar.jpg",
  // resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/indra7dev",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/indra7dev",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/indra7dev",
    icon: "Twitter",
  },
];
