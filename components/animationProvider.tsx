// "use client"

// import type React from "react"

// import { createContext, useContext, useState, useEffect } from "react"
// import { usePathname } from "next/navigation"
// import AnimatedBackground from "./animatedBackground"

// type AnimationContextType = {
//   isHomePage: boolean
//   isScrolled: boolean
// }

// const AnimationContext = createContext<AnimationContextType>({
//   isHomePage: false,
//   isScrolled: false,
// })

// export const useAnimation = () => useContext(AnimationContext)

// export default function AnimationProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname()
//   const [isScrolled, setIsScrolled] = useState(false)
//   const isHomePage = pathname === "/"

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <AnimationContext.Provider value={{ isHomePage, isScrolled }}>
//       {isHomePage && <AnimatedBackground />}
//       <div className={`relative z-10 ${isHomePage ? "" : "bg-black"}`}>{children}</div>
//     </AnimationContext.Provider>
//   )
// }

