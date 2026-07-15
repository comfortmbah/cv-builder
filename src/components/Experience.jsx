import PropTypes from "prop-types";
import TextareaInput from "./TextareaInput";
import FormInput from "./FormInput";
import SectionTitle from "./SectionTitle";


export default function Experience({ experience, setExperience }) {

    function handleChange(e) {
        const {name, value} = e.target;

        setExperience((prev) => ({...prev, [name]: value }))
    }


    return(
        <section  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <SectionTitle 
              title={'Practical Experience'}
            />
            <div className="flex flex-col gap-4">

                <FormInput  
                  name="company"
                  value={experience.company}
                  placeholder="Company Name"
                  onChange={handleChange}
                />

                <FormInput 
                  name="position"
                  value={experience.position}
                  placeholder="Position Title"
                  onChange={handleChange}
                />

                <TextareaInput 
                  name="responsibilities"
                  value={experience.responsibilities}
                  placeholder="Main Responsibilities"
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-4">

                    <FormInput 
                      type="date" 
                      name="from"
                      value={experience.from}
                      onChange={handleChange}
                    />

                    <FormInput 
                      type="date" 
                      name="until"
                      value={experience.until}
                      onChange={handleChange}
                    />
                </div>   
            </div>
        </section>
    )
}

Experience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    until: PropTypes.string.isRequired,
  }).isRequired,
  setExperience: PropTypes.func.isRequired,
};