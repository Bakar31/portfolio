import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface IProps {
  title: string;
  Icon: IconType;
}

export const Section = ({ children, Icon, title }: PropsWithChildren<IProps>) => (
  <>
    <div className="mt-24 flex flex-col">
      <div className="text-3xl font-bold pl-4 flex gap-2 items-center">
        <Icon className="text-tinker" />
        <span>{title}</span>
      </div>
    </div>
    <div className="ml-14">{children}</div>
  </>
);
