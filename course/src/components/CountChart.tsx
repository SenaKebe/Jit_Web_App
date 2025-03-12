"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { IoIosMore } from "react-icons/io";
import { MdOutlineGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#FFF",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FFFB15",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#083765",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE  */}
      <div className="flex justify-between">
        <h1 className="text-[#083765] font-bold text-lg">Students</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>

      {/* CHART   */}
      <div className="relative w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            {/* <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MdOutlineBoy className="text-4xl text-[#083765]" />
          <MdOutlineGirl className="text-4xl text-[#FFFB15] font-bold" />
        </div>
      </div>

      {/* BOTTOM   */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#083765] rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs ">Boys (55%) </h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FFFB15] rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs ">Girls (45%) </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
