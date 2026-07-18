import Button from "./components/Button"
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
  
  function handleSubmit(e) {
    e.preventDefault();
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
  
  return (
    <div className=" min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <Header />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            {!isSubmitted ? (
              <form action="#" onSubmit={handleSubmit} className="space-y-8">
                <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />

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
              <Button 
                text={'Edit CV'}
                onClick={handleEdit}
                variant="secondary"
              />
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