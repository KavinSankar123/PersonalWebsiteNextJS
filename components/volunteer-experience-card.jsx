import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

export function VolunteerCard({
  id,
  duration,
  title,
  name,
  imagePath,
  description,
  skills,
}) {
  return (
    <Card
      key={id}
      className={`w-full max-w-md transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl mb-10`}
    >
      <div className="relative flex justify-center">
        <img
          src={imagePath}
          alt="Volunteer Experience"
          className="h-24 object-cover mt-4"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-m font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{name}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDaysIcon className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <ul className="text-xs text-slate-500 list-disc pl-5">
          {description.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-1 text-slate-400">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full px-2 py-0.8 font-light" // Smaller padding and text size
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

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
