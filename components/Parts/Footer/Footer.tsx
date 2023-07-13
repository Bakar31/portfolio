import { socialLinks } from "@/components/Sidebar/Sidebar.constants";

export const Footer = () => (
  <div className="flex sm:hidden justify-center gap-2 mt-6 mb-10">
    {socialLinks.map(({ SocialIcon, link }, i) => (
      <a key={i} href={link} target="_blank">
        <SocialIcon className="social-icon" />
      </a>
    ))}
  </div>
);
