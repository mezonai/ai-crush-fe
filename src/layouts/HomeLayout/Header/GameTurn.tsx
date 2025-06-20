import StatButton from './StatButton';
import GameTurnIcon from '@assets/icons/game_turn_icon.svg';

interface GameTurnProps {
  gameTurnCount: number;
}

const GameTurns: React.FC<GameTurnProps> = ({ gameTurnCount }) => {
  return (
    <StatButton
      iconSrc={GameTurnIcon}
      value={gameTurnCount}
      className="backdrop-blur-[24px] shadow-[0_4px_12px_0_#FFB6DAAD]"
    />
  );
};

export default GameTurns;
