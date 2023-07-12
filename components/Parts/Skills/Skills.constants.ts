import { IconType } from "react-icons";
import {
  BiCodeAlt,
  BiLogoAws,
  BiLogoCPlusPlus,
  BiLogoChrome,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoGoLang,
  BiLogoGraphql,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMeta,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoVuejs,
  BiVector,
} from "react-icons/bi";
import {
  TbApi,
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandReactNative,
  TbChartBar,
  TbChartCandle,
  TbCloud,
  TbCode,
  TbDatabase,
  TbHealthRecognition,
  TbPaint,
  TbSdk,
  TbTerminal2,
  TbTools,
} from "react-icons/tb";
import {
  SiApple,
  SiArduino,
  SiAzuredevops,
  SiDigitalocean,
  SiDocker,
  SiDotnet,
  SiFauna,
  SiGit,
  SiGnome,
  SiJira,
  SiKeras,
  SiLaravel,
  SiMaterialdesign,
  SiMysql,
  SiNestjs,
  SiNumpy,
  SiNuxtdotjs,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiSupabase,
  SiTableau,
  SiTensorflow,
  SiUbuntu,
  SiWindows11,
  SiYolo,
} from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { FaRobot } from "react-icons/fa";
import { BsListStars } from "react-icons/bs";
import { ISkillGroup } from "@/types";



export const skillGroups: ISkillGroup[] = [
  {
    name: "Programming Languages",
    BgIcon: TbCode,
    skills: [
      {
        title: "JavaScript",
        Icon: BiLogoJavascript,
      },
      {
        title: "TypeScript",
        Icon: BiLogoTypescript,
      },
      {
        title: "PHP",
        Icon: BiLogoPhp,
      },
      {
        title: "Python",
        Icon: BiLogoPython,
      },
      {
        title: "C#",
        Icon: TbBrandCSharp,
      },
      {
        title: "Java",
        Icon: BiLogoJava,
      },
      {
        title: "C++",
        Icon: BiLogoCPlusPlus,
      },
      {
        title: "Go",
        Icon: BiLogoGoLang,
      },
      {
        title: "ArduinoLang",
        Icon: SiArduino,
      },
    ],
  },
  {
    name: "Development Frameworks",
    BgIcon: TbTools,
    skills: [
      {
        title: "Laravel",
        Icon: SiLaravel,
      },
      {
        title: "NodeJS",
        Icon: BiLogoNodejs,
      },
      {
        title: "ReactJS",
        Icon: BiLogoReact,
      },
      {
        title: "NestJS",
        Icon: SiNestjs,
      },
      {
        title: "NextJS",
        Icon: TbBrandNextjs,
      },
      {
        title: "VueJS",
        Icon: BiLogoVuejs,
      },
      {
        title: "NuxtJS",
        Icon: SiNuxtdotjs,
      },
      {
        title: "ReactNative",
        Icon: TbBrandReactNative,
      },
      {
        title: ".NET Core",
        Icon: SiDotnet,
      },
    ],
  },
  {
    name: "ML Frameworks",
    BgIcon: FaRobot,
    skills: [
      {
        title: "PyTorch",
        Icon: SiPytorch,
      },
      {
        title: "TensorFlow",
        Icon: SiTensorflow,
      },
      {
        title: "Keras",
        Icon: SiKeras,
      },
      {
        title: "SK-learn",
        Icon: SiScikitlearn,
      },
    ],
  },
  {
    name: "ML Utility Tools",
    BgIcon: TbChartCandle,
    skills: [
      {
        title: "OpenCV",
        Icon: SiOpencv,
      },
      {
        title: "Pandas",
        Icon: SiPandas,
      },
      {
        title: "Numpy",
        Icon: SiNumpy,
      },
      {
        title: "YOLO",
        Icon: SiYolo,
      },
    ],
  },
  {
    name: "Database MS",
    BgIcon: TbDatabase,
    skills: [
      {
        title: "MySQL",
        Icon: SiMysql,
      },
      {
        title: "PostgreSQL",
        Icon: SiPostgresql,
      },
      {
        title: "MongoDB",
        Icon: BiLogoMongodb,
      },
      {
        title: "FirestoreDB",
        Icon: DiFirebase,
      },
      {
        title: "FaunaDB",
        Icon: SiFauna,
      },
    ],
  },
  {
    name: "Cloud Services",
    BgIcon: TbCloud,
    skills: [
      {
        title: "Firebase",
        Icon: BiLogoFirebase,
      },
      {
        title: "AWS Lambda",
        Icon: BiLogoAws,
      },
      {
        title: "Digital Ocean",
        Icon: SiDigitalocean,
      },
      {
        title: "Supabase",
        Icon: SiSupabase,
      },
    ],
  },
  {
    name: "APIs & SDKs",
    BgIcon: TbSdk,
    skills: [
      {
        title: "GNOME Toolkit",
        Icon: SiGnome,
      },
      {
        title: "Facebook SDK",
        Icon: BiLogoMeta,
      },
      {
        title: "Chrome Extension API",
        Icon: BiLogoChrome,
      },
    ],
  },
  {
    name: "Development Utils",
    BgIcon: TbTools,
    skills: [
      {
        title: "RESTful API",
        Icon: TbApi,
      },
      {
        title: "GraphQL",
        Icon: BiLogoGraphql,
      },
      {
        title: "FHIR",
        Icon: TbHealthRecognition,
      },
    ],
  },
  {
    name: "Data Visualization Utils",
    BgIcon: TbChartBar,
    skills: [
      {
        title: "MatplotLib",
        Icon: SiPython,
      },
      {
        title: "Seaborn",
        Icon: SiPython,
      },
      {
        title: "Tableau",
        Icon: SiTableau,
      },
    ],
  },
  {
    name: "Graphics & Processing",
    BgIcon: TbPaint,
    skills: [
      {
        title: "Vector Illustration",
        Icon: BiVector,
      },
      {
        title: "UI/UX Design",
        Icon: BiLogoFigma,
      },
      {
        title: "UML Design",
        Icon: SiMaterialdesign,
      },
      {
        title: "Image Processing",
        Icon: SiPython,
      },
    ],
  },
  {
    name: "Operating Systems",
    BgIcon: TbTerminal2,
    skills: [
      {
        title: "Ubuntu",
        Icon: SiUbuntu,
      },
      {
        title: "Windows",
        Icon: SiWindows11,
      },
      {
        title: "macOS",
        Icon: SiApple,
      },
    ],
  },
  {
    name: "Others",
    BgIcon: BsListStars,
    skills: [
      {
        title: "Git VCS",
        Icon: SiGit,
      },
      {
        title: "Open-source Library Contribution",
        Icon: BiCodeAlt,
      },
      {
        title: "JIRA",
        Icon: SiJira,
      },
      {
        title: "CI/CD",
        Icon: SiAzuredevops,
      },
      {
        title: "Docker",
        Icon: SiDocker,
      },
    ],
  },
];
