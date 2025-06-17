import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';
import type { JSX } from 'react';
import HeartSuccess from '@assets/icons/heart_success.svg';
import Chatting from '@assets/icons/chatting.svg';
import Lock from '@assets/icons/lock.svg';

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  level: string;
  affection: number;
  status: string;
  conditionPlay?: boolean;
}

const LEVEL_MAP: Record<CharacterCardProps['level'], { emoji: string }> = {
  easy: { emoji: '💗' },
  medium: { emoji: '💗💗' },
  hard: { emoji: '💗💗💗' },
};

const STATUS_ICON_MAP: Record<CharacterCardProps['status'], { icon: JSX.Element; color: string }> = {
  available: {
    icon: <img src={HeartSuccess} className="w-8 h-8" alt="" />,
    color: 'text-green-500',
  },
  chatting: {
    icon: <img src={Chatting} className="w-8 h-8" alt="" />,
    color: 'text-blue-500',
  },
  locked: {
    icon: <img src={Lock} className="w-8 h-8" alt="" />,
    color: 'text-gray-400',
  },
};

const DEFAULT_GAME_INTRO_STEP = '2';

export default function CharacterCard({
  id,
  image,
  name,
  level,
  affection,
  status,
  conditionPlay,
}: CharacterCardProps) {
  const navigate = useNavigate();
  const safeStatus = STATUS_ICON_MAP[status] ?? STATUS_ICON_MAP['locked'];
  const { icon: statusIcon } = safeStatus;
  const { emoji } = LEVEL_MAP[level];
  const affectionColor = affection === 0 ? 'bg-pink-200' : 'bg-pink-500';

  const handleClick = () => {
    if (conditionPlay) {
      navigate(`/characters/${id}`);
    } else {
      navigate(`/${DEFAULT_GAME_INTRO_STEP}`);
    }
  };

  return (
    <div
      className="bg-white bg-opacity-80 rounded-2xl flex shadow-md cursor-pointer hover:scale-[1.01] transition-transform"
      onClick={handleClick}>
      <img src={image} alt={name} className="w-36 h-36 object-cover rounded-l-xl" />

      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-medium text-[#8C0F3E]">{name}</h4>
          {statusIcon}
        </div>

        <div className="text-sm text-gray-500 text-left">
          <span className="font-medium">Cấp độ:</span>{' '}
          <span className="border border-[#FCCEEE] items-center bg-[#FDF2FA] px-2 py-1 rounded-full text-xs">
            {emoji}
          </span>
        </div>

        <div className="text-sm text-gray-500 text-left">
          <span className="font-medium">Độ thiện cảm</span>
          <div className="flex items-center mt-1">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
              <div className={cn('h-full', affectionColor)} style={{ width: `${affection}%` }} />
            </div>
            <span className={cn('text-xs font-semibold flex items-center gap-1 text-[#414651]')}>{affection}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
