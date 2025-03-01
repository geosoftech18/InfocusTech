// "use client"

// import { useEffect, useState } from "react"
// import Lottie from "lottie-react"
// import animationData from "@/animations/background-animation.json"

// export default function AnimatedBackground() {
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   if (!isMounted) {
//     return null
//   }

//   return (
//     // bg-gradient-to-br from-purple-900 via-blue-900 to-black
//     <div className="fixed inset-0 z-0 ">
//       <div className="absolute inset-0 opacity-60">
//         <Lottie
//           animationData={animationData}
//           loop={true}
//           autoplay={true}
//           style={{ width: "100%", height: "100%" }}
//           className="object-cover"
//         />
//       </div>
//     </div>
//   )
// }

