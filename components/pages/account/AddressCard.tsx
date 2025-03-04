import AddAddressForm from "@/components/general/AddAddressForm";
import HomeSmall from "@/components/Icons/account/HomeSmall";
import EditPenAddress from "@/components/Icons/EditPenAddress";
import HomeAddressIcon from "@/components/Icons/HomeAddressIcon";
import { useState } from "react";

interface AddressType {
  id: string;
  name: string;
  fullName: string;
  address: string;
  phone: string;
  refetch: () => void;
}
const AddressCard: React.FC<AddressType> = ({
  id,
  name,
  fullName,
  address,
  phone,
  refetch,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <>
      <div className="p-[32px] bg-white rounded-[40px] max-w-[350px] border-2 border-black">
        <div className="flex items-center justify-between mb-[16px]">
          <div className="flex items-center gap-[15px]">
            <HomeSmall />
            <h3 className="lg:text-[24px] text-[18px] font-[500]">{name}</h3>
          </div>
          <button
            onClick={() => setShowEditForm(true)}
            className="flex items-center gap-[12px] text-[16px] font-[600]"
          >
            تعديل
            <EditPenAddress />
          </button>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <span className=" text-[#808E98] font-[300] w-20">الاسم</span>
            <span className="text-[#787878] font-[400]">{fullName}</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className=" text-[#808E98] font-[300] w-20">العنوان</span>
            <span className="text-[#787878] font-[400] ">{address}</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className=" text-[#808E98] font-[300] w-20">رقم الهاتف</span>
            <span className="text-[#787878] font-[400]">{phone}</span>
          </div>
        </div>
      </div>
      <AddAddressForm
        showForm={showEditForm}
        setShowForm={setShowEditForm}
        refetch={refetch}
        id={id}
        detailedAddress={address}
        fullName={fullName}
        phoneNumber={phone}
      />
    </>
  );
};
export default AddressCard;
