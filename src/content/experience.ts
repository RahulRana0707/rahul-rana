import React from "react";
import { LucideGraduationCap,FileCode2 } from "lucide-react";
export const experienceContent = {
  heading: "My Experience",
  experiences: [
    {
      title: "junior programmer",
      location: "mumbai, india",
      description:
        "Junior programmer creating web app front-ends with HTML, CSS, and JavaScript. Proficient in SQL for database integration. Collaborate with design team for user-friendly, appealing interfaces.",
      icon: React.createElement(LucideGraduationCap),
      date: "may 2023 - aug 2023",
    },
    {
      title: "associate software engineer",
      location: "mumbai, india",
      description:
        "As an associate software engineer, I convert designs into high-quality, performant code, and maintain it. I prioritize performance, quality, and bug fixing, while also focusing on code organization and automation.",
      icon: React.createElement(FileCode2),
      date: "sept 2023 - present",
    },
  ],
};
