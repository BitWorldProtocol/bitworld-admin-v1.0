import { User } from "@/types/api";
import { create } from "zustand"

export const useStore = create<{
  token: string,
  collapsed: boolean,
  userInfo: {
    userEmail: string,
    userName: string,
  },
  updateCollapsed: () => void,
  updateUserInfo: (userInfo: User.UserItem) => void,
  updateToken: (token: string) => void
}>((set) => ({
  token: '',
  collapsed: false,
  userInfo: {
    userEmail: '',
    userName: '',
  },
  updateUserInfo: (userInfo: User.UserItem) => set({userInfo}),
  updateToken: token => set({token}),
  updateCollapsed: () =>
    set(state => {
      return {
        collapsed: !state.collapsed
      }
    })
}))

