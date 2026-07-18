import Button from "./components/Button"
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [generalInfo, setGeneralInfo] = useLocalStorage(
    "generalInfo", { name: '', email: '', phone: '', }
  );

  const [education, setEducation] = useLocalStorage(
    "education", { school: '', study: '', date: '', }
  );

  const [experience, setExperience] = useLocalStorage(
    "experience", { company: '', position: '', responsibilities: '', from: '', until: '' }
  );  

  const [isSubmitted, setIsSubmitted] = useLocalStorage("submitted", false);

  const [errors, setErrors] = useState({});
  
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!generalInfo.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!generalInfo.email.trim()) {
      newErrors.email = "Email is required."
    }

    if (!generalInfo.phone.trim()) {
      newErrors.phone = "Phone number is required."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  }

  function handleEdit() {
    setIsSubmitted(false);
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure you want to clear your CV?");
    if (!confirmed) return;

    setGeneralInfo({ name: '', email: '', phone: '', });
    setEducation({ school: '', study: '', date: '', });
    setExperience({ company: '', position: '', responsibilities: '', from: '', until: '' });

    setIsSubmitted(false);
  }

  function handlePrint() {
    window.print();
  }
  
  return (
    <div className=" min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <Header />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            {!isSubmitted ? (
              <form action="#" onSubmit={handleSubmit} className="space-y-8">
                <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} errors={errors} setErrors={setErrors}/>

                <Education education={education} setEducation={setEducation} />

                <Experience experience={experience} setExperience={setExperience} />

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button 
                    type="submit"
                    text={'Submit CV'}
                  />

                  <Button 
                    text={'Clear CV'}
                    onClick={handleClear}
                    variant="danger"
                  />
                </div>
              </form>
            ) : (
              <div className="mt-6 flex flex-col gap-4 sm:grow print:hidden">
                <Button 
                  text={'Edit CV'}
                  onClick={handleEdit}
                  variant="secondary"
                />

                <Button 
                  text={'Print CV'}
                  onClick={handlePrint}
                />
              </div>
            )}
          </div>

          <CvPreview 
            generalInfo={generalInfo}
            education={education}
            experience={experience}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;