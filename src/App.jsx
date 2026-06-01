import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";


function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', study: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit() {
    setIsSubmitted(false);
  }
  
  return (
    <div className=" min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-100">CV Application</h1>

        {!isSubmitted ? (
          <form action="#" onSubmit={handleSubmit} className="space-y-8">
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />

            <Education education={education} setEducation={setEducation} />

            <Experience experience={experience} setExperience={setExperience} />

            <button type="submit" className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800">
              Submit CV
            </button>
          </form>
        ) : (
          <div>
            <CvPreview 
              generalInfo={generalInfo}
              education={education}
              experience={experience}
            />

            <button 
              onClick={handleEdit} 
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700">
              Edit CV
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;