export function Education({ education, setEducation }) {

    function handleChange(e) {
        setEducation((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    return (
        <section className="rounded-lg border p-5">
            <h2 className="mb-4 text-2xl font-semibold">Educational Experience</h2>
            <div className="flex flex-col gap-4 md:flex-row">

                <input 
                  type="text" 
                  name="school"
                  value={education.school}
                  placeholder="School Name"
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input 
                  type="text"
                  name="study"
                  placeholder="Title of Study"
                  value={education.study}
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input 
                  type="date" 
                  name="date"
                  value={education.date}
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />
            </div>
        </section>
    )
}