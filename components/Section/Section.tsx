import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface IProps {
  title: string;
  Icon: IconType;
}

export const Section = ({ children, Icon, title }: PropsWithChildren<IProps>) => (
  <>
    <div className="mt-24 flex flex-col">
      <div className="sm:pl-4 flex flex-col sm:flex-row gap-2 items-center">
        <Icon className="text-5xl sm:text-3xl text-tinker" />
        <span className="text-2xl sm:text-3xl font-bold text-charcoal text-center">{title}</span>
      </div>
    </div>
    <div className="sm:ml-14">{children}</div>
  </>
);
