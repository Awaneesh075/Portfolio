import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Smart Gate Control System",
    image: "/projects/smart-gate.png",
    description:
      "AI-powered smart entry system integrating face recognition, backend approval logic, mobile approval, and IoT-based gate control.",
    tech: ["Node.js", "Python", "OpenCV", "MongoDB", "React", "IoT"],
    github: "https://github.com/Awaneesh075/Smart-City-Entry"
  },
  {
    title: "Inventory Management System",
    image: "/projects/inventory.png",
    description:
      "Inventory tracking system for managing stock, products, and workflows.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Awaneesh075/Inventory-Management"
  },
  {
    title: "Weather Web Application",
    image: "/projects/weather.png",
    description:
      "Real-time weather app using public APIs.",
    tech: ["JavaScript", "API"],
    github: "https://github.com/Awaneesh075/Weather-Web-Appliacton"
  },
  {
    title: "Fake News Detection System",
    image: "/projects/fake-news.png",
    description:
      "Machine learning system for fake news classification.",
    tech: ["Python", "ML", "NLP"],
    github: "https://github.com/Awaneesh075/Fake-News-Detector"
  }
];
