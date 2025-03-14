"use client";
import { IoIosMore } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "መስ",
    income: 3000,
    expense: 4500,
  },
  {
    name: "ጥቅ",
    income: 5000,
    expense: 300,
  },
  {
    name: "ህዳ",
    income: 4500,
    expense: 4300,
  },
  {
    name: "ታህ",
    income: 3490,
    expense: 6300,
  },
  {
    name: "ጥር",
    income: 4490,
    expense: 1300,
  },
  {
    name: "የካ",
    income: 3500,
    expense: 2300,
  },
  {
    name: "መጋ",
    income: 2590,
    expense: 4300,
  },
  {
    name: "ሚያ",
    income: 3990,
    expense: 2800,
  },
  {
    name: "ግን",
    income: 1490,
    expense: 3200,
  },
  {
    name: "ሰኔ",
    income: 4590,
    expense: 2100,
  },
  {
    name: "ሐም",
    income: 6790,
    expense: 1200,
  },
  {
    name: "ነሐ",
    income: 3220,
    expense: 1200,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-gray-300 rounded-xl w-full h-full p-4">
      {/* TITLE  */}
      <div className="flex justify-between">
        <h1 className="text-[#083765] font-bold text-lg">Finance</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis
            dataKey="name"
            // axisLine={false}
            tick={{ fill: "#083765" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            //   axisLine={false}
            tick={{ fill: "#083765" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            className="font-bold bg-[#083765]"
            align="center"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "20px",
            }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#083765"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#FFFB15"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
