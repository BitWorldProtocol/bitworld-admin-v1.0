import { User } from "@/types/api";
import { create } from "zustand"

export const useStore = create<{
  token: string,
  userInfo: {
    userEmail: string,
    userName: string,
  },
  updateUserInfo: (userInfo: User.UserItem) => void,
  updateToken: (token: string) => void
}>((set) => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: '',
  },
  updateUserInfo: (userInfo: User.UserItem) => set({userInfo}),
  updateToken: token => set({token})
}))

