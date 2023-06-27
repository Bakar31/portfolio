import { IconType } from "react-icons";
export interface IGenericInstitute {
  institute: string;
  location: string;
  duration: string;
}

export interface IEducation extends IGenericInstitute {
  degree: string;
}

export interface IExperience extends IGenericInstitute {
  positon: string;
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
  type: string;
  title: string;
  supervisor?: string;
  course?: string;
  duration: string;
  location: string;
  details: string[];
}
