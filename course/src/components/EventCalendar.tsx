"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosMore } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "የአርብ ጸሎት",
    time: "12:00 - 01:15",
    description: "ዘወትር አርብ ጠዋት የሚደርግ የማኅበር ጸሎት በአማርኛ",
    location: "ቆርቆሮ አዳራሽ",
  },
  {
    id: 2,
    title: "የሐሙስ ጸሎት",
    time: "12:00 - 01:15",
    description: "ዘወትር ሐሙስ ጠዋት የሚደርግ የማኅበር ጸሎት በአማርኛ",
    location: "ቆርቆሮ አዳራሽ",
  },
  {
    id: 3,
    title: "ኮርስ",
    time: "03:30 - 05:30",
    description: "ዘወትር ቅዳሜ ከ1ኛ ዓመት - 5ኛ ዓመት ላሉ ተማሪዎች የተዘጋጀ",
    location: "ቅዱስ ገብርኤል ቤተ ክርስቲያን",
  },
  {
    id: 4,
    title: "መዝሙር ጥናት",
    time: "12:00 - 01:00",
    description: "ዘወትር ከሰኞ - ረቡዕ ጠዋት",
    location: "ሰንበቴ ቤት",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold my-4 text-[#083765]">Events</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>
      <div className="flex flex-col gap-4 ">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15] bg-white"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-[#083765] text-[17px] font-bold">
                {event.title}
              </h1>
              <span className="text-[#083765] text-xs">{event.time}</span>
            </div>

            <p className="mt-2 text-[#083765] text-[14px]">
              {event.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <IoLocation className="text-[#083765] text-[14px] font-bold" />
              <p className="text-[#083765] text-[14px] font-bold">
                {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
