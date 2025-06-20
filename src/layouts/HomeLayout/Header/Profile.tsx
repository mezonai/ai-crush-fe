import UserAvatar from './UserAvatar';
import UserName from './UserName';

interface ProfileProps {
  avatarSrc: string;
  userName: string;
}
const Profile: React.FC<ProfileProps> = ({ avatarSrc, userName }) => (
  <div className="flex flex-row items-center gap-3 rounded-[8px] flex-1">
    <UserAvatar src={avatarSrc} alt={userName} />
    <div className="flex flex-col items-start gap-2 h-8 flex-1">
      <UserName name={userName} />
    </div>
  </div>
);

export default Profile;
