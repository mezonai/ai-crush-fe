import { useState } from 'react';
import MainNavigation from './components/MainNavigation';
import NavHomeIcon from '@assets/icons/navigations/nav-icon-home.svg';
import NavHeartIcon from '@assets/icons/navigations/nav-icon-heart.svg';

const navigationItems = [
  {
    id: 'Home',
    imageUrl: NavHomeIcon,
  },
  {
    id: 'Subtasks',
    imageUrl: NavHeartIcon,
  },
];

export function Footer() {
  const [activeItemId, setActiveItemId] = useState<string>('item1');

  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
  };

  return (
    <div className="flex flex-row justify-center py-2 w-full">
      <MainNavigation items={navigationItems} activeItemId={activeItemId} onItemClick={handleItemClick} />
    </div>
  );
}

export default Footer;
