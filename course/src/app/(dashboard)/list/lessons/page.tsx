import TableSearch from "@/src/components/TableSearch";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import { ImFilter } from "react-icons/im";
import { FaSortAmountDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { lessonsData, role } from "@/src/lib/data";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-[#083765] even:bg-slate-100 text-sm hover:bg-gray-200"
    >
      <td className="flex items-center gap-4 p-4">{item.subject} </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <FaEdit className="text-[#083765] font-bold text-[16px]" />
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
          All Lessons
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
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />

      {/* PAGINATION SECTION  */}

      <Pagination />
    </div>
  );
};

export default LessonListPage;
