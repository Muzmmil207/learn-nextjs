const Footer = () => {
  return (
    <footer className="text-center py-28">
      <div className="flex justify-center gap-4">
        <span className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-rgb  text-white text-3xl font-semibold">
          <i className="icon-social-facebook"></i>
        </span>
        <span className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-rgb  text-white text-3xl font-semibold">
          <i className="icon-social-twitter"></i>
        </span>
        <span className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-rgb  text-white text-3xl font-semibold">
          <i className="icon-social-github"></i>
        </span>
      </div>
      <p className="text-gray-600 mt-16">Copyright © 2023 - Company Name</p>
    </footer>
  );
};

export default Footer;
