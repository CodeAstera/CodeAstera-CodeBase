"use client";
import { useState } from "react";
import { Calendar, ChevronDown, Users, CreditCard, LineChart, Download, Search, Activity, TrendingUp, Globe, Award, Zap, User, UserCog, UserCheck, UserCheck2 } from "lucide-react";
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';

export default function CodeasteraDashboard() {


  const today = new Date();

  const time = today.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  const date = today.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  
const [activeTab, setActiveTab] = useState("overview");
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
  
    <div className="bg-white/10 p-2 rounded-lg relative">
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent from-30% to-[hsla(222.2,_84%,_4.9%,_1)] "></div>
    <div className="w-full  rounded-lg bg-black text-white z-20 relative">
      {/* Top Navigation */}
      <header className="border-b border-gray-800 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600"></div>
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
            <input type="text" placeholder="Search..." 
              className="bg-black border border-gray-800 pl-8 pr-4 py-2 rounded-md text-sm focus:outline-none" />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-600 flex justify-center items-end">

            <User size={18} className="text-gray-300"/>
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
            className={`pb-2 ${activeTab === "overview" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            onClick={() => handleTabChange("overview")}>
            Client Growth
          </button>
          <button 
            className={`pb-2 ${activeTab === "analytics" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            onClick={() => handleTabChange("analytics")}>
            Competitive Analysis
          </button>
          <button 
            className={`pb-2 ${activeTab === "reports" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            onClick={() => handleTabChange("reports")}>
            ROI Reports
          </button>
          <button 
            className={`pb-2 ${activeTab === "notifications" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            onClick={() => handleTabChange("notifications")}>
            Client Testimonials
          </button>
        </div>
      </div>
      
      {/* Metric Cards */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Growth With Website vs Without */}
        <div className="bg-black border border-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400">Revenue Growth</h3>
            <TrendingUp size={18} className="text-green-400" />
          </div>
          <div>
            <div className="text-2xl text-sky-300  font-bold">+87%</div>
            <div className="text-sm mt-1">
              <span>vs. 32% <span className="text-red-400">without website</span></span>
            </div>
          </div>
        </div>
        
        {/* Codeastera vs Competition */}
        <div className="bg-black border border-gray-800 rounded-lg p-6">
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
        <div className="bg-black border border-gray-800 rounded-lg p-6">
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
        <div className="bg-black border border-gray-800 rounded-lg p-6">
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
      <div className="lg:col-span-2 bg-black border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-6">Growth Comparison: With Codeastera vs Competitors</h2>
          
          <div className="mt-4">
            <div className="flex text-xs text-gray-500 mb-2">
              <div className="w-16"></div>
              <div className="flex-1 flex">
                <div className="flex-1 text-center">Jan</div>
                <div className="flex-1 text-center">Feb</div>
                <div className="flex-1 text-center">Mar</div>
                <div className="flex-1 text-center">Apr</div>
                <div className="flex-1 text-center">May</div>
                <div className="flex-1 text-center">Jun</div>
                <div className="flex-1 text-center">Jul</div>
                <div className="flex-1 text-center">Aug</div>
                <div className="flex-1 text-center">Sep</div>
                <div className="flex-1 text-center">Oct</div>
                <div className="flex-1 text-center">Nov</div>
                <div className="flex-1 text-center">Dec</div>
              </div>
            </div>
            
            <div className="h-64 w-full relative">
              <div className="absolute top-0 left-0 text-xs text-gray-500">400%</div>
              <div className="absolute top-1/4 left-0 text-xs text-gray-500">300%</div>
              <div className="absolute top-1/2 left-0 text-xs text-gray-500">200%</div>
              <div className="absolute top-3/4 left-0 text-xs text-gray-500">100%</div>
              <div className="absolute bottom-0 left-0 text-xs text-gray-500">0%</div>
              
              <div className="absolute bottom-0 left-16 right-0 h-full flex items-end">
                {/* Codeastera client growth bars */}
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-3/5 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/5 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-4/5 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/4 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-1/2 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/6 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-3/5 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/5 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-2/3 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/6 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-4/5 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/5 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-3/4 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/4 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-4/5 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/4 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-5/6 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/3 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-full w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/3 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-5/6 w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-2/5 w-1/2 rounded-sm absolute right-0"></div>
                </div>
                <div className="flex-1 mx-1 relative">
                  <div className="bg-green-400 h-full w-1/2 rounded-sm absolute left-0"></div>
                  <div className="bg-gray-600 h-1/3 w-1/2 rounded-sm absolute right-0"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 text-xs">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 bg-green-400 rounded-sm mr-1"></div>
                <span>Codeastera Clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-600 rounded-sm mr-1"></div>
                <span>Competitor Clients</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Success Stories */}
        <div className="bg-black border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Client Success Stories</h2>
          </div>
          
          <div className="text-sm text-gray-400 mb-4">
            Some of our recent client transformations
          </div>
          
          <div className="space-y-6">
            {[
              { name: "Northwind Traders", industry: "E-Commerce", result: "+532% revenue" },
              { name: "MediSync", industry: "Healthcare", result: "+789% patient engagement" },
              { name: "FinEdge", industry: "Financial Services", result: "+412% lead generation" },
              { name: "EcoSolutions", industry: "Sustainability", result: "+621% market reach" },
              { name: "TechVista", industry: "SaaS", result: "+398% user acquisition" }
            ].map((client, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex items-center space-x-3 w-8/12">
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <div>
                    <div className="font-medium">{client.name}</div>
                    <div className="text-gray-500 text-sm">{client.industry}</div>
                  </div>
                </div>
                <div className="font-medium text-end text-green-400">{client.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* What makes Codeastera special - Styled as Alert */}
    </div>
    </div>
)}