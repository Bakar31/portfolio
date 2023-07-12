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

export interface IGenericTimeline {
  duration: string;
  location: string;
}

export interface IBaseInstitute extends IGenericTimeline {
  institute: string;
  logo: string;
}

export interface IEducation extends IBaseInstitute {
  degree: string;
}

export interface IExperience extends IBaseInstitute {
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

export interface IResearchProject extends IGenericTimeline {
  type: EResearchType;
  title: string;
  supervisor?: string;
  course?: string;
  details: string[];
}

interface IBaseCardItem {
  title: string;
  description: string;
  duration: string;
  link: string;
  image: string;
  tags: string[];
}

export interface IProjectItem extends IBaseCardItem {}

export interface IProjectGroup {
  type: EProjectType;
  items: IProjectItem[];
}

export interface ICourseItem extends IBaseCardItem {
  institute: string;
}

export interface IActivity extends IGenericTimeline {
  organization: string;
  designation: string;
  skills: string[];
  formers?: Omit<Partial<IActivity>, "organization" | "location">[];
}

export interface IAchievement extends IGenericTimeline {
  title: string;
  subtitle: string;
}

export interface IAchievementList {
  type: EAchievementType;
  items: IAchievement[];
}

export interface IVoluntary extends IAchievement {
  image: string;
}

export interface IPublication {
  title: string;
  authors: string;
  description: string;
  duration: string;
}
