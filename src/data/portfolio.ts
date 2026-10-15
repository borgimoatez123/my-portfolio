import {
  CircuitBoard,
  Cpu,
  GitBranch,
  Network,
  Pill,
  Server,
  Sparkles,
  Terminal,
  TrendingUp,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Moatez Borji",
  monogram: "MB",
  positioning:
    "Embedded Systems & IoT Engineer · AI Enthusiast · Software Engineer",
  location: "Ariana, Tunisia",
  email: "borgi.moatez@esprit.tn",
  phone: "+216 92009378",
  github: "https://github.com/borgimoatez123",
  linkedin: "https://www.linkedin.com/in/moatez-borji-b42927274/",
  summary:
    "Engineering student with hands-on experience building embedded devices, connected systems and the software that binds them together — from firmware and sensor acquisition on ESP32 and STM32, to embedded Linux, backend APIs and AI-powered applications.",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const techStrip = [
  "ESP32",
  "STM32",
  "Raspberry Pi",
  "MQTT",
  "Embedded Linux",
  "Python",
  "Node.js",
] as const;

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  status?: string;
  repoUrl?: string;
  demoUrl?: string;
};

/**
 * Only information that is supported by the existing portfolio is described
 * here. No repository or live-demo URLs are added unless they are real.
 */
export const projects: Project[] = [
  {
    id: "smart-medicine-box",
    title: "Smart Medicine Box",
    tagline: "Connected medication dispensing system",
    description:
      "Intelligent medication dispensing system that pairs a Raspberry Pi hub with ESP32 nodes, sensors and actuators. Devices communicate over MQTT while embedded Linux services and Python orchestration expose REST APIs, and a remote AI service performs face-based verification of the person taking the dose.",
    tags: [
      "Raspberry Pi",
      "ESP32",
      "MQTT",
      "Embedded Linux",
      "Python",
      "FastAPI",
      "Computer Vision",
      "REST",
    ],
    icon: Pill,
  },
  {
    id: "smart-school-iot",
    title: "Smart School IoT Platform",
    tagline: "Connected classroom monitoring",
    description:
      "IoT platform built around ESP32 devices and DHT22 temperature/humidity sensors. Devices publish readings over MQTT to backend services, and the collected data is surfaced through a cross-platform mobile application for schools.",
    tags: ["ESP32", "DHT22", "MQTT", "Node.js", "Flutter", "REST"],
    icon: Wifi,
  },
  {
    id: "stockpilot",
    title: "StockPilot",
    tagline: "AI-assisted inventory forecasting",
    description:
      "Inventory forecasting and reorder-recommendation concept that explores demand prediction and restocking suggestions for retail, developed in the context of AUTOMATE OR DIE 2026. This is a prototype/concept rather than a deployed product.",
    tags: ["Python", "XGBoost", "Forecasting", "Machine Learning"],
    icon: TrendingUp,
    status: "Concept · Prototype",
  },
  {
    id: "embedded-systems-linux",
    title: "Embedded Systems & Linux",
    tagline: "Low-level firmware and custom Linux images",
    description:
      "Low-level work spanning STM32 peripherals driven over UART and GPIO in embedded C/C++, together with building custom embedded Linux images for the BeagleBone Black using the Yocto Project and Buildroot.",
    tags: [
      "STM32",
      "UART",
      "GPIO",
      "Embedded C/C++",
      "Yocto Project",
      "Buildroot",
      "BeagleBone Black",
    ],
    icon: Cpu,
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Internship",
    company: "Bee Coders",
    location: "Tunis",
    period: "07–09/2025",
    technologies: "MERN Stack, Flutter, Google Auth, ESP32, MQTT",
    description:
      "Development of a demo educational platform for schools with a MERN Stack website, a Flutter mobile application, and an IoT system using ESP32 with the MQTT protocol and Google authentication services.",
  },
  {
    role: "End of Studies Internship – Full Stack Developer",
    company: "Sierra Bravo Intelligence",
    location: "Tunis",
    period: "02–06/2024",
    technologies:
      "React Native, React.js, Express.js, Node.js, MongoDB, Google Maps API",
    description:
      "Development of a delivery platform with mobile applications for users and delivery drivers, an admin website, and Google Maps API integration using React Native as cross-platform technology.",
  },
  {
    role: "MERN Stack Developer Internship",
    company: "Bee Coders",
    location: "Ariana",
    period: "07–09/2023",
    technologies: "React.js, Express.js, Node.js, MongoDB, Google Auth",
    description:
      "Development of a demo social network web application focused on job search and freelance opportunities, using Google authentication services.",
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Engineering Degree",
    school: "Private Higher School of Engineering and Technology (ESPRIT)",
    location: "Ariana, Tunisia",
    period: "09/2024 – Present",
  },
  {
    degree: "Licence en Génie Logiciel",
    school:
      "Institut Supérieur des Langues Appliquées et Informatique (ISLAI)",
    location: "Béja, Tunisia",
    period: "12/09/2021 – 24/06/2024",
  },
];

export type FocusGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
  blurb: string;
};

export const focusGroups: FocusGroup[] = [
  {
    title: "Embedded Systems",
    icon: CircuitBoard,
    blurb: "Firmware and hardware bring-up on microcontroller platforms.",
    items: ["ESP32", "STM32", "Raspberry Pi", "Embedded C/C++"],
  },
  {
    title: "IoT & Communication",
    icon: Network,
    blurb: "How devices talk to each other and to the cloud.",
    items: ["MQTT", "HTTP / REST", "Sensors", "Actuators"],
  },
  {
    title: "Embedded Linux",
    icon: Terminal,
    blurb: "Building and running Linux on custom hardware.",
    items: ["Linux", "Yocto Project", "Buildroot"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    blurb: "Services that collect, store and expose device data.",
    items: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "AI & Data",
    icon: Sparkles,
    blurb: "Applying models and vision to real device flows.",
    items: [
      "Python",
      "Computer Vision",
      "AI Integration",
      "Machine Learning fundamentals",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    blurb: "Everyday engineering workflow.",
    items: ["Git", "GitHub", "Postman", "STM32CubeIDE"],
  },
];

export const languages = ["Arabic", "French", "English"] as const;

export type Achievement = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  images: { src: string; alt: string }[];
};

export const achievements: Achievement[] = [
  {
    title: "Hackathon Youth Speak",
    subtitle: "Winner — Local & National",
    period: "",
    description:
      "Local and national winner for a mobile application built with FlutterFlow.",
    images: [
      { src: "/assest/youth.jpg", alt: "Youth Speak hackathon event" },
      { src: "/assest/youth1.jpg", alt: "Youth Speak hackathon team" },
    ],
  },
  {
    title: "Enactus Limitless",
    subtitle: "Community Manager",
    period: "2021–2023",
    description:
      "Social media management for the Enactus Limitless team. Won the Limitl'ESS Challenge 2023.",
    images: [
      { src: "/assest/enactus.jpg", alt: "Enactus Limitless event" },
      { src: "/assest/enactus 2.jpg", alt: "Enactus Limitless challenge" },
    ],
  },
];
