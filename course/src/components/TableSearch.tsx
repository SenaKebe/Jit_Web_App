import { FaSearch } from "react-icons/fa";

const TableSearch = () => {
  return (
    <div className="flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-[#083765] px-2">
      <FaSearch className="text-[#083765] font-bold text-[14px]" />
      <input
        type="text"
        placeholder="Search from table"
        className="w-[200px] p-2 bg-transparent outline-none text-[14px]"
      />
    </div>
  );
};

export default TableSearch;
