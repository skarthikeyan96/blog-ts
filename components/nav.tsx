import React from 'react';
import Link from 'next/link'

import { MoonIcon } from '@heroicons/react/solid'

const Nav = () => {
    return (

        <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative">

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
                <Link href="/">
                    <a><MoonIcon className="h-5 w-5 text-blue-500" /></a>
                </Link>

            </nav>
        </header>

    )

}

export default Nav;