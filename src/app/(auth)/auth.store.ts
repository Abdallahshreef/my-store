import { create } from "zustand"
import { User } from "@/fake-db"
import { users } from "@/fake-db/data/users"

interface AuthState {
    user: User | null
    login: (email: string) => boolean
    register: (name: string, email: string) => User
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (email) => {
        const found = users.find((u) => u.email === email)
        if (found) set({ user: found })
        return !!found
    },
    register: (name, email) => {
        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            role: "user",
        }
        users.push(newUser)
        set({ user: newUser })
        return newUser
    },
    logout: () => set({ user: null }),
}))