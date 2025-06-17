interface GameModeCardProps extends React.HTMLAttributes<HTMLElement> {
  imageSrc: string;
  title: string;
  description: string;
  selected?: boolean;
}

const GameModeCard: React.FC<GameModeCardProps> = ({
  imageSrc,
  title,
  description,
  selected = false,
  ...props
}: GameModeCardProps) => {
  const borderColor = selected ? '#EA1870' : '#FFC4E3';
  const shadowColor = selected ? '#EA1870' : '#FFC4E3';

  return (
    <div
      className="flex flex-row justify-center items-center py-3 px-4 gap-2 w-full bg-white border border-[#FFC4E3] shadow-[0_4px_0_0_#FFC4E3] rounded-[16px] self-stretch pô"
      style={{
        borderColor,
        boxShadow: `0px 4px 0px 0px ${shadowColor}`,
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        cursor: 'pointer',
      }}
      {...props}>
      <img
        src={imageSrc}
        alt={title}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px] "
      />
      <div className="flex flex-1 shrink gap-3 items-start self-stretch my-auto basis-0 min-w-60">
        <div className="flex-1 shrink gap-0.5 w-full basis-0 min-w-60">
          <h3 className="text-base font-semibold leading-[24px)]">{title}</h3>
          <p className="text-base text-gray-600 leading-[24px)]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameModeCard;
