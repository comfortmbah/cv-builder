import PropTypes from 'prop-types'

const FormInput = ({ type = 'text', name, placeholder, value, onChange, error }) => {
  return (
    <div className='space-y-1'>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition-all duration-200
          ${error ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : value.trim() 
            ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          }`}
      /> 

      {error && (
        <p className='text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>   
  )
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormInput