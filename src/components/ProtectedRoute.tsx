"use client"

import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/app/(auth)/auth.store"

interface ProtectedRouteProps {
    children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = useAuthStore((state) => state.user)
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/login") // لو مش مسجّل دخول، يروح Login
        }
    }, [user, router])

    if (!user) return null // أو Loading spinner

    return <>{children} </>
}