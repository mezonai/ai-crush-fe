import { cn } from '../../../../lib/utils';
import type { JSX } from 'react';
import HeartSuccess from '../../../../assets/icons/heart_success.svg';
import Chatting from '../../../../assets/icons/chatting.svg';
import Lock from '../../../../assets/icons/lock.svg';
import { Heart } from 'lucide-react';

interface CharacterCardProps {
  image: string;
  name: string;
  level: string;
  affection: number;
  status: string;
}

// 🎯 MAPPING ICON & TEXT
const LEVEL_MAP: Record<CharacterCardProps['level'], { label: string; emoji: string }> = {
  easy: { label: 'Dễ', emoji: '😊' },
  medium: { label: 'Trung bình', emoji: '🤔' },
  hard: { label: 'Khó', emoji: '😵' },
};

const STATUS_ICON_MAP: Record<CharacterCardProps['status'], { icon: JSX.Element; color: string }> = {
  available: {
    icon: <img src={HeartSuccess} className="w-6 h-6" alt={''} />,
    color: 'text-green-500',
  },
  chatting: {
    icon: <img src={Chatting} className="w-6 h-6" alt={''} />,
    color: 'text-blue-500',
  },
  locked: {
    icon: <img src={Lock} className="w-6 h-6" alt={''} />,
    color: 'text-gray-400',
  },
};

export default function CharacterCard({ image, name, level, affection, status }: CharacterCardProps) {
  const safeStatus = STATUS_ICON_MAP[status] ?? STATUS_ICON_MAP['locked'];
  const { icon: statusIcon } = safeStatus;
  const { label: levelLabel, emoji } = LEVEL_MAP[level];
  const affectionColor = affection === 0 ? 'bg-pink-200' : 'bg-pink-500';
  const isLocked = status === 'locked';

  return (
    <div className="bg-white bg-opacity-80 rounded-2xl flex p-4 shadow-md">
      <img src={image} alt={name} className="w-28 h-36 object-cover rounded-xl" />

      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-medium text-[#8C0F3E]">{name}</h4>
          {statusIcon}
        </div>

        <div className="text-sm text-gray-700 mt-2 text-left">
          <span className="font-medium">Cấp độ:</span>{' '}
          <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">
            {emoji} {levelLabel}
          </span>
        </div>

        <div className="mt-2 text-sm text-gray-700 text-left">
          <span className="font-medium">Độ thiện cảm</span>
          <div className="flex items-center mt-1">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
              <div className={cn('h-full', affectionColor)} style={{ width: `${affection}%` }} />
            </div>
            <span
              className={cn(
                'text-xs font-semibold flex items-center gap-1',
                isLocked ? 'text-gray-400' : 'text-pink-600',
              )}>
              <Heart className={cn('w-4 h-4', isLocked && 'text-gray-400')} />
              {affection}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
