"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoIosMore } from "react-icons/io";

const data = [
  {
    name: "megabit 10",
    present: 40,
    absent: 60,
  },
  {
    name: "megabit 17",
    present: 20,
    absent: 80,
  },
  {
    name: "megabit 24",
    present: 80,
    absent: 30,
  },
  {
    name: "miyaziya 10",
    present: 60,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-gray-300 rounded-xl w-full h-full p-4">
      {/* TITLE  */}
      <div className="flex justify-between">
        <h1 className="text-[#083765] font-bold text-lg">Attendance</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>

      {/* ATTENDANCE CHART  */}

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fff" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#083765" }}
            tickLine={false}
          />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend
            className="font-bold bg-[#083765]"
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          />
          <Bar
            dataKey="present"
            fill="#083765"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#FFFB15"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
