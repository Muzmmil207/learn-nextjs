import { CustomButton } from ".";

function About() {
  return (
    <section className="bg-orangeRed" id="about">
      <div className="flex flex-col items-center justify-center h-full py-16">
        <h1 className="text-[38px] text-white font-bold">
          We've got what you need!
        </h1>
        <span className="bg-white h-1 w-16 my-7"></span>
        <p className="max-w-[800px] w-full text-center text-gray-600 font-normal">
          Start Bootstrap has everything you need to get your new website up and
          running in no time! Choose one of our open source, free to download,
          and easy to use themes! No strings attached!
        </p>

        <CustomButton
          title="get started"
          containerStyles="bg-white text-black my-7"
          url="#services"
        />
      </div>
    </section>
  );
}

export default About;
