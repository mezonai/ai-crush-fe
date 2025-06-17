import Actions from './Actions';
import Profile from './Profile';

interface HeaderProps {
  avatarSrc: string;
  userName: string;
  gameTurnCount: number;
  tokenCount: number;
}
const Header: React.FC<HeaderProps> = ({ avatarSrc, userName, gameTurnCount, tokenCount }) => (
  <header className="flex flex-row items-center gap-3 rounded-[12px] self-stretch py-2">
    <Profile avatarSrc={avatarSrc} userName={userName} />
    <Actions gameTurnCount={gameTurnCount} tokenCount={tokenCount} />
  </header>
);

export default Header;
