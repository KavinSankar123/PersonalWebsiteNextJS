"use client";

import * as React from "react";

import { WorkExperienceCard } from "@/components/work-experience-card";
import { ProjectCard } from "@/components/project-card";
import { VolunteerCard } from "@/components/volunteer-experience-card";

import workExperienceData from "./work-experience-data.json";
import projectsData from "./projects-data.json";
import volunteerExperienceData from "./volunteer-experience.json";

import Link from "next/link";

import { useMediaQuery } from "@/hooks/use-media-query";

import { ExternalLink } from "@/components/ui/externallink";
import { NavbarSection } from "@/components/ui/navbarsection";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex justify-center min-h-screen">
      {isDesktop ? (
        <div className="flex justify-between max-w-4xl w-full p-4">
          <div className="w-1/3 p-4">
            <div className="max-w-64 text-slate-200 fixed">
              <h1
                id="typewriter-animate1"
                className="font-sans font-bold text-4xl mt-9"
              >
                Kavin Sankar
              </h1>

              <h2 id="typewriter-animate2" className="font-sans text-l mt-2">
                MCS Student @ UIUC
              </h2>

              <h3
                id="typewriter-animate3"
                className="font-sans font-extralight text-slate-400 text-sm mt-4"
              >
                Software engineer, interested in back-end engineering.
                engineering.
              </h3>

              <div className="font-bold text-xs mt-10">
                <a href="#about">
                  <div className="flex items-center text-slate-500 hover:text-slate-200">
                    <NavbarSection />
                    About
                  </div>
                </a>

                <a href="#experience">
                  <div className="flex items-center text-slate-500 hover:text-slate-200">
                    <NavbarSection />
                    Experience
                  </div>
                </a>

                <a href="#projects">
                  <div className="flex items-center text-slate-500 hover:text-slate-200">
                    <NavbarSection />
                    Projects
                  </div>
                </a>

                <a href="#volunteering">
                  <div className="flex items-center text-slate-500 hover:text-slate-200">
                    <NavbarSection />
                    Volunteering
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div id="about" className="font-sans p-4 max-w-md">
            <div className="font-sans font-light text-sm text-slate-400 mt-10">
              <p>
                My name's Kavin and I'm a Master of Computer Science (MCS)
                student @ University of Illinois Urbana-Champaign with an
                expected graduation date of December 2026. My primary coursework
                interests are distributed systems, cloud computing, and software
                engineering! You can find my full resume right below this
                section.
              </p>
              <br />
              <p>
                I started programming in Java by building simple programs in
                high school. Today, I have expanded and applied my skills to a
                wide variety of problems and have garnered three software
                engineering internships. I love learning new languages,
                frameworks, and working on interesting projects that challenge
                me.
              </p>
              <br />
              <p>
                When I have a light workload and not handling ten different
                assignments at the same time, I'm usually weightlifting,
                watching a new show, hanging with friends, or trying new coffee
                places.
              </p>
              <br />

              <div className="flex font-bold text-slate-200 items-center mt-5 ml-5">
                <Link href="/resume" passHref legacyBehavior>
                  <a className="flex items-center" target="_blank">
                    <span className="mr-1">Full Resume</span>
                    <ExternalLink />
                  </a>
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
                    className={`w-full max-w-md transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
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

              <br></br>

              <div id="volunteering" className="mt-10">
                {volunteerExperienceData.map((exp) => (
                  <VolunteerCard
                    key={exp.id}
                    duration={exp.duration}
                    title={exp.title}
                    name={exp.name}
                    imagePath={exp.imagePath}
                    description={exp.description}
                    skills={exp.skills}
                    className={`w-full max-w-md transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-5 text-slate-200">
          <div className="mr-5">
            <h1
              id="typewriter-animate1"
              className="max-w-80 font-sans font-bold text-3xl mt-9"
            >
              Kavin Sankar
            </h1>

            <h2 id="typewriter-animate2" className="font-sans text-base mt-2">
              MCS Student @ UIUC
            </h2>

            <h3
              id="typewriter-animate3"
              className="font-sans font-extralight text-slate-400 text-sm mt-4"
            >
              Software engineer, interested in back-end engineering.
            </h3>
          </div>

          <h1 className="font-sans font-bold text-slate-200 mt-12">About</h1>

          <div id="about" className="font-sans p-4 max-w-md">
            <div className="font-sans font-light text-sm text-slate-400">
              <p>
                My name's Kavin and I'm a Master of Computer Science (MCS)
                student @ University of Illinois Urbana-Champaign with an
                expected graduation date of December 2026. My primary coursework
                interests are distributed systems, cloud computing, and software
                engineering! You can find my full resume right below this
                section.
              </p>
              <br />
              <p>
                I started programming in Java by building simple programs in
                high school. Today, I have expanded and applied my skills to a
                wide variety of problems and have garnered three software
                engineering internships. I love learning new languages,
                frameworks, and working on interesting projects that challenge
                me.
              </p>
              <br />
              <p>
                When I have a light workload and not handling ten different
                assignments at the same time, I'm usually weightlifting,
                watching a new show, hanging with friends, or trying new coffee
                places.
              </p>
              <br />
              <div className="flex font-bold text-slate-200 items-center mt-5">
                <Link href="/resume" passHref legacyBehavior>
                  <a className="flex items-center" target="_blank">
                    <span className="mr-1">Full Resume</span>
                    <ExternalLink />
                  </a>
                </Link>
              </div>
              <h1 className="font-sans font-bold text-slate-200 mt-16">
                Experience
              </h1>
              <div id="experience" className="mt-5">
                {workExperienceData.map((exp) => (
                  <WorkExperienceCard
                    key={exp.id}
                    title={exp.title}
                    duration={exp.duration}
                    company={exp.company}
                    description={exp.description}
                    skills={exp.skills}
                    className={`w-full max-w-lg transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
                  />
                ))}
              </div>
              <br></br>
              <h1 className="font-sans font-bold text-slate-200 mt-5">
                Projects
              </h1>
              <div id="projects" className="mt-5">
                {projectsData.map((proj) => (
                  <ProjectCard
                    key={proj.id}
                    title={proj.title}
                    description={proj.description}
                    url={proj.url}
                    imagePath={proj.imagePath}
                    tech={proj.tech}
                    className={`transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
                  />
                ))}
              </div>
              <br></br>
              <h1 className="font-sans font-bold text-slate-200 mt-5">
                Volunteering
              </h1>
              <div id="volunteering" className="mt-5">
                {volunteerExperienceData.map((exp) => (
                  <VolunteerCard
                    key={exp.id}
                    duration={exp.duration}
                    title={exp.title}
                    name={exp.name}
                    imagePath={exp.imagePath}
                    description={exp.description}
                    skills={exp.skills}
                    className={`w-full max-w-lg transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
