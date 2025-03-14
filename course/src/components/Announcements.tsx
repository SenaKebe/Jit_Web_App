import { IoLocation } from "react-icons/io5";

const Announcements = () => {
  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold my-4 text-[#083765]">Announcements</h1>
        <span className="text-[#083765] text-xs">View all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4 ">
        <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#083765] text-[17px] font-bold">ኖላዊ ሻይ ቤት</h2>
            <span className="text-[#083765] text-xs">05-07-2017ዓ.ም</span>
          </div>
          <p className="text-[12px] text-[#083765] p-2">
            ዘወትር ከሰኞ - እሁድ ምሽት 12፡30 – 02፡30 ሻይ ቡና ይጠጡ!
          </p>
          <div className="flex items-center gap-2 mt-2">
            <IoLocation className="text-[#083765] text-[14px] font-bold" />
            <p className="text-[#083765] text-[14px] ">ቆሎ በር</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#083765] text-[17px] font-bold">ቤተ-ጽዮን</h2>
            <span className="text-[#083765] text-xs">01-07-2017ዓ.ም</span>
          </div>
          <p className="text-[12px] text-[#083765] p-2">
            የቤተ-ጽዮንን አገልግሎት ለማግኘት 0900-00-00-00 ላይ ይደውሉ!!
          </p>
          <div className="flex items-center gap-2 mt-2">
            <IoLocation className="text-[#083765] text-[14px] font-bold" />
            <p className="text-[#083765] text-[14px] ">
              ቅዱስ ገብርኤል ቤተ ክርስቲያን አቅራቢያ
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#083765] text-[17px] font-bold">ኖላዊ ሻይ ቤት</h2>
            <span className="text-[#083765] text-xs">05-07-2017ዓ.ም</span>
          </div>
          <p className="text-[12px] text-[#083765] p-2">
            ዘወትር ከሰኞ - እሁድ ምሽት 12፡30 – 02፡30 ሻይ ቡና ይጠጡ!
          </p>
          <div className="flex items-center gap-2 mt-2">
            <IoLocation className="text-[#083765] text-[14px] font-bold" />
            <p className="text-[#083765] text-[14px] ">ቆሎ በር</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
