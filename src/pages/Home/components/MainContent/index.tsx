import GameModeCard from '@/pages/GameIntro/components/gameMode/GameModeCard';
import SoloIcon from '@assets/icons/solo_icon.png';
import BettingIcon from '@assets/icons/betting_icon.png';
import arrowRight from '@/assets/icons/arrow_right.svg';
import ButtonPrimary from '@/components/MainButton';
import { useState } from 'react';
import { GAME_MODE, type GameMode } from '@/consts/common';
import { useNavigate } from 'react-router-dom';

const MainContent: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(null);
  const navigate = useNavigate();

  const handleSelectGameMode = (mode: GameMode) => {
    setSelectedMode(mode);
  };

  const handleContinue = () => {
    if (!selectedMode) return;
    navigate(`/list-characters`);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="h-8 text-center font-semibold text-[24px] leading-8 text-[#8C0F3E]">Chọn chế độ chơi</h2>

      <GameModeCard
        imageSrc={SoloIcon}
        title="Solo"
        description="Tán solo - Không ai cản đường!"
        selected={selectedMode === GAME_MODE.SOLO}
        onClick={() => handleSelectGameMode(GAME_MODE.SOLO)}
      />
      <GameModeCard
        imageSrc={BettingIcon}
        title="Betting"
        description="Cùng bạn bè cá cược xem ai tán được crush trước!"
        selected={selectedMode === GAME_MODE.BETTING}
        onClick={() => handleSelectGameMode(GAME_MODE.BETTING)}
      />
      <ButtonPrimary iconRight={arrowRight} disabled={!selectedMode} onClick={handleContinue}>
        Tiếp tục
      </ButtonPrimary>
    </div>
  );
};

export default MainContent;
