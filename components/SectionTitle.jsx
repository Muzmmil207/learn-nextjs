function SectionTitle({ title, description, textColor }) {
  return (
    <div className="flex justify-center items-center w-full mb-14">
      <div className="flex flex-col items-center">
        <h2
          className={`${
            textColor ? textColor : "text-grayish"
          } text-2xl font-bold uppercase`}>
          {title}
        </h2>
        <div className="devider"></div>
        <p className={`${textColor ? textColor : "text-grayish"} `}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionTitle;
