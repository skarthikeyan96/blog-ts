import React from "react"
import "tailwindcss/tailwind.css"
import "../styles/prism.css"
import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp
