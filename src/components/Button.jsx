const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={`bg-gray-200 w-10 h-10 rounded-md flex justify-center items-center shadow-sm hover:bg-blue-300 active:shadow-lg ${
        name === "+"
          ? "bg-blue-500"
          : name === "-"
          ? "bg-green-500"
          : name === "*"
          ? "bg-pink-500"
          : name === "/"
          ? "bg-orange-500"
          : name === "Enter" || name === "Del"
          ? "bg-gray-500 text-white"
          : "bg-gray-300"
      }`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
