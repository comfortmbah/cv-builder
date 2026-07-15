import PropTypes from 'prop-types'

const FormInput = ({ type = 'text', name, placeholder, value, onChange }) => {
  return (
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full rounded-xl border border-b-gray-300 bg-white px-4 py-3 text-gray-700
          placeholder:text-gray-400 shadow-sm transition-all duration-200 outline-none focus:border-blue-500
          focus:ring-2 focus:ring-blue-200'
      />  
  )
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput