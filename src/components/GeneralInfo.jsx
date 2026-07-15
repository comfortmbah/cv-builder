import PropTypes from "prop-types"
import FormInput from "./FormInput"

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {

    function handleChange(e) {
        setGeneralInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">General Information</h2>

            <div className="flex flex-col gap-4">
                <FormInput  
                  name="name"
                  placeholder="Full Name"
                  value={generalInfo.name}
                  onChange={handleChange}
                />

                <FormInput 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={generalInfo.email}
                  onChange={handleChange}
                />

                <FormInput 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  value={generalInfo.phone}
                  onChange={handleChange}
                />
            </div>
        </section>
    )
};

GeneralInfo.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    setGeneralInfo: PropTypes.func.isRequired,
};