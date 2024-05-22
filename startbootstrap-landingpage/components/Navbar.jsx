import { headerLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="absolute w-full">
      <nav className="section flex justify-between py-5 md:flex-row flex-col">
        <div className="">
          <a href="/" className="font-bold text-2xl text-gray-300 hover:text-gray-200">
            Start Bootstrap
          </a>
        </div>

        <ul className="flex gap-8">
          {headerLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url} className="font-bold text-xl text-gray-300 hover:text-gray-200">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
