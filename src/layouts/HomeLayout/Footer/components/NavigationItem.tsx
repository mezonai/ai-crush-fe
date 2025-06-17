interface NavigationItemProps {
  imageUrl: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ imageUrl, isActive = false, onClick }) => {
  return (
    <div className="flex overflow-hidden flex-1 shrink items-center self-stretch my-auto basis-0">
      <button
        className={`flex flex-col flex-1 shrink gap-12 justify-center items-center self-stretch my-auto w-full rounded-md basis-0 min-h-11 pl-[var(--spacing-lg,16px)] pr-[var(--spacing-lg,16px)] transition-colors ${
          isActive ? 'bg-[#FEE5F2]' : ''
        }`}
        onClick={onClick}
        type="button"
        aria-label="Navigation item">
        <div className="flex flex-col gap-1 justify-center items-center w-5">
          <img src={imageUrl} className="object-contain w-full aspect-square" />
        </div>
      </button>
    </div>
  );
};

export default NavigationItem;
