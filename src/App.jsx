import { useState } from "react";


function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', study: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', from: '', until: ''});
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-800">CV Builder</h1>
    </div>
  );
}

export default App;