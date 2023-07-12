import { IconType } from "react-icons";

export enum EResearchType {
  THESIS = "Undergraduate Thesis",
  LAB = "Sessional Project",
}

export enum EProjectType {
  OPEN_APP = "Open Source Application",
  OPEN_LIB = "Open Source Library",
  PVT_REPO = "Private Repository",
}

export enum EAchievementType {
  AWARD = "Award",
  CERTIFICATE = "Certificate",
}

export interface IGenericInstitute {
  institute: string;
  location: string;
  duration: string;
  logo: string;
}

export interface IEducation extends IGenericInstitute {
  degree: string;
}

export interface IExperience extends IGenericInstitute {
  position: string;
}

export interface IContactInfo {
  InfoIcon: IconType;
  content: string;
}

export interface ISocialLink {
  SocialIcon: IconType;
  link: string;
}

export interface ISkill {
  title: string;
  Icon: IconType;
}

export interface ISkillGroup {
  name: string;
  BgIcon: IconType;
  skills: ISkill[];
}

export interface IResearchProject {
  type: EResearchType;
  title: string;
  supervisor?: string;
  course?: string;
  duration: string;
  location: string;
  details: string[];
}

interface ICardItem {
  title: string;
  description: string;
  duration: string;
  link: string;
  image: string;
  tags: string[];
}

export interface IProjectItem extends ICardItem {}

export interface IProject {
  type: EProjectType;
  items: IProjectItem[];
}

export interface ICourse extends ICardItem {
  institute: string;
}

export interface IActivity {
  organization: string;
  designation: string;
  duration: string;
  location: string;
  skills: string[];
  formers?: Omit<Partial<IActivity>, "organization" | "location">[];
}

export interface IAchievement {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
}

export interface IAchievementList {
  type: EAchievementType;
  items: IAchievement[];
}

export interface IVoluntary {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  image: string;
}

export interface IPublication {
  title: string;
  authors: string;
  description: string;
  duration: string;
}
