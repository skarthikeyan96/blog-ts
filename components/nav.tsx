import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "@heroicons/react/solid"

const Nav = () => {
  const { theme, setTheme } = useTheme()

  const renderIcon = () => {
    if (theme === "light") return <SunIcon className="h-5 w-5" />
    return <MoonIcon className="h-5 w-5 text-blue-500" />
  }

  return (
    <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 py-6 px-6 relative">
      <Link href="/">
        <a className="block">
          <span> Karthikeyan</span>
        </a>
      </Link>
      <nav className="flex flex-row space-x-6 font-semibold">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          {renderIcon()}
        </button>
      </nav>
    </header>
  )
}

export default Nav
