import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';

type AuthState = {
  isLoggedIn: boolean;
  userId: number | null;
  login: (userId: number) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userId: null,
      login: (userId) => set({ isLoggedIn: true, userId }),
      logout: () => set({ isLoggedIn: false, userId: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ userId: state.userId, isLoggedIn: state.isLoggedIn }),
    },
  ),
);
