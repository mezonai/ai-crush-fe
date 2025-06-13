import { TOKENS } from '../consts/common';

const logout = () => {
  localStorage.removeItem(TOKENS.ACCESS_TOKEN);
  localStorage.removeItem(TOKENS.REFRESH_TOKEN);
  window.location.href = '/login';
};

export { logout };
