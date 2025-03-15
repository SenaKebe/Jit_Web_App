import EventCalendar from "@/src/components/EventCalendar";
import Announcements from "@/src/components/Announcements";
import BigCalendar from "@/src/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold text-[#083765]">
            Schedule ( 2ኛ ዓመት )
          </h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* <EventCalendar /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
