import { Bell } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white">
      <div className="font-bold text-2xl md:text-4xl">deel.</div>
      <div className="flex items-center gap-6">
        <div className="bg-zinc-400 cursor-pointer p-[1px] rounded-full">
          <Image
            src="/assets/imgs/p1.jpg"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <div className="cursor-pointer">
          <Bell size={30} fontWeight={"bold"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
