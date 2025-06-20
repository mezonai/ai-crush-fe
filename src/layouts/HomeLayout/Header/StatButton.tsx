import { Button } from '@/components/ui/button';

interface StatButtonProps {
  iconSrc: string;
  value: string | number;
  className?: string;
}

const StatButton: React.FC<StatButtonProps> = ({ iconSrc, value, className = '', ...props }) => (
  <Button
    variant="ghost"
    size="sm"
    className={`
      flex flex-row items-center
      py-2 pr-3 pl-2 gap-1
      shadow-[0_4px_12px_rgba(255,182,218,0.68)]
      backdrop-blur-[12px]
      rounded-[10px]
      bg-white/30
      ${className}
    `}
    {...props}>
    <img src={iconSrc} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
    <span className="flex flex-row justify-center items-center px-0.5 h-5">
      <span className="text-sm font-semibold text-[#414651]">{value}</span>
    </span>
  </Button>
);

export default StatButton;
