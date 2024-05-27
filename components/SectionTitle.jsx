function SectionTitle({ title, description }) {
  return (
    <div className="flex justify-center items-center w-full mb-14">
      <div className="flex flex-col items-center">
        <h2 className="text-grayish text-2xl font-bold uppercase">{title}</h2>
        <div className="devider"></div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionTitle;
