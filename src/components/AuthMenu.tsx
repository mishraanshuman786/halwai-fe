"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { LogOut } from "lucide-react"

import { useAuth } from "@/context/AuthContext"
import { signInWithGoogle, logout } from "@/lib/googleAuth"

const AuthMenu = ({ mobile = false }) => {
  const { user, loading } = useAuth()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (loading)
    return <div className="text-sm text-muted-foreground">Loading...</div>

  // 🚪 NOT LOGGED IN
  if (!user) {
    return (
      <button
        onClick={signInWithGoogle}
        className={`${
          mobile ? "w-full px-4 py-2" : "ml-6 px-5 py-2"
        } ml-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105`}
      >
        Sign In
      </button>
    )
  }

  // ✅ LOGGED IN
  return (
    <div className={`${mobile ? "mt-4" : "relative ml-6"}`} ref={dropdownRef}>
      {!mobile && (
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center rounded-full border border-border p-1"
        >
          <Image
            src={user.photoURL ?? "/default-avatar.png"}
            alt={user.displayName ?? "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
      )}

      {(open || mobile) && (
        <div
          className={`${
            mobile
              ? "flex flex-col items-center"
              : "absolute -right-24 mt-4 w-56 bg-card border border-border rounded-lg shadow-lg z-50"
          }`}
        >
          <div
            className={`${
              mobile ? "" : "p-4 border-b border-border"
            } text-center`}
          >
            <Image
              src={user.photoURL ?? "/default-avatar.png"}
              alt={user.displayName ?? "User"}
              width={mobile ? 50 : 60}
              height={mobile ? 50 : 60}
              className="rounded-full mx-auto border border-border"
            />
            <h2 className="font-semibold mt-2">
              {user.displayName}
            </h2>
            <h4 className="text-sm text-center text-muted-foreground">
              {user.email}
            </h4>
          </div>

          <button
            onClick={async () => {
              await logout()
              setOpen(false)
            }}
            className={`${
              mobile
                ? "w-full mt-2"
                : "w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors rounded-b-lg"
            }`}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthMenu
