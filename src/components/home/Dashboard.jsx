"use client";
import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Users,
  CreditCard,
  LineChart,
  Download,
  Search,
  Activity,
  TrendingUp,
  Globe,
  Award,
  Zap,
  User,
  UserCog,
  UserCheck,
  UserCheck2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ChartComp  from "./Dash/ChartComp";

export default function CodeasteraDashboard() {
  const today = new Date();

  const time = today.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [activeTab, setActiveTab] = useState("Client Growth");
  const [glow,setGlow]  = useState(null);
  const handleTabChange = (tab) => {
    if (tab === "Client Growth") {
      setGlow(true);
    } else {
      setGlow(false);
    }
    setActiveTab(tab);
  };

  return (
    <div className="bg-white/10 p-2 rounded-lg relative backdrop-blur-lg">
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent from-30% to-[hsla(222.2,_84%,_4.9%,_1)] "></div>
      <div className="w-full  rounded-lg bg-black text-white z-20 relative">
        {/* Top Navigation */}
        <header className="border-b border-gray-800 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 p-1">
                <img
                  src="/home/star.png"
                  alt="Codeastera Logo"
                 className="object-cover "
                />

              </div>
              <span className="font-medium">Codeastera Inc.</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm">{`${time} ${date}`}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black border border-gray-800 pl-8 pr-4 py-2 rounded-md text-sm focus:outline-none"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600 flex justify-center items-end">
              <User  stroke="none" size={30} className="fill-gray-300 text-gray-200 -mb-1" />
            </div>
          </div>
        </header>

        {/* Dashboard Title and Date Range */}
        <div className="px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-6 mt-6">
            <button
              className={`pb-2 ${
                activeTab === "Client Growth"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabChange("Client Growth")}
            >
              Client Growth
            </button>
            <button
              className={`pb-2 ${
                activeTab === "Analysis"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabChange("Analysis")}
            >
              Competitive Analysis
            </button>
           
            <button
              className={`pb-2 ${
                activeTab === "Testimonials"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabChange("Testimonials")}
            >
              Client Testimonials
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Growth With Website vs Without */}
          <div className={`bg-black border border-gray-800 rounded-lg p-6  ${glow? "animate-glow":""}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Revenue Growth</h3>
              <TrendingUp size={18} className="text-green-400" />
            </div>
            <div>
              <div className="text-2xl text-sky-300  font-bold">+87%</div>
              <div className="text-sm mt-1">
                <span>
                  vs. 32% <span className="text-red-400">without website</span>
                </span>
              </div>
            </div>
          </div>

          {/* Codeastera vs Competition */}
          <div className={`bg-black border border-gray-800 rounded-lg p-6  ${glow? "animate-glow":""}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Client Conversion Rate</h3>
              <Users size={16} className="text-gray-400" />
            </div>
            <div>
              <div className=" text-sky-300 text-2xl font-bold">72%</div>
              <div className=" text-sm mt-1">
                <span>vs. 41% industry average</span>
              </div>
            </div>
          </div>

          {/* Time to Market */}
          <div className={`bg-black border border-gray-800 rounded-lg p-6  ${glow? "animate-glow":""}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Time to Market</h3>
              <Zap size={16} className="text-gray-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-300">-43%</div>
              <div className=" text-sm mt-1">
                <span>Faster than competitors</span>
              </div>
            </div>
          </div>

          {/* Client Satisfaction */}
          <div className={`bg-black border border-gray-800 rounded-lg p-6  ${glow? "animate-glow":""}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Client Satisfaction</h3>
              <Award size={16} className="text-gray-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-300">98.5%</div>
              <div className=" text-sm mt-1">
                <span>vs. 76% industry average</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className={`lg:col-span-2 rounded-xl ${activeTab === "Analysis"? "animate-glow":""}`}>
            <ChartComp />
          </div>

          {/* Client Success Stories */}
          <div className={` bg-black border border-gray-800 rounded-lg p-6  ${activeTab === "Testimonials"? "animate-glow":""}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Client Success Stories</h2>
            </div>

            <div className="text-sm text-gray-400 mb-4">
              Some of our recent client transformations
            </div>

            <div className="space-y-6">
              {[
                {
                  name: "Northwind Traders",
                  industry: "E-Commerce",
                  result: "+52% revenue",
                  img: "https://avatar.vercel.sh/jack",
                },
                {
                  name: "MediSync",
                  industry: "Healthcare",
                  result: "+78% patient engagement",
                  img: "https://avatar.vercel.sh/jill",
                },
                {
                  name: "FinEdge",
                  industry: "Financial Services",
                  result: "+62% lead generation",
                  img: "https://avatar.vercel.sh/john",
                },
                {
                  name: "EcoSolutions",
                  industry: "Sustainability",
                  result: "+61% market reach",
                  img: "https://avatar.vercel.sh/jane",
                },
                {
                  name: "TechVista",
                  industry: "SaaS",
                  result: "+98% user acquisition",
                  img: "https://avatar.vercel.sh/jenny",
                },
              ].map((client, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 w-8/12">
                    <div className="w-8 h-8 rounded-full ">
                    <img className="rounded-full" width="32" height="32" alt="" src={client.img} />
                    </div>
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-gray-500 text-sm">
                        {client.industry}
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-end text-green-400">
                    {client.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What makes Codeastera special - Styled as Alert */}
      </div>
    </div>
  );
}
