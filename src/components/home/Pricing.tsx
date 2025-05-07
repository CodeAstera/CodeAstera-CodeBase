// Pricing.tsx - Server Component
import ShinyText from '@/utils/ShinyText';
import React from 'react';

type PricingFeature = {
  name: string;
  available: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Launch",
    description: "Perfect for startups ready to establish their online presence",
    price: "$1,499",
    period: "starting at",
    features: [
      { name: "Responsive website design", available: true },
      { name: "SEO optimization", available: true },
      { name: "5 pages included", available: true },
      { name: "Basic analytics", available: true },
      { name: "3 revision rounds", available: true },
      { name: "Custom domain setup", available: true },
      { name: "Performance monitoring", available: false },
      { name: "24/7 support", available: false },
    ],
    cta: "Blast Off",
  },
  {
    name: "Orbit",
    description: "Advanced features to help your business grow and scale",
    price: "$3,499",
    period: "starting at",
    features: [
      { name: "Responsive website design", available: true },
      { name: "SEO optimization", available: true },
      { name: "10 pages included", available: true },
      { name: "Advanced analytics", available: true },
      { name: "Unlimited revision rounds", available: true },
      { name: "Custom domain setup", available: true },
      { name: "Performance monitoring", available: true },
      { name: "24/7 support", available: false },
    ],
    cta: "Enter Orbit",
    popular: true,
  },
  {
    name: "Galaxy",
    description: "Enterprise-grade solutions for maximum impact and reach",
    price: "$7,999",
    period: "starting at",
    features: [
      { name: "Responsive website design", available: true },
      { name: "SEO optimization", available: true },
      { name: "Unlimited pages", available: true },
      { name: "Enterprise analytics", available: true },
      { name: "Unlimited revision rounds", available: true },
      { name: "Custom domain setup", available: true },
      { name: "Performance monitoring", available: true },
      { name: "24/7 priority support", available: true },
    ],
    cta: "Expand",
  },
];

const Pricing = () => {
  return (
    <section className="overflow-hidden relative">
      {/* Background stars effect */}
      {/* <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-30 z-0"></div> */}
      
      {/* Blue glow effect */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-light mb-2 uppercase tracking-wider">PRICING PLANS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Select Your </span>
            <span className="text-blue-400">Launch Pad</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to propel your brand into the digital stratosphere — with scalable solutions designed for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden backdrop-blur-md relative p-1 border-[1px] border-solid border-sky/20 ${plan.popular?"hover:border-violet-400":"hover:border-sky-300"} transition-colors ${plan.popular ? 'bg-gradient-to-r from-blue-500/20 to-indigo-600/20' : 'bg-black/50'}`}
            >
              <div 
                className={`h-full rounded-xl  p-8 transition-all duration-300 group flex flex-col  `}
              >
                {plan.popular && (
                  <span className="absolute w-48 flex justify-center items-center rotate-45 top-10 -right-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3  self-start">
                    Most Popular
                  </span>
                )}
                {plan.popular ? (<ShinyText text="Orbit" orbit={1} disabled={false} speed={3} className='text-2xl font-bold mb-2 ' />):(  <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors`}>{plan.name}</h3>)}
              
                <p className="text-gray-400 mb-6 flex-grow">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-xs text-gray-500 block">{plan.period}</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <div className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.available ? (
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={feature.available ? 'text-gray-300' : 'text-gray-500'}>{feature.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
               
                  <button className={`w-full  relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
        <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${plan.popular?"bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]":"bg-[conic-gradient(from_90deg_at_50%_50%,#7af0ff_0%,#5269ce_50%,#7af0ff_100%)]"}`}/>
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl`}>
        {plan.cta}
        </span>
      </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='relative overflow-hidden rounded-2xl  '>
        <div className=" bg-white/5  backdrop-blur-lg  p-8 relative border border-gray-700/50">
        
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need a custom solution?</h3>
              <p className="text-gray-400">Let&apos;s build something uniquely tailored to your mission.</p>
            </div>
            <button className="mt-6 md:mt-0 py-2 px-6 rounded-full bg-white text-gray-900 font-medium hover:shadow-md transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className='rounded-full w-36 h-36 absolute -left-12 -bottom-14 bg-blue-500 -z-10' ></div>
        <div className='rounded-full w-36 h-36  absolute -top-16 -right-12 bg-pink-400 -z-10'></div>
        <div className='rounded-full w-96 h-96  absolute -top-80 left-64 bg-emerald-400 -z-10'></div>

        <div className='rounded-full w-96 h-96 absolute right-44 -bottom-80 bg-purple-400 -z-10' ></div>
     
        </div>
      </div>
    </section>
  );
};

export default Pricing;