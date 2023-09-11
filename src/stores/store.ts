import { create } from "zustand";

interface UserState {
  user: User | null;
  setUser: (email: string, uid: string) => void;
  logout: () => void;
}

interface TokenState {
  token: string | null;
  setToken: (newToken: string) => void;
  clearToken: () => void;
}

interface User {
  email: string;
  uid: string;
}

const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (email: string, uid: string) => {
    console.log("setting user");
    set({
      user: {
        email,
        uid,
      },
    });
  },
  logout: () => set({ user: null }),
}));

const useStore = create<TokenState>()((set) => ({
  token: null as string | null,
  setToken: (newToken: string) => set({ token: newToken }),
  clearToken: () => set({ token: null }),
}));

export { useUserStore, useStore };
