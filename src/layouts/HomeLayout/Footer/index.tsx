import { useState } from 'react';
import MainNavigation from './components/MainNavigation';
import NavHomeIcon from '@assets/icons/navigations/nav-icon-home.svg';
import NavHeartIcon from '@assets/icons/navigations/nav-icon-heart.svg';
import { useNavigate } from 'react-router-dom';

const navigationItems = [
  {
    id: 'home',
    imageUrl: NavHomeIcon,
  },
  {
    id: 'sub-tasks',
    imageUrl: NavHeartIcon,
  },
];

export function Footer() {
  const [activeItemId, setActiveItemId] = useState<string>('home');
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
    navigate(`/${itemId}`);
  };

  return (
    <div className="flex flex-row justify-center py-2 w-full">
      <MainNavigation items={navigationItems} activeItemId={activeItemId} onItemClick={handleItemClick} />
    </div>
  );
}

export default Footer;
