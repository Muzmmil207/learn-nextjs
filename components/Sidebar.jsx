import Header from "./Header";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <nav className="max-w-[370px] w-full shadow-zinc-100 py-5 px-4 flex flex-col">
      <Header />
      <Navbar />
    </nav>
  );
}

export default Sidebar;
