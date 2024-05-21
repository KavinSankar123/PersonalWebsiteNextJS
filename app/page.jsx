"use client";

import * as React from "react";

import { WorkExperienceCard } from "@/components/work-experience-card";
import { ProjectCard } from "@/components/project-card";

import workExperienceData from "./work-experience-data.json";
import projectsData from "./projects-data.json";

import Link from "next/link";

import { ExternalLink } from "@/components/ui/externallink";
import { NavbarSection } from "@/components/ui/navbarsection";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex justify-between max-w-4xl w-full p-4">
        <div className="w-1/3 p-4">
          <div className="max-w-64 text-slate-200 fixed">
            <h1 className="font-sans font-bold text-4xl mt-9">Kavin Sankar</h1>
            <h2 className="font-sans text-l mt-2">Senior CS Student</h2>
            <p className="font-sans font-extralight text-slate-400 text-sm mt-4">
              Aspiring software engineer, interested in full-stack development.
            </p>

            <div className="font-bold text-xs mt-10">
              <div className="flex items-center text-slate-500 hover:text-slate-200">
                <NavbarSection />
                <a href="#about">About</a>
              </div>
              <div className="flex items-center text-slate-500 hover:text-slate-200">
                <NavbarSection />
                <a href="#experience">Experience</a>
              </div>
              <div className="flex items-center text-slate-500 hover:text-slate-200">
                <NavbarSection />
                <a href="#projects">Projects</a>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="font-sans p-4 max-w-md">
          <div className="font-sans font-light text-sm text-slate-400 mt-10">
            <p>
              My name’s Kavin and I’m currently a senior at the University of
              Pittsburgh double majoring in computer science & data science with
              an expected graduation date of April 2025. You can find my full
              resume right below this section.
            </p>
            <br />
            <p>
              I started programming in Java by building simple programs in high
              school. Today, I have expanded and applied my skills to a wide
              variety of problems. I love learning new languages, frameworks,
              and working on interesting projects that challenge me.
            </p>
            <br />
            <p>
              When I have a light workload and not drinking 3 coffees a day to
              finish my classwork, I am usually weightlifting, watching a new
              show, hanging with friends, or trying new coffee places.
            </p>
            <br />

            <div className="flex font-bold text-slate-200 items-center mt-5 ml-5">
              <Link href="/resume" className="flex items-center">
                <span className="mr-1">Full Resume</span>
                <ExternalLink />
              </Link>
            </div>

            <div id="experience" className="mt-10">
              {workExperienceData.map((exp) => (
                <WorkExperienceCard
                  key={exp.id}
                  title={exp.title}
                  duration={exp.duration}
                  company={exp.company}
                  description={exp.description}
                  skills={exp.skills}
                />
              ))}
            </div>

            <br></br>

            <div id="projects" className="mt-10">
              {projectsData.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  title={proj.title}
                  description={proj.description}
                  url={proj.url}
                  imagePath={proj.imagePath}
                  tech={proj.tech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
