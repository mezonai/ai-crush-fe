import StatButton from './StatButton';
import TokenIcon from '@assets/icons/bonus_icon.svg';

interface UserTokensProp {
  tokenCount: number;
}

const UserTokens: React.FC<UserTokensProp> = ({ tokenCount }) => {
  return <StatButton iconSrc={TokenIcon} value={tokenCount} />;
};

export default UserTokens;
