"use client";
import { FaPlus } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

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

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 ">
        <span className="text-center text-[#FFFB15] font-bold text-[15px]">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-red-700 text-white font-bold py-2 px-4 rounded-md border-none w-max">
            Delete
          </button>
          <button className="bg-[#FFFB15] text-[#083765] font-bold py-2 px-4 rounded-md border-none">
            Cancel
          </button>
        </div>
      </form>
    ) : (
      <TeacherForm type="create" />
    );
  };

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
            <Form />
            <div
              className=" absolute top-4 rounded-md right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoIosCloseCircle className="bg-[#083765] text-[#FFFB15] font-bold text-[25px]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
