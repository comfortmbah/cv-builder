import PropTypes from "prop-types"

const TextareaInput = ({ name, placeholder, value, onChange, rows = 5, }) => {
  return (
    <textarea 
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700
        placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500
        focus:ring-2 focus:ring-blue-200"
    />
  )
}

TextareaInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
};

export default TextareaInput;