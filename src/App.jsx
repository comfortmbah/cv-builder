import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";


function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', study: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' });
  
  return (
    <div className=" min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-100">CV Application</h1>

        {}
      </div>
    </div>
  );
}

export default App;