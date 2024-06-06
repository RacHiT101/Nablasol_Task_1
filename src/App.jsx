import { useState } from 'react';
import FormPart2 from './components/FormPart2'
import FormPart3 from './components/FormPart3'
import FormPart4 from './components/FormPart4'
import Home from './pages/Home'
// import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  const goNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const goBack = () => setCurrentStep((prevStep) => prevStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Home goNext={goNext} />;
      case 1:
        return <FormPart2 goBack={goBack} goNext={goNext} />;
      case 2:
        return <FormPart3 goBack={goBack} goNext={goNext} />;
      case 3:
        return <FormPart4 goBack={goBack} />;
      default:
        return <Home goNext={goNext} />;
    }
  };

  return (
    <>
      {/* <Home /> */}
      {/* <FormPart2 /> */}
      {/* <FormPart3 /> */}
      {/* <FormPart4 /> */}
      {renderStep()}
    </>
  )
}

export default App
