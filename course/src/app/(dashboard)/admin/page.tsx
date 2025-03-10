import UserCard from "@/src/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-3/4">
        {/* USER CARDS  */}

        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Classes" />
          <UserCard type="Lessons" />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="w-full lg:w-1/4">Right</div>
    </div>
  );
};

export default AdminPage;
