import { defineStore } from "pinia";
import type { User } from "../@types/user";


export const useUserStore = defineStore("user", {
  state: (): { user: User } => ({
    user: {
      name: "Jane Doe",
      email: "jane@gmail.com",
      phone: "123 - 456 - 7890",
      avatar: "https://via.placeholder.com/100",
    },
  }),
  actions: {
    updateUser(newUser: Partial<User>) {
      this.user = { ...this.user, ...newUser };
    },
  },
  persist: true,
});
