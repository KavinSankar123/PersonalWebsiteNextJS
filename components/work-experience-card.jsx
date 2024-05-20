import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

export function WorkExperienceCard({
  id,
  title,
  duration,
  company,
  description,
  skills,
  className,
}) {
  return (
    <Card
      key={id}
      className={`w-full max-w-md transition duration-100 ease-in-out transform hover:scale-105 hover:bg-workExpCustomHover hover:shadow-lg hover:rounded-xl`}
    >
      <CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-xs text-slate-200 font-medium">{title}</h3>

            <div className="text-xs ml-auto">{duration}</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-00 dark:text-gray-400">
            <BuildingIcon className="h-4 w-4" />
            <span>{company}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-1 text-slate-400">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full px-2 py-0.8 font-extralight" // Smaller padding and text size
              style={{
                backgroundColor: "rgba(39, 100, 85, 0.3)",
                color: "#64ffda",
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

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}
