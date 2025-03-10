import Link from "next/link";
import Image from "next/image";
import Menu from "@/src/components/Menu";
import Navbar from "@/src/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left side  */}

      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[15%]  p-4 ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image
            src="/kdus_gebriel_gibi_logo.png"
            alt="logo"
            width={36}
            height={36}
          />
          <span className="hidden lg:block text-[#083765] font-bold text-[20px]">
            መንፈሳዊ ኮርስ
          </span>
        </Link>
        <Menu />
      </div>

      {/* right side  */}

      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
