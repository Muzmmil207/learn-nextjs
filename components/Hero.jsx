import { CustomButton } from ".";

const Hero = () => {
  return (
    <div className="masthead max-h-[100vh] h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="md:text-[124px] text-[48px] text-gray-900         font-bold">
          Stylish Portfolio
        </h1>
        <p className="text-gray-900 text-center text-4xl  italic font-semibold">
          A Free Bootstrap Theme by Start Bootstrap
        </p>
        <CustomButton
          title="find out more"
          containerStyles="bg-primary-rgb text-white my-7"
          url="#about"
        />
      </div>
    </div>
  );
};

export default Hero;
