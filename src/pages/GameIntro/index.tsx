import BaseLayout from '../../layouts/BaseLayout.tsx';
import StepIndicator from '@/components/ui/StepIndicator.tsx';
import { Button } from '@components/ui/button.tsx';
import arrowRight from '@/assets/icons/arrow_right.svg';

import IntroStep1 from '@pages/GameIntro/components/steps/IntroStep1.tsx';
import IntroStep2 from '@pages/GameIntro/components/steps/IntroStep2.tsx';
import IntroStep3 from '@pages/GameIntro/components/steps/IntroStep3.tsx';
import IntroStep4 from '@pages/GameIntro/components/steps/IntroStep4.tsx';
import IntroStep5 from '@pages/GameIntro/components/steps/IntroStep5.tsx';
import IntroStep6 from '@pages/GameIntro/components/steps/IntroStep6.tsx';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DEFAULT_STEP = 1;
const ROUTE_PREFIX = '/game-intro';

const stepComponents = [
  <IntroStep1 key={1} />,
  <IntroStep2 key={2} />,
  <IntroStep3 key={3} />,
  <IntroStep4 key={4} />,
  <IntroStep5 key={5} />,
  <IntroStep6 key={6} />,
];

const TOTAL_STEPS = stepComponents.length;

export default function GameIntro() {
  const { step } = useParams();
  const navigate = useNavigate();

  const stepNum = parseInt(step || `${DEFAULT_STEP}`);
  const isValidStep = !isNaN(stepNum) && stepNum >= 1 && stepNum <= TOTAL_STEPS;
  const stepIndex = isValidStep ? stepNum - 1 : 0;

  useEffect(() => {
    if (!isValidStep) {
      navigate(`${ROUTE_PREFIX}/${DEFAULT_STEP}`, { replace: true });
    }
  }, [isValidStep, navigate]);

  const handleNext = () => {
    if (stepIndex < TOTAL_STEPS - 1) {
      navigate(`${ROUTE_PREFIX}/${stepIndex + 2}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <BaseLayout>
      <div className="flex flex-col h-screen">
        <div className="w-full mt-10">
          <div className="text-2xl font-mono text-[#8C0F3E] mb-2 font-bold text-left">Giới thiệu luật chơi</div>
          <StepIndicator current={stepIndex + 1} total={TOTAL_STEPS} />
        </div>

        <div className="flex-grow">
          <div className="bg-white bg-opacity-30 rounded-2xl shadow-lg p-6 mt-4 w-full h-full border-solid border-white border-2">
            {stepComponents[stepIndex]}
          </div>
        </div>

        <div className="mt-10 mb-4 flex justify-center gap-4 w-full">
          <Button
            onClick={handleNext}
            className="bg-[#EA1870] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition w-full">
            {stepIndex === TOTAL_STEPS - 1 ? 'Bắt đầu chơi' : 'Tiếp tục'}
            <img src={arrowRight} alt="arrow" />
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
}
