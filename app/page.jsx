import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Sidebar from "@/components/Sidebar";
import { MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="bg-zinc-100 w-full px-2 md:px-3">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="">
            <div className="md:hidden">
              <Header />
            </div>
            <div className="justify-end py-6 items-center hidden md:flex">
              <Link href="#" className="flex font-semibold text-sm">
                <MessageCircleQuestion className="mr-2" />
                <span>Help & Feedback</span>
              </Link>
            </div>
          </div>
          <SectionTitle />
        </div>
      </div>
    </main>
  );
}
