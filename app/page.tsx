"use client"

import Hero from "@/src/Sections/Hero";
import Services from "@/src/Sections/Services";
import Header from "@/src/components/Header"

import Lenis from "lenis"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })


  return (
    <>
      <Header />
      <Hero />
      <Services />
    </>
  );
}
