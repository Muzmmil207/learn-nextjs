import { CustomButton } from ".";

function About() {
  return (
    <section className="px-4 py-28 max-w-[1100px] w-full m-auto" id="about">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[44px] text-center text-gray-900 font-bold leading-tight">
          Stylish Portfolio is the perfect theme for your next project!
        </h1>
        <p className="text-center text-gray-900 font-normal leading-tight text-lg mt-4">
          Stylish Portfolio is the perfect theme for your next project! This
          theme features a flexible, UX friendly sidebar menu and stock photos
          from our friends at
          <a href="#" className="text-blue-400">
            Unsplash
          </a>
          !
        </p>

        <CustomButton
          title="what we offer"
          containerStyles="bg-gray-800 text-white my-7"
          url="#services"
        />
      </div>
    </section>
  );
}

export default About;
