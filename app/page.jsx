import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { calculatedData } from "@/constants";
import { Download, MessageCircleQuestion } from "lucide-react";
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
          <div className="flex flex-col gap-4 mt-10 my-5">
            <div className="card flex items-center gap-2">
              <p>Your calculated taxes for:</p>
              <Button className="h-7">
                <Download className="mr-2" />
                <span>Download As PDF</span>
              </Button>
            </div>
          </div>
          <div className="my-5 flex flex-wrap justify-between gap-3">
            {calculatedData.map((item) => (
              <div className="card flex-1 min-w-[400px]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="px-3 leading-normal bg-zinc-100 border border-zinc-400 w-fit rounded-full uppercase font-normal">
                      {item.title}
                    </p>
                    <p className="font-semibold mt-2 text-lg">
                      <span className="text-gray-400">$</span>
                      {item.price}
                    </p>
                  </div>
                  {item?.icon && (
                    <div className="w-16 h-16 rounded-full flex justify-center items-center border border-zinc-100">
                      <item.icon className="text-zinc-400" size={35} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
