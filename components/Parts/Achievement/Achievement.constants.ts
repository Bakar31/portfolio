import { EAchievementType, IAchievementList } from "@/types";

export const achievements: IAchievementList[] = [
  {
    type: EAchievementType.AWARD,
    items: [
      {
        title: "Ranked: 237",
        subtitle: "Robi Datathon 2.0: Pre-Assessment",
        duration: "2022",
        location: "Kaggle Competition",
      },
      {
        title: "Team MVP",
        subtitle: "Robotic Society of RUET",
        duration: "2022",
        location: "Bangladesh",
      },
      {
        title: "Academic Excellence",
        subtitle: "Rajshahi University of Engineering Technology",
        duration: "2018",
        location: "Bangladesh",
      },
    ],
  },
  {
    type: EAchievementType.CERTIFICATE,
    items: [
      {
        title: "Block Chain Training",
        subtitle: "Bangabandhu Sheikh Mujib Hi-Tech Park",
        duration: "2023",
        location: "Bangladesh",
      },
      {
        title: "Industrial Training",
        subtitle: "Bangladesh Steel Re-Rolling Mills Ltd.",
        duration: "2019",
        location: "Bangladesh",
      },
      {
        title: "Participation",
        subtitle: "Indian Rover Challenge",
        duration: "2018",
        location: "India",
      },
      {
        title: "Participation",
        subtitle: "European Rover Challenge",
        duration: "2018",
        location: "Poland",
      },
    ],
  },
];
