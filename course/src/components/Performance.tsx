"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { IoIosMore } from "react-icons/io";

const data = [
  { name: "Group A", value: 80, fill: "#083765" },
  { name: "Group B", value: 20, fill: "#fffb15" },
];

const Performance = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#083765]">Performance</h1>
        <IoIosMore className="text-[#083765] text-[16px] font-bold" />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-[#083765]">of 10 max </p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
