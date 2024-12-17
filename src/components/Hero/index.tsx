"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionProps } from "framer-motion";

const Hero = () => {
  const [motion, setMotion] = useState<null | {
    motion: { div: React.FC<MotionProps> };
  }>(null);

  useEffect(() => {
    import("framer-motion").then((mod) => {
      setMotion(mod);
    });
  }, []);

  if (!motion) {
    return null; // Render nothing or a loading spinner
  }

  const {
    motion: { div: MotionDiv },
  } = motion;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="mb-4 mt-20 h-20 text-center text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
                <span className="relative">
                  <MotionDiv
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                  >
                    Decentralized Voting Application
                  </MotionDiv>
                </span>
              </h1>
              <div className="mt-4 flex justify-center">
                <MotionDiv
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <p className="mx-auto mb-9 mt-4 max-w-[600px] text-center text-base font-medium text-white sm:text-lg">
                Participate in secure and transparent voting using blockchain
                technology. Make your vote count in a decentralized manner.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/vote"
                  className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-base font-medium text-dark shadow-1 hover:bg-gray-2"
                >
                  Vote Now
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
