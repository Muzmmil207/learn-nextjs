import { CustomButton } from ".";

const Hero = () => {
  return (
    <div className="masthead max-h-[100vh] h-screen">
      <div className="h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="md:text-[72px] text-[48px] text-white font-bold">
            Your Favorite Place for <br />
            Free Bootstrap Themes
          </h1>
          <span className="bg-orangeRed h-1 w-16 my-7"></span>
          <p className="max-w-[800px] w-full text-center text-white font-normal">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
          <CustomButton title="find out more" containerStyles="bg-orangeRed my-7" url="#about" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
