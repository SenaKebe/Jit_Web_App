"use client";
import { FaPlus } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FFFB15]"
      : type === "update"
      ? "bg-[#FFFB15]"
      : "bg-red-400";
  const Icon =
    type === "create" ? FaPlus : type === "update" ? FaEdit : MdDelete;

  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className={` text-[#083765] font-bold text-[20px] `} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 z-50 flex items-center justify-center">
          <div className="bg-[#083765]  p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <div className=" absolute top-4 rounded-md right-4 cursor-pointer">
              <IoIosCloseCircle className="bg-[#083765] text-[#FFFB15] font-bold text-[20px]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
