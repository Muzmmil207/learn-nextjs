import { headerLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="section">
      <nav className="flex justify-between py-5">
        <div className="">
          <a href="/" className="font-bold text-2xl">
            Start Bootstrap
          </a>
        </div>

        <ul className="flex gap-8">
          {headerLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url} className="font-bold text-xl">
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
