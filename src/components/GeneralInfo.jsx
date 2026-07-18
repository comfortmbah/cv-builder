import PropTypes from "prop-types"
import FormInput from "./FormInput"
import SectionTitle from "./SectionTitle"

export default function GeneralInfo({ generalInfo, setGeneralInfo, errors }) {

    function handleChange(e) {
        setGeneralInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <SectionTitle 
              title={'General Information'}
            />

            <div className="flex flex-col gap-4">
                <FormInput  
                  name="name"
                  placeholder="Full Name"
                  value={generalInfo.name}
                  onChange={handleChange}
                  error = {errors.name}
                />

                <FormInput 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={generalInfo.email}
                  onChange={handleChange}
                  error ={errors.email}
                />

                <FormInput 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  value={generalInfo.phone}
                  onChange={handleChange}
                  error ={errors.phone}
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