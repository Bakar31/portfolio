import Image from "next/image";
import { Tooltip } from "flowbite-react";

import avatar from "@/public/images/portrait.jpg";
import { contactInfos, socialLinks } from "./Sidebar.constants";

export const Sidebar = () => (
  <div className="sidebar-main">
    <h1 className="text-center font-black text-2xl my-2">Jalal Uddin</h1>
    <Image
      alt="Jalal Uddin Avatar"
      className="rounded-full w-3/4 mx-auto my-2 border-4 border-whiteboard"
      src={avatar}
    />
    <p className="text-xs p-2 text-center ">
      The woods are lovely, dark and deep, <br />
      But I have promises to keep, <br />
      And miles to go before I sleep, <br />
      And miles to go before I sleep. <br />
      <span className="italic"> - Robert Frost</span>
    </p>
    <div className="absolute bottom-0 w-full -m-2 mb-4">
      <div className="flex mb-4 justify-center">
        {contactInfos.map(({ content, InfoIcon }, i) => (
          <Tooltip key={i} content={content}>
            <InfoIcon className="contact-icon" />
          </Tooltip>
        ))}
      </div>
      <div className="flex justify-center gap-2 my-4">
        {socialLinks.map(({ SocialIcon, link }, i) => (
          <a key={i} href={link} target="_blank">
            <SocialIcon className="social-icon" />
          </a>
        ))}
      </div>
    </div>
  </div>
);
