"use client";

import * as React from "react";

import { WorkExperienceCard } from "@/components/work-experience-card";
import { ProjectCard } from "@/components/project-card";

import workExperienceData from "./work-experience-data.json";
import projectsData from "./projects-data.json";

import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "@/components/ui/externallink";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex justify-between max-w-4xl w-full p-4">
        <div className="w-1/3 p-4">
          <div className="text-slate-200 fixed">
            <h1 className="font-sans font-bold text-4xl mt-9">Kavin Sankar</h1>
            <h2 className="font-sans text-l mt-2">Senior CS Student</h2>
            <p className="font-sans font-extralight text-slate-400 text-sm mt-4">
              Small one sentence bio goes here.
            </p>
          </div>
        </div>

        <div className="font-sans p-4 max-w-md">
          <div className="font-sans font-light text-sm text-slate-400 mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <br></br>

            <div className="mt-10">
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

            <div className="flex font-bold text-slate-200 items-center mt-5 ml-5">
              <Link href="/resume" className="flex items-center">
                <span className="mr-1">Full Resume</span>
                <ExternalLink />
              </Link>
            </div>

            <div className="mt-10">
              {projectsData.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  title={proj.title}
                  description={proj.description}
                  url={proj.url}
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
