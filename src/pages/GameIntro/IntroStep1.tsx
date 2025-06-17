import GameModeCard from './components/gameMode/GameModeCard.tsx';
import SoloIcon from '@assets/icons/solo_icon.png';
import BettingIcon from '@assets/icons/betting_icon.png';

export default function IntroStep1() {
  return (
    <div
      className="box-border flex flex-col items-center px-4 py-8 gap-6 rounded-[12px] self-stretch flex-grow
  ">
      <div className="w-[311px] h-[30px] text-[20px] leading-[30px] font-semibold text-[#303030] text-left mb-0">
        Chế độ chơi
      </div>

      <div className="w-[311px] h-[24px] text-[16px] leading-6 font-normal text-[#535862] text-left mb-0">
        Người chơi sẽ chọn chế độ chơi
      </div>

      <div className="flex flex-col items-center gap-6 w-[311px] h-[472px] p-0">
        <GameModeCard imageSrc={SoloIcon} title="Solo" description="Tán solo - Không ai cản đường!" />
        <GameModeCard
          imageSrc={BettingIcon}
          title="Betting"
          description="Cùng bạn bè cá cược xem ai tán được crush trước!"
        />
      </div>
    </div>
  );
}
