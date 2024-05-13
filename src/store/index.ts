import { User } from "@/types/api";
import { create } from "zustand"

export const useStore = create<{
  token: string,
  collapsed: boolean,
  userInfo: User.UserItem,
  updateCollapsed: () => void,
  updateUserInfo: (userInfo: User.UserItem) => void,
  updateToken: (token: string) => void
}>((set) => ({
  token: '',
  collapsed: false,
  userInfo: {
      _id: '',
      userId: 0,
      userName: '',
      userEmail: '',
      deptId: '',
      state: 0,
      mobile: '',
      job: '',
      role: 0,
      roleList: '',
      createId: 0,
      deptName: '',
      userImg: ''
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

