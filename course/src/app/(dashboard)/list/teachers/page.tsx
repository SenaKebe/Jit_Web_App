import TableSearch from "@/src/components/TableSearch";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import { ImFilter } from "react-icons/im";
import { FaSortAmountDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { role, teachersData } from "@/src/lib/data";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "Info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-[#083765] even:bg-slate-100 text-sm hover:bg-gray-200"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h3 className="font-semibold text-[#083765]">{item.name}</h3>
          <p className="text-xs text-[#083765]">{item?.email}</p>
        </div>
      </td>

      <td className="hidden md:table-cell text-[#083765] text-[13px]">
        {item.teacherId}
      </td>
      <td className="hidden md:table-cell text-[#083765] text-[13px]">
        {item.subjects.join(",")}
      </td>
      <td className="hidden md:table-cell text-[#083765] text-[13px]">
        {item.classes.join(",")}
      </td>
      <td className="hidden md:table-cell text-[#083765] text-[13px]">
        {item.phone}
      </td>
      <td className="hidden md:table-cell text-[#083765] text-[13px]">
        {item.address}
      </td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <FaStreetView className="text-[#083765] font-bold text-[16px]" />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-400">
              <MdDelete className="text-[#083765] font-bold text-[16px]" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP SECTION  */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-lg font-bold text-[#083765]">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <ImFilter className="text-[#083765] font-bold text-[16px]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <FaSortAmountDown className="text-[#083765] font-bold text-[16px]" />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFB15]">
                <FaPlus className="text-[#083765] font-bold text-[16px]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LIST SECTION  */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />

      {/* PAGINATION SECTION  */}

      <Pagination />
    </div>
  );
};

export default TeacherListPage;
