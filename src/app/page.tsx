import React from "react";
import "./globals.css";
// import HeroSec1 from "@/components/home/HeroSec1";
import { CTASection } from "@/components/blocks/cta-with-rectangle";
import HeroSection1 from "@/components/home/HeroSection1";
// import { CTASection } from "@/components/blocks/cta-with-rectangle";
export default function Home() {
  return (
    <div className="w-full pt-28">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col gap-36">
          <HeroSection1 />
          <CTASection
            badge={{
              text: "Get started",
            }}
            title="Start building with"
            description="Get started with CodeAstera and build your websites in no time"
            action={{
              text: "Get Started",
              href: "/docs",
              variant: "default",
            }}
          />
        </div>
      </div>
    </div>
  );
}
