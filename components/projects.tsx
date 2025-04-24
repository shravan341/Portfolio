"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
            {project.url && (
              <div className="mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block my-5 px-6 py-2 bg-slate-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Live Demo
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
