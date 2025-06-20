import GameTurns from './GameTurn';
import UserTokens from './UserTokens';

interface ActionsProps {
  gameTurnCount: number;
  tokenCount: number;
}
const Actions: React.FC<ActionsProps> = ({ gameTurnCount, tokenCount }) => (
  <div className="flex flex-row justify-end items-center gap-2 flex-1">
    <GameTurns gameTurnCount={gameTurnCount} />
    <UserTokens tokenCount={tokenCount} />
  </div>
);

export default Actions;
