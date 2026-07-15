import PropTypes from "prop-types";
import FormInput from './FormInput';
import SectionTitle from "./SectionTitle";


export default function Education({ education, setEducation }) {

    function handleChange(e) {
        setEducation((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <SectionTitle 
              title={'Educational Experience'}
            />

            <div className="flex flex-col gap-4">

                <FormInput 
                  name="school"
                  value={education.school}
                  placeholder="School Name"
                  onChange={handleChange}
                />

                <FormInput
                  name="study"
                  placeholder="Title of Study"
                  value={education.study}
                  onChange={handleChange}
                />

                <FormInput 
                  type="date" 
                  name="date"
                  value={education.date}
                  onChange={handleChange}
                />
            </div>
        </section>
    )
}

Education.propTypes = {
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        study: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
    setEducation: PropTypes.func.isRequired,
};