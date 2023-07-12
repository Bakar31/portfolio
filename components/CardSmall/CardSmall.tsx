import { EAchievementType, IAchievement, IVoluntary } from "@/types";
import Image from "next/image";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";

interface IProps {
  item: IVoluntary | IAchievement;
  type?: EAchievementType;
}

function getImageComponent(item: IVoluntary | IAchievement, type?: string) {
  if ("image" in item) return <Image className="-m-3 mr-5" src={item.image} alt={item.title} width={50} height={50} />;
  return (
    type && (
      <div className="text-3xl -m-2 w-14 text-charcoal group-hover:text-whiteboard transition-all duration-500">
        {type === EAchievementType.AWARD ? <BsFillTrophyFill /> : <FaCertificate />}
      </div>
    )
  );
}

export const CardSmall = ({ item, type }: IProps) => (
  <div className="group achievement-card-bg">
    {getImageComponent(item, type)}
    <span className="w-12">{item.duration}</span>
    <span className="font-bold">{item.title}</span>
    <span className="achievement-card-subtitle">{item.subtitle}</span>
    <span>{item.location}</span>
  </div>
);
