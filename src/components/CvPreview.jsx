export function CvPreview({ generalInfo, education, experience }) {

    return (
        <div className="space-y-8">
            <section className="rounded-lg border p-5">
                <h2 className="mb-4 text-2xl font-bold">General Information</h2>
                <p>
                    <span className="font-semibold">Name:</span> {' '}
                    {generalInfo.name}
                </p>

                <p>
                    <span className="font-semibold">Email:</span> {' '}
                    {generalInfo.email}
                </p>

                <p>
                    <span className="font-semibold">Phone:</span> {' '}
                    {generalInfo.phone}
                </p>
            </section>

            <section className="rounded-lg border p-5">
                <h2 className="mb-4 text-2xl font-bold">Education</h2>
                <p>
                    <span className="font-semibold">School:</span> {' '}
                    {education.school}
                </p>

                <p>
                    <span className="font-semibold">Study:</span> {' '}
                    {education.study}
                </p>

                <p>
                    <span className="font-semibold">Date:</span> {' '}
                    {education.date}
                </p>
            </section>

            <section className="rounded-lg border p-5">
                <h2 className="mb-4 text-2xl font-bold">Experience</h2>
                <p>
                    <span className="font-semibold">Company:</span> {' '}
                    {experience.company}
                </p>

                <p>
                    <span className="font-semibold">Position:</span> {' '}
                    {experience.position}
                </p>

                <p>
                    <span className="font-semibold">Responsibilities:</span> {' '}
                    {experience.responsibilities}
                </p>

                <p>
                    <span className="font-semibold">From:</span> {' '}
                    {experience.from}
                </p>

                 <p>
                    <span className="font-semibold">Until:</span> {' '}
                    {experience.until}
                </p>
            </section>
        </div>
    )
}