import React from "react";
import Image from "next/image";

export default function HeroSec1() {
  return (
    <>
      {/* hero sec 1 */}
      <div>
        <section className="relative pb-12 pt-40 overflow-hidden bg-transparent sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[102rem]">
          
              <div className="absolute w-[40rem]   h-[40rem] right-2 -top-16">
                <Image
                  src="/home/grad.svg"
                  width={640}
                  height={640}
                  alt="gradient"
                  className="w-full  h-full object-cover pointer-events-none"
                />
                 <Image
                  src="/home/noise.png"
                  width={640}
                  height={640}
                  alt="noise"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
               
              </div>
    

            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-12  gap-x-4 relative z-20">
              <div className="flex flex-col col-span-7 items-center justify-around">
                <div>
                  <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl xl:text-7xl !leading-[5rem]">
                  Built to Impress. <br/> Priced to Delight.
                  </h1>
                  <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                    
                  </p>
                </div>
              </div>

              <div className="relative h-full col-span-5 flex justify-center">
                <Image
                  src="/home/illustration.png"
                  width={416}
                  height={553.16}
                  alt="hero illustration"
                  className="z-20"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* sec 1 ends here */}
      {/* sec 2 starts */}
      {/* sec  2 ends here */}
      {/* sec 3 starts */}
      {/* sec  3 ends here */}
      {/* sec 4 starts */}
      {/* sec  4 ends here */}
      {/* sec 5 starts */}
      {/* sec  5 ends here */}
      {/* sec 6 starts */}
      {/* sec  6 ends here */}
      {/* sec 7 starts */}
      {/* sec  7 ends here */}
      {/* sec 8 starts */}
      {/* sec  8 ends here */}
      {/* sec 9 starts */}
      {/* sec  9 ends here */}
      {/* sec 10 starts */}
      {/* sec  10 ends here */}
    </>
  );
}
