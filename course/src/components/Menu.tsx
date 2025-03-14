import Link from "next/link";
import Image from "next/image";
import { IoIosHome } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { role } from "../lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoIosHome />,
        label: "Home",
        href: "/home",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <GiTeacher />,
        label: "Teachers",
        href: "/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentBold />,
        label: "Students",
        href: "/students",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <SiGoogleclassroom />,
        label: "Classes",
        href: "/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdPlayLesson />,
        label: "Lessons",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiExamFill />,
        label: "Exams",
        href: "/exams",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <MdAssignment />,
        label: "Assignments",
        href: "/assignments",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <TiTick />,
        label: "Results",
        href: "/results",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <FaCheckDouble />,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <MdEvent />,
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <MdMessage />,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <GrAnnounce />,
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "teacher", "student"],
      },
    ],
  },

  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <IoMdSettings />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: <LuLogOut />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 mb-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-black font-bold my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-[#083765] font-bold py-2 rounded-md hover:bg-[#083765] hover:text-[#fffb15] duration-300 hover:shadow-2xl object-cover drop-shadow hover:p-2"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
