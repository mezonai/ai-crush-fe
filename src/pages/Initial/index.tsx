import React from 'react';

import { useInitGame } from '@/hooks/useInitGame';

const InitPage: React.FC = () => {
  useInitGame();

  return null;
};

export default InitPage;
