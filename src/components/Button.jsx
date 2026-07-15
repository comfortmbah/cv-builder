import PropTypes from "prop-types"

const Button = ({ type = 'button', text, onClick, variant = 'primary', }) => {
  
  const baseStyles = "w-full rounded-xl px-4 py-3 font-medium text-white transition duration-200 focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf([
        "primary", "secondary", "danger",
    ]),
};

export default Button