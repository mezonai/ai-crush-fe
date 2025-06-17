import NavigationItem from './NavigationItem';

interface NavigationItem {
  id: string;
  imageUrl: string;
}

interface MainNavigationProps {
  items: NavigationItem[];
  activeItemId?: string;
  onItemClick?: (itemId: string) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ items, activeItemId, onItemClick }) => {
  return (
    <nav
      className="flex gap-3 items-center p-2 w-full rounded-xl shadow-sm backdrop-blur-md bg-white bg-opacity-70"
      aria-label="Main navigation">
      {items?.map((item) => (
        <NavigationItem
          key={item.id}
          imageUrl={item.imageUrl}
          isActive={activeItemId === item.id}
          onClick={() => onItemClick?.(item.id)}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;
