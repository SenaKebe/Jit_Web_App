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

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoIosHome />,
        label: "Home",
        href: "/home",
      },
      {
        icon: <GiTeacher />,
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: <PiStudentBold />,
        label: "Students",
        href: "/students",
      },
      {
        icon: <SiGoogleclassroom />,
        label: "Classes",
        href: "/classes",
      },
      {
        icon: <MdPlayLesson />,
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: <PiExamFill />,
        label: "Exams",
        href: "/exams",
      },
      {
        icon: <MdAssignment />,
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: <FaCheckDouble />,
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: <MdEvent />,
        label: "Events",
        href: "/events",
      },
      {
        icon: <MdMessage />,
        label: "Messages",
        href: "/messages",
      },
      {
        icon: <GrAnnounce />,
        label: "Announcements",
        href: "/announcements",
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
      },
      {
        icon: <IoMdSettings />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <LuLogOut />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-black font-bold my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-[#083765] font-bold py-2"
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
