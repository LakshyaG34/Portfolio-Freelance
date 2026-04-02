"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Logo = () => {
  return (
    <section className="py-50">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto flex justify-between items-center gap-8 overflow-x-hidden md:overflow-visible"
      >

        {[
          "/images/Logo1.svg",
          "/images/Logo2.svg",
          "/images/Logo3.svg",
          "/images/Logo4.svg",
          "/images/Logo5.svg",
          "/images/Logo6.svg",
          "/images/Logo7.svg"
        ].map((logo, i) => (
          <motion.div key={i} variants={item}>
            <Image
              src={logo}
              alt={`Logo ${i}`}
              width={120}
              height={40}
              className={`${i === 5 ? "w-48" : "w-24"} h-6`}
            />
          </motion.div>
        ))}

      </motion.div>
    </section>
  )
}

export default Logo