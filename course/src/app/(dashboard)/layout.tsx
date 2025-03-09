import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left side  */}

      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[15%] bg-red-200 ">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/kdus_gebriel_gibi_logo.png"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="hidden lg:block">መንፈሳዊ ኮርስ</span>
        </Link>
      </div>

      {/* right side  */}

      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[85%] bg-blue-200">
        right side
      </div>
    </div>
  );
}
