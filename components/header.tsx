import React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/solid"

type HeaderProps = {
  publishedDate: string
  tags: string
  title: string
}
const Header = (props: HeaderProps) => {
  return (
    <div className="mt-12 mb-12">
      <Link href="/blog">
        <a className="text-gray-400 flex items-center mb-6 mt-6">
          {" "}
          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to blog{" "}
        </a>
      </Link>
      <div className="flex flex-wrap md:flex-row items-center my-3 col-12 text-gray-400 w-full space-x-3">
        <p className="md:m-0 ml-1 font-mono">
          <time>{new Date(props.publishedDate).toDateString()}</time>
        </p>
        <span className="w-7 h-0.5 bg-gray-400 "></span>
        <ul className=" flex-auto flex flex-row flex-wrap font-mono mt-0">
          {props.tags.split(",").map((tag: string, index: number) => {
            return (
              <li key={index} className="mr-3 capitalize">
                {tag}
              </li>
            )
          })}
        </ul>
      </div>

      <h1 className="font-bold text-2xl md:text-4xl tracking-normal mb-4 mt-4 font-interUI">
        {" "}
        {props.title}{" "}
      </h1>
      <div className="profile">
        <img
          className="inline object-cover w-8 h-8 mr-2 rounded-full"
          src="https://pbs.twimg.com/profile_images/1259130918259707904/H7l5s_32_400x400.jpg"
          alt="Profile image"
        />
        <span>
          <a
            href="https://twitter.com/karthik_coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Karthikeyan{" "}
          </a>
        </span>
      </div>
    </div>
  )
}

export default Header
