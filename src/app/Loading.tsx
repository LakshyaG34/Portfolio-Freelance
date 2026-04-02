// app/loading.tsx (Next.js App Router)
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import GradientLoader from "../GradientLoader/gradientLoader";
// import Ellipse from "./components/images/Ellipse.svg"
import Image from "next/image";
// import loadingGif from "@/public/loading.gif";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Navigate to homepage
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      <div className="relative">
        <Image
          src="/images/Ellipse.svg"
          alt="ellipse"
          width={200}
          height={200}
        />
        <span className="absolute inset-0 flex items-center justify-center text-white">
          Loading...
        </span>
      </div>
      <GradientLoader />
    </div>
  );
}
