import Link from "next/link";

function Hero() {
  return (
    <section className="masthead">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col items-center text-white">
          <h1 className="uppercase font-bold text-4xl">
            WE HAVE AWESOME THINGS
          </h1>
          <p className="mt-2">Let's make the web beautiful together</p>
          <Link
            href=""
            className="border py-1 px-2 mt-16 hover:bg-white hover:text-black transition">
            View More!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
