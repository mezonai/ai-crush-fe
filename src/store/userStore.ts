import { getUserDetail } from '@/services/user';
import type { UserDetail } from '@/types/common';
import { create } from 'zustand';

interface UserStore {
  user: UserDetail | null;
  setUser: (user: UserDetail) => void;
  getUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  getUser: async () => {
    const response = await getUserDetail();
    const { data: user } = response;
    set({ user });
  },
}));
