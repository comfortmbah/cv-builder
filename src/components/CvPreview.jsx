import PropTypes from "prop-types"
import SectionTitle from "./SectionTitle"

export default function CvPreview({ generalInfo, education, experience }) {

    return (
        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg">

            <section>
                <SectionTitle 
                  title={'General Information'}
                />

                <div className="space-y-3">
                    <p>
                        <span className="font-semibold text-gray-700">
                            Full Name:
                        </span>{" "}
                        {generalInfo.name || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Email:
                        </span>{" "}
                        {generalInfo.email || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Phone:
                        </span>{" "}
                        {generalInfo.phone || "N/A"}
                    </p>
                </div>
            </section>

            <section>
                <SectionTitle 
                  title={'Educational Experience'}
                />

                <div className="space-y-3">
                    <p>
                        <span className="font-semibold text-gray-700">
                            School:
                        </span>{" "}
                        {education.school || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Study:
                        </span>{" "}
                        {education.study || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Date:
                        </span>{" "}
                        {education.date || "N/A"}
                    </p>
                </div>
            </section>

            <section>
                <SectionTitle 
                  title={'Practical Experience'}
                />

                <div className="space-y-3">
                    <p>
                        <span className="font-semibold text-gray-700">
                            Company:
                        </span>{" "}
                        {experience.company || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Position:
                        </span>{" "}
                        {experience.position || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Responsibilities:
                        </span>{" "}
                        {experience.responsibilities || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-700">
                            Duration:
                        </span>{" "}
                        {experience.from || "N/A"} - {" "}
                        {experience.until || "N/A"}
                    </p>
                </div>
            </section>
        </div>
    )
}

CvPreview.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        study: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
    experience: PropTypes.shape({
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        responsibilities: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        until: PropTypes.string.isRequired,
    }).isRequired,
};