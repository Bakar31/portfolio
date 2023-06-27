import { IContactInfo, ISocialLink } from "@/types";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const contactInfos: IContactInfo[] = [
  {
    InfoIcon: FaMapMarkerAlt,
    content: "Sector 14, Uttara, Dhaka 1230",
  },
  {
    InfoIcon: MdAlternateEmail,
    content: "com.jalal.uddin[at]gmail.com",
  },
  {
    InfoIcon: BsFillTelephoneFill,
    content: "(+880) 1684 197 772",
  },
];

export const socialLinks: ISocialLink[] = [
  {
    SocialIcon: MdEmail,
    link: "mailto:dgvai.hridoy@gmail.com",
  },
  {
    SocialIcon: FaGithub,
    link: "https://github.com/dgvai",
  },
  {
    SocialIcon: FaLinkedin,
    link: "https://linkedin.com/in/dgvai",
  },
  {
    SocialIcon: FaTwitter,
    link: "https://twitter.com/dgvai",
  },
  {
    SocialIcon: FaFacebook,
    link: "https://facebook.com/dgvai.hridoy",
  },
];
