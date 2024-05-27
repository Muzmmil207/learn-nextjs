"use client";
import { logo } from "@/assets";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handelMenu = (e) => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="bg-grayish py-4 fixed top-0 left-0 ring-0 w-full">
      <nav className="header-container">
        <div className="flex justify-between items-center">
          <div className="">
            <Image src={logo} width={150} height={68} alt="logo" />
          </div>
          <ul className="justify-between items-center max-w-[550px] w-full hidden lg:flex ">
            <li>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#about-section">
                About
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#services-section">
                Services
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#portfolio-section">
                Works
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#team-section">
                Team
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#prices-section">
                Prices
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={handelMenu}
            className="flex flex-col gap-1 justify-between lg:hidden">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul
          className={`flex-col justify-between ${
            openMenu ? "flex h-64" : "hidden"
          } bg-gray-500 w-full p-5 mt-5 border-t transition lg:hidden`}>
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#about-section">
              About
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#services-section">
              Services
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#portfolio-section">
              Works
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#team-section">
              Team
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#prices-section">
              Prices
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#contact-section">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
// absolute -bottom-64 left-0
export default Navbar;
