import Link from "next/link";
import CodeasteraDashboard from "./Dashboard";

export default function HeroSection1() {
  return (
    <div className="">
      {/* <div className="absolute z-[0] inset-0   bg-blue-500/10 bg-[radial-gradient(ellipse_30%_56%_at_50%_-20%,rgba(100,149,237,0.3),rgba(255,255,255,0))]" /> */}
      <section className="relative pt-12 overflow-hidden bg-transparent ">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-normal tracking-widest uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Your startup needs a kick
              </span>
            </p>
            <h1 className="pb-1 text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-white/55 mt-8 text-4xl font-medium  sm:text-5xl lg:text-6xl xl:text-7xl">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-200 from-20% to-sky-400 drop-shadow-[0_0_4px_rgba(155,221,251,0.9)]">
                Stunning
              </span>{" "}
              Websites
            </h1>

            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white from-40% to-white/55  text-4xl font-medium  sm:text-5xl lg:text-6xl xl:text-7xl">
              for Brands ready to Orbit
            </h1>
            <p className="text-md mx-auto  mt-10 text-[rgb(154,154,164)] font-normal text-balance sm:text-xl">
            We build high-performance web solutions that elevate your brand into the digital stratosphere — fast, scalable, and future-ready.
            </p>
            <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
             

              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white"
              >
                Explore
              </Link>
              <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto"
                >
                  Build Your Success Story
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-52">
            <div className="absolute -top-12 transform -translate-x-1/2 left-1/2">
              <svg
                className="blur-3xl filter"
                style={{ filter: "blur(64px)" }}
                width="645"
                height="413"
                viewBox="0 0 645 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                  fill="url(#d)"
                />
                <defs>
                  <linearGradient
                    id="d"
                    x1="665.741"
                    y1="178.506"
                    x2="296.286"
                    y2="474.62"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "var(--color-cyan-500)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "var(--color-purple-500)" }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <CodeasteraDashboard/>
        </div>
      </section>
    </div>
  );
}
