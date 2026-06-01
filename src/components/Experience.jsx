export default function Experience({ experience, setExperience }) {

    function handleChange(e) {
        const {name, value} = e.target;

        setExperience((prev) => ({...prev, [name]: value }))
    }


    return(
        <section  className="rounded-lg border p-5">
            <h2 className="mb-4 text-2xl font-semibold">Practical Experience</h2>
            <div className="flex flex-col gap-4 md:flex-row">

                <input 
                  type="text" 
                  name="company"
                  value={experience.company}
                  placeholder="Company Name"
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input 
                  type="text" 
                  name="position"
                  value={experience.position}
                  placeholder="Position Title"
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <textarea  
                  name="responsibilities"
                  value={experience.responsibilities}
                  placeholder="Main Responsibilities"
                  rows={'4'}
                  onChange={handleChange}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <div className="flex flex-col gap-4 md:flex-row">

                    <input 
                      type="date" 
                      name="from"
                      value={experience.from}
                      onChange={handleChange}
                      className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                    />

                    <input 
                      type="date" 
                      name="until"
                      value={experience.until}
                      onChange={handleChange}
                      className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>   
            </div>
        </section>
    )
}