"use client";
import { useEffect } from "react";
import { create } from "zustand";

export interface UserTypes {
  username: string;
  email: string;
  phoneNumber: number;
  isEmailVerified: boolean;
}

interface AuthState {
  user: UserTypes | null;
  setUser: (user: UserTypes | null) => void;
}

const getInitialUser = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user-musc");
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getInitialUser(),
  setUser: (user) => {
    set({ user });
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("user-musc", JSON.stringify(user));
      } else {
        localStorage.removeItem("user-musc");
      }
    }
  },
}));
// useAuthSubscription hook
export function useAuthSubscription() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const unsubscribe = useAuthStore.subscribe((user) => {
        if (user) {
          localStorage.setItem("user-musc", JSON.stringify(user));
        } else {
          localStorage.removeItem("user-musc");
        }
      });

      return () => unsubscribe();
    }
  }, []);
}
