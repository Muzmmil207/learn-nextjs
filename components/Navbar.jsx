import { navLinks } from "@/constants";
import { Heart, UserRoundX } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-full py-6">
      <div className="">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className="flex items-center text-lg capitalize w-full rounded-md p-2 transition hover:bg-zinc-100">
            <link.icon className="mr-2" size={25} />
            <span>{link.name}</span>
            {link.new && (
              <span className="text-white bg-purple-500 py-[1px] px-1 rounded-full ml-2 text-base">
                NEW
              </span>
            )}
          </Link>
        ))}
      </div>
      <hr />
      <div className="">
        <Link
          href=""
          className="flex items-center text-lg capitalize w-full rounded-md p-2 transition hover:bg-zinc-100">
          <Heart className="mr-2" size={25} />
          <span>Referrals</span>
        </Link>
        <Link
          href=""
          className="flex items-center text-lg capitalize w-full rounded-md p-2 transition hover:bg-zinc-100">
          <UserRoundX className="mr-2" size={25} />
          <span>community</span>
          <span className="text-white bg-purple-500 py-[1px] px-1 rounded-full ml-2 text-base">
            NEW
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
