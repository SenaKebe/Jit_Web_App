import { IoIosMore } from "react-icons/io";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl bg-[#083765] text-[#FFFB15] p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[12px] bg-white px-2 font-bold py-1 rounded-full text-[#083765]">
          02/02/2017
        </span>
        <IoIosMore className="text-[#FFFB15] text-[20px] font-bold" />
      </div>
      <h1 className="font-bold text-2xl my-4">1,234</h1>
      <h2 className="text-sm font-semibold">{type}</h2>
    </div>
  );
};

export default UserCard;
