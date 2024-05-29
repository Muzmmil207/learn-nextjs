import Header from "./Header";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <nav className="max-w-[370px] w-full shadow-zinc-100 py-5 px-4 hidden flex-col xl:flex">
      <Header />
      <Navbar />
    </nav>
  );
}

export default Sidebar;
