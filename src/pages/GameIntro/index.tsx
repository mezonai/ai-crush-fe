import BaseLayout from '../../layouts/BaseLayout.tsx';
import StepIndicator from '@/components/ui/StepIndicator.tsx';
import { Button } from '@components/ui/button.tsx';
import arrowRight from '@/assets/icons/arrow_right.svg';

import IntroStep1 from './IntroStep1';
import IntroStep2 from './IntroStep2';
import IntroStep3 from './IntroStep3';
import IntroStep4 from './IntroStep4';
import IntroStep5 from './IntroStep5';
import IntroStep6 from './IntroStep6';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const steps = [
  <IntroStep1 key={1} />,
  <IntroStep2 key={2} />,
  <IntroStep3 key={3} />,
  <IntroStep4 key={4} />,
  <IntroStep5 key={5} />,
  <IntroStep6 key={6} />,
];

export default function GameIntro() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      navigate('/home');
      console.log('Chuyển đến game chính');
    }
  };

  return (
    <BaseLayout>
      <div className="flex flex-col h-screen">
        <div className={'w-full mt-10'}>
          <div className="text-2xl font-mono text-[#8C0F3E] mb-2 font-bold text-left">Giới thiệu luật chơi</div>
          <StepIndicator current={stepIndex + 1} total={steps.length} />
        </div>

        <div className="flex-grow">
          <div className="bg-white bg-opacity-30 rounded-2xl shadow-lg p-6 mt-4 w-full h-full border border-solid border-white border-2">
            {steps[stepIndex]}
          </div>
        </div>

        <div className="mt-10 mb-4 flex justify-center gap-4 w-full">
          <Button
            onClick={handleNext}
            className={
              'bg-[#EA1870] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition w-full'
            }>
            {stepIndex === steps.length - 1 ? 'Bắt đầu chơi' : 'Tiếp tục'}
            <img src={arrowRight} alt="Logo" className="" />
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
}
