import { ReactNode } from "react";
interface ChooseType {
  icon: ReactNode;
  title: string;
  description: string;
}
const WhyChosseCard: React.FC<ChooseType> = ({ icon, title, description }) => {
  return (
    <>
      <div className="group bg-secondary hover:bg-primary text-primary hover:text-secondary py-[24px] px-[10px] transition-all flex flex-col justify-center items-center gap-[16px] rounded-[32px]">
        {icon}
        <h4 className="text-center lg:text-[20px] text-[16px]">{title}</h4>
        <p className="lg:text-[16px] text-[14px] text-center">{description}</p>
      </div>
    </>
  );
};
export default WhyChosseCard;
