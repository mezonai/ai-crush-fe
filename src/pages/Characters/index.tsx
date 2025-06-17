import BaseLayout from '../../layouts/BaseLayout.tsx';
import arrowLeft from '@/assets/icons/arrow_left.svg';
import { Button } from '@components/ui/button.tsx';
import char_01 from '@assets/images/char_1.jpg';
import char_02 from '@assets/images/char_2.jpg';
import char_03 from '@assets/images/char_3.jpg';
import CharacterCard from '@pages/GameIntro/components/characterDetail/CharacterCard.tsx';
import { useNavigate } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: 'Linh',
    image: char_01,
    level: 'easy',
    affection: 100,
    status: 'available',
    conditionPlay: true,
  },
  {
    id: 2,
    name: 'Duyên',
    image: char_02,
    level: 'medium',
    affection: 30,
    status: 'chatting',
    conditionPlay: true,
  },
  {
    id: 3,
    name: 'My',
    image: char_03,
    level: 'hard',
    affection: 20,
    status: 'locked',
    conditionPlay: true,
  },
  {
    id: 4,
    name: 'Lam',
    image: char_01,
    level: 'easy',
    affection: 40,
    status: 'chatting',
    conditionPlay: true,
  },
  {
    id: 5,
    name: 'Minh',
    image: char_02,
    level: 'medium',
    affection: 20,
    status: 'locked',
    conditionPlay: true,
  },
  {
    id: 6,
    name: 'Tuyền',
    image: char_03,
    level: 'hard',
    affection: 46,
    status: 'chatting',
    conditionPlay: true,
  },
  {
    id: 7,
    name: 'Hân',
    image: char_02,
    level: 'easy',
    affection: 10,
    status: 'chatting',
    conditionPlay: true,
  },
];

export default function Characters() {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div className="flex flex-col h-screen pt-4">
        <div className="w-full flex items-center justify-between mb-4">
          <Button
            onClick={() => {
              navigate(`/home`);
            }}
            className="bg-white/70 text-white px-4 py-6 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition duration-300">
            <img src={arrowLeft} alt="Back" />
          </Button>
          <div className="flex-1 flex justify-center">
            <div className="text-2xl font-mono text-[#8C0F3E] font-bold">Chọn nhân vật</div>
          </div>
          <div className="w-[44px]" />
        </div>
        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="flex flex-col gap-4">
            {characters.map((char, idx) => (
              <CharacterCard key={idx} {...char} />
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
