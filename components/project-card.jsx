import React from "react";

import { ArrowLink } from "./ui/arrowlink";

import {Image} from "next/image";

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
            <Link href={url} className="flex items-center">
              <span className="mr-1 text-slate-200">{title}</span>
              <ArrowLink />
            </Link>
          </div>
        </div>
      </CardHeader>

      {/* <CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2">
            
            <div className="flex items-center">
              <Image src={imagePath} width={40} height={40} /> 
              <Link href={url} className="flex items-center ml-2">
                <span className="mr-1 text-slate-200">{title}</span>
                <ArrowLink />
              </Link>
            </div>
          </div>
        </div>
      </CardHeader> */}

      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap gap-2 text-slate-400">
          <div className="flex flex-wrap gap-2 text-slate-400">
            {tech.map((skill, index) => (
              <span
                className="rounded-full px-2 py-1 text-xs font-extralight"
                style={{
                  backgroundColor: "rgba(39, 100, 85, 0.3)", // rgba with 30% transparency
                  color: "#64ffda",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
