export function Experience({ experience, setExperience }) {
    return(
        <section  className="rounded-lg border p-5">
            <h2 className="mb-4 text-2xl font-semibold">Practical Experience</h2>
            <div className="flex flex-col gap-4 md:flex-row">

                <input 
                  type="text" 
                  name="company"
                  value={experience.company}
                  placeholder="Company Name"
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <input 
                  type="text" 
                  name="position"
                  value={experience.position}
                  placeholder="Position Title"
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <textarea  
                  name="responsibilities"
                  value={experience.responsibilities}
                  placeholder="Main Responsibilities"
                  rows={'4'}
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                />

                <div className="flex flex-col gap-4 md:flex-row">
                    
                    <input 
                      type="date" 
                      name="from"
                      value={experience.from}
                      className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                    />

                    <input 
                      type="date" 
                      name="until"
                      value={experience.until}
                      className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>   
            </div>
        </section>
    )
}