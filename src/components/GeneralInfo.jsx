export function GeneralInfo({ generalInfo, setGeneralInfo }) {
    return (
        <section className="rounded-lg border p-5">
            <h2 className="mb-4 text-2xl font-semibold">General Information</h2>
            <div className="flex flex-col gap-4 md:flex-row">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                  value={}
                  onChange={}
                />

                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                  value={}
                  onChange={}
                />

                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
                  value={}
                  onChange={}
                />
            </div>
        </section>
    )
}