import BaseLayout from "../../layouts/BaseLayout.tsx";
import StepIndicator from "../../components/ui/StepIndicator.tsx";
import {Button} from "../../components/ui/button.tsx";
import logo from '../../assets/logos/ai_crush_logo.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';

import IntroStep1 from "./IntroStep1";
import IntroStep2 from "./IntroStep2";
import IntroStep3 from "./IntroStep3";
import {useState} from "react";


const steps = [
    <IntroStep1 key={1} />,
    <IntroStep2 key={2} />,
    <IntroStep3 key={3} />,
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
            <img src={logo} alt="Logo" className="w-40 mb-4" />
            <h2 className="text-xl font-mono text-gray-800 mb-2">Giới thiệu luật chơi</h2>
            <StepIndicator current={stepIndex + 1} total={steps.length}/>

            <div className="bg-white bg-opacity-30 rounded-3xl shadow-lg p-6 mt-4 w-full max-w-[90%]">
                {steps[stepIndex]}

                <div className="mt-14 mb-4 flex justify-center gap-4">
                    <Button onClick={handleNext} className={'bg-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition'}>
                        {stepIndex === steps.length - 1 ? "Bắt đầu chơi" : "Tiếp tục"}<img src={arrowRight} alt="Logo" className="" />
                    </Button>
                </div>
            </div>
        </BaseLayout>
    );
}
