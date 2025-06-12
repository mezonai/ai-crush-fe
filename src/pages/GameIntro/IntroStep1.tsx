import GameModeCard from "./components/gameMode/GameModeCard.tsx";

export default function IntroStep1() {
  return (
    <div className="">
      <div className="text-left text-xl font-bold mb-4 mt-2">Chế độ chơi</div>
      <div className="text-left lg font-semibold mb-8 text-gray-600">người chơi sẽ chọn chế độ chơi</div>

      <div className="space-y-8">
        <GameModeCard
          icon={<span>👤</span>}
          title="Solo"
          description="Tán tình nhân vật theo sở thích. Cố gắng chinh phục trái tim họ!"
        />
        <GameModeCard
          icon={<span>🔥</span>}
          title="Betting"
          description="Cùng bạn bè cá cược xem ai tán được crush trước!"
        />
      </div>
    </div>
  );
}