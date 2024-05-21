import React from "react";

import { ArrowLink } from "./ui/arrowlink";

import Image from "next/image";

import Link from "next/link";

import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

export function ProjectCard({ id, title, description, url, imagePath, tech }) {
  return (
    <Card
      key={id}
      className={`w-full max-w-md transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
    >
      <CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center">
              <div>
                <Image alt="Cinect" src={imagePath} width={50} height={10} />
              </div>

              <Link href={url} className="flex items-center ml-2">
                <span className="mr-1 text-xs text-slate-200">{title}</span>
                <ArrowLink />
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>

        {/* <p className="text-xs text-slate-500">{description}</p> */}
        <ul className="text-xs text-slate-500 list-disc pl-5">
          {description.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>

      </CardContent>

      <CardFooter>
      <div className="flex flex-wrap gap-1 text-slate-400">
          {tech.map((skill, index) => (
            <span
              key={index}
              className="rounded-full px-2 py-0.8 font-light" // Smaller padding and text size
              // style={{
              //   backgroundColor: "rgba(39, 100, 85, 0.3)",
              //   color: "#64ffda",
              //   fontSize: "11px",
              // }}
              style={{
                backgroundColor: "rgba(45, 29, 172, 0.4)",
                color: "#00DFFF",
                fontSize: "11px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
