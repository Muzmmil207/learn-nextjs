"use client";
import { menu, close } from "@/assets";
import { sidebarLinks } from "@/constants";
import { useState } from "react";

const Sidebar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handelMenu = (e) => {
    setMenuIsOpen(!menuIsOpen);
    console.log(menuIsOpen);
  };
  return (
    <>
      <div
        onClick={handelMenu}
        className="fixed right-4 p-2 rounded cursor-pointer z-20 top-2 bg-[#2222228d] hover:bg-[#222]">
        <img
          src={menuIsOpen ? close.src : menu.src}
          className="w-[25px] h-[25px]"
          alt=""
        />
      </div>
      <nav
        className={`fixed ${
          menuIsOpen ? "translate-x-0" : "translate-x-[300px]"
        } right-0 h-[100vh] z-10 bg-primary-rgb w-[300px] transition`}>
        <div className="bg-[#196d86] py-4 px-3">
          <a href="#page-top" className="text-white text-xl">
            Start Bootstrap
          </a>
        </div>
        <ul className="">
          {sidebarLinks.map((link) => (
            <li
              key={link.url}
              className="text-white text-lg hover:bg-[#ffffff53] py-4 px-3">
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
