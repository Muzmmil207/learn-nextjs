function Services() {
  return (
    <div className="" id="services">
      <div className="flex flex-col items-center justify-center h-full py-16">
        <h1 className="text-[38px] text-gray-900 font-bold">At Your Service</h1>
        <span className="bg-orangeRed h-1 w-16 my-7"></span>
        <div className="flex gap-3 justify-center flex-wrap mt-9">
          <div className="max-w-[300px] w-full text-center">
            <h3 className="text-gray-900 text-[24px] font-semibold leading-8">
              Sturdy Themes
            </h3>
            <p className="text-gray-600">
              Our themes are updated regularly to keep them bug free!
            </p>
          </div>
          <div className="max-w-[300px] w-full text-center">
            <h3 className="text-gray-900 text-[24px] font-semibold leading-8">
              Up to Date
            </h3>
            <p className="text-gray-600">
              All dependencies are kept current to keep things fresh.
            </p>
          </div>
          <div className="max-w-[300px] w-full text-center">
            <h3 className="text-gray-900 text-[24px] font-semibold leading-8">
              Ready to Publish
            </h3>
            <p className="text-gray-600">
              You can use this design as is, or you can make changes!
            </p>
          </div>
          <div className="max-w-[300px] w-full text-center">
            <h3 className="text-gray-900 text-[24px] font-semibold leading-8">
              Made with Love
            </h3>
            <p className="text-gray-600">
              Is it really open source if it's not made with love?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
