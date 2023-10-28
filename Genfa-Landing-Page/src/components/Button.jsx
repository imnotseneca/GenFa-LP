/* eslint-disable react/prop-types */

const Button = ({ width, type, styles, text, onClick, icon }) => {
  return (
    <button
      type={type}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] w-${width} flex row justify-center items-center gap-2`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
