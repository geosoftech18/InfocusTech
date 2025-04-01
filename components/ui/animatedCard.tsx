import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { HeroCarousalItem } from "../pages/home/heroCarousal";
import { AnimatedButton } from "./animatedButton";

interface AnimatedCardProps {
  item: HeroCarousalItem;
  trigger: boolean;
}

const AnimatedCard = ({ item, trigger }: AnimatedCardProps) => {
  return (
    <Card className="w-full h-full absolute top-10 lg:top-1/3 border-none rounded-none flex flex-col items-center md:items-start gap-10 lg:gap-3 sm:gap-10 py-5 3xl:gap-20 bg-transparent    px-4 md:pl-32">
      {/* Title with left-to-right animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={trigger ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full md:w-auto text-center md:text-left"
      >
        <CardTitle className="text-2xl md:pl-6 lg:text-4xl 2xl:text-6xl 3xl:text-7xl font-semibold z-20 text-white">
          {item.title} <br />
          <span className="font-bold">{item.boldTitle}</span>
        </CardTitle>
      </motion.div>

      {/* Content with right-to-left animation */}
      <CardContent className="flex flex-col items-center md:items-start text-center md:text-left gap-10 3xl:gap-20 w-full">
        <motion.span
          className="text-sm lg:text-md 2xl:text-2xl 3xl:text-2xl text-white w-full md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={trigger ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.description}
        </motion.span>

        {/* Button with bottom-to-top animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-auto"
        >
          <Link
            className=""
            href={"/contactus"}
          >
            <AnimatedButton size={"lg"}>{item.cta_button_text}</AnimatedButton>
          </Link>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;