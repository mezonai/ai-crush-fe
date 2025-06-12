import BaseLayout from "../../layouts/BaseLayout.tsx";
import StepIndicator from "../../components/ui/StepIndicator.tsx";
import {Button} from "../../components/ui/button.tsx";
import arrowRight from '../../assets/icons/arrow_right.svg';

import IntroStep1 from "./IntroStep1";
import IntroStep2 from "./IntroStep2";
import IntroStep3 from "./IntroStep3";
import IntroStep4 from "./IntroStep4";
import IntroStep5 from "./IntroStep5";
import IntroStep6 from "./IntroStep6";
import {useState} from "react";


const steps = [
  <IntroStep1 key={1}/>,
  <IntroStep2 key={2}/>,
  <IntroStep3 key={3}/>,
  <IntroStep4 key={4}/>,
  <IntroStep5 key={5}/>,
  <IntroStep6 key={6}/>,
];

export default function GameIntro() {
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      // TODO: navigate to real game page
      console.log("Chuyển đến game chính");
    }
  };

  return (
    <BaseLayout>
      <div className="text-2xl font-mono text-[#8C0F3E] mb-2 font-bold text-left w-[90%]">Giới thiệu luật chơi</div>
      <StepIndicator current={stepIndex + 1} total={steps.length}/>

      <div className="bg-white bg-opacity-30 rounded-3xl shadow-lg p-6 mt-4 w-full max-w-[90%] min-h-[80%]">
        {steps[stepIndex]}
      </div>
      <div className="mt-10 mb-4 flex justify-center gap-4 w-full">
        <Button onClick={handleNext}
                className={'bg-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition w-[90%]'}>
          {stepIndex === steps.length - 1 ? "Bắt đầu chơi" : "Tiếp tục"}<img src={arrowRight} alt="Logo" className=""/>
        </Button>
      </div>
    </BaseLayout>
  );
}
