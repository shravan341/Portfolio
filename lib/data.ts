import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Certificates",
    hash: "#Certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: " IBM DevOps and Software Engineering ",
    location: " Coursera",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: " Sep 2024 - Nov 2024 ",
  },
  {
    title: "Intelligence Tools for the Digital Age ",
    location: " Coursera",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Mar 2023 ",
  },
  {
    title: "Become a Full-Stack Web Developer",
    location: "LinkedIn   ",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - Mar 2023 ",
  },
] as const;

export const projectsData = [
  {
    title: "Hotel Booking",
    description:
      "I've developed a MERN stack application that helps users find hotels based on their budget, with a fully responsive design.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    url: "https://hotel-booking56988.vercel.app/",
  },
  {
    title: "Student Management System",
    description:
      "I've made a MERN stack application for teachers to manage student data, mark attendance at scheduled times, and conduct subject-specific quizzes.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    url: "https://hotel-booking56988.vercel.app/",
  },
  {
    title: "Task Management ",
    description:
      "I developed a real-time task management application using the MERN stack that allows users to schedule, track, and perform CRUD operations on their tasks.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    url: "https://hotel-booking56988.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  
  "Express",
  "PostgreSQL",
  "Docker",
  "Jenkins",
  
  "Framer Motion",
] as const;
