interface UserNameProps {
  name: string;
}
const UserName: React.FC<UserNameProps> = ({ name }) => (
  <div className="flex flex-col items-start h-8">
    <span className="h-8 font-bold text-[24px] leading-8 text-[#8C0F3E]">{name}</span>
  </div>
);

export default UserName;
