"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-3">
  Currently pursuing my <span className="font-medium">B.Tech in Computer Science</span> with a {" "}
  <span className="font-medium text-blue-600">specialization in Full Stack Development</span> and {" "}
  <span className="font-medium text-green-600">minor in DevOps</span>.{" "}
  <span className="italic">What excites me most about programming</span> is {" "}
  building <span className="underline">scalable web architectures</span> that {" "}
  integrate development with deployment. My core stack is {" "}
  <span className="font-medium">
    React, Next.js, Node.js, and MongoDB
  </span>, with {" "}
  <span className="font-medium">DevOps tools</span> for CI/CD and cloud deployment. {" "}
  I'm constantly expanding my skills and currently exploring advanced {" "}
  <span className="font-medium">microservices patterns</span> and {" "}
  <span className="font-medium">container orchestration</span>.
</p>

    </motion.section>
  );
}
