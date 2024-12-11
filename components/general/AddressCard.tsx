import EditPenAddress from "../Icons/EditPenAddress";
import HomeAddressIcon from "../Icons/HomeAddressIcon";

interface AddressType {
  id: string;
  name: string;
  fullName: string;
  address: string;
  phone: string;
  onClick: () => void;
}
const AddressCard: React.FC<AddressType> = ({
  id,
  name,
  fullName,
  address,
  phone,
  onClick,
}) => {
  return (
    <>
      <div className="p-[32px] bg-white rounded-[40px]" onClick={onClick}>
        <div className="flex items-center justify-between mb-[16px]">
          <div className="flex items-center gap-[15px]">
            <HomeAddressIcon />
            <h3 className="lg:text-[24px] text-[18px] font-[500]">{name}</h3>
          </div>
          <button className="flex items-center gap-[12px] text-[16px] font-[600]">
            تعديل
            <EditPenAddress />
          </button>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <span className="lg:w-[15%] w-[25%] text-[#808E98] font-[300]">
              الاسم
            </span>
            <span className="text-[#787878] font-[400]">{fullName}</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="lg:w-[15%] w-[25%] text-[#808E98] font-[300]">
              العنوان
            </span>
            <span className="text-[#787878] font-[400]">{address}</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="lg:w-[15%] w-[25%] text-[#808E98] font-[300]">
              رقم الهاتف
            </span>
            <span className="text-[#787878] font-[400]">{phone}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressCard;
