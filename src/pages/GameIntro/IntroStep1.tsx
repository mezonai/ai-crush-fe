import GameModeCard from "./components/gameMode/GameModeCard.tsx";

export default function IntroStep1() {
  return (
    <div className="">
      <h3 className="text-center text-xl font-semibold mb-8 mt-2">Chế độ chơi</h3>

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