import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="bg-zinc-100 w-full xl:px-3">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="">
            <div className="xl:hidden">
              <Header />
            </div>
            <div className="justify-end py-6 items-center hidden xl:flex">
              <Link href="#" className="flex">
                <MessageCircleQuestion className="mr-2" />
                <span>Help & Feedback</span>
              </Link>
            </div>
          </div>
          <div className="card">sdfsfd</div>
        </div>
      </div>
    </main>
  );
}
