import React from 'react';

import { initAuth } from '../../services/auth';

const InitPage: React.FC = () => {
  initAuth();

  return null;
}

export default InitPage;