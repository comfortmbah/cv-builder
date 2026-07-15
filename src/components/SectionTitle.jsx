import PropTypes from "prop-types"


const SectionTitle = ({ title }) => {
  return (
    <div className="mb-6 border-b border-gray-200 pb-3">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800">
            {title}
        </h2>
    </div>
  )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle