import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Component({ title, startDate, endDate, company, description, skills }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              {startDate}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{company}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline">{skill}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
