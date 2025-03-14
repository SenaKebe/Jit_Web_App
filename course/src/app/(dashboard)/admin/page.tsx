import UserCard from "@/src/components/UserCard";
import CountChart from "@/src/components/CountChart";
import AttendanceChart from "@/src/components/AttendanceChart";
import FinanceChart from "@/src/components/FinanceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-3/4 flex flex-col gap-8">
        {/* USER CARDS  */}

        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Classes" />
          <UserCard type="Lessons" />
        </div>

        {/* MIDDLE CHARTS   */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART  */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* ATTENDANCE CHART   */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART   */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>

      {/* RIGHT  */}
      <div className="w-full lg:w-1/4">Right</div>
    </div>
  );
};

export default AdminPage;
