const CustomButton = ({ title, containerStyles, url }) => {
  return (
    <a href={url} className={`custom-btn ${containerStyles}`}>
      <span className={`flex-1`}>{title}</span>
    </a>
  );
};

export default CustomButton;
