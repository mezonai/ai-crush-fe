import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AvatarProps {
  src: string;
  alt?: string;
}

const UserAvatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="flex items-center p-1 w-[56px] h-[56px] bg-white/30 shadow-[0_8px_32px_rgba(162,66,114,0.15)] backdrop-blur-[6px] rounded-[16px]">
    <Avatar className="w-[48px] h-[48px] rounded-[12px] border-[rgba(0,0,0,0.08)] border-[0.72px]">
      <AvatarImage src={src} alt={alt} className="w-[48px] h-[48px] rounded-[12px] object-cover" />
      <AvatarFallback className="w-[48px] h-[48px] rounded-[12px] bg-muted">{alt}</AvatarFallback>
    </Avatar>
  </div>
);

export default UserAvatar;
