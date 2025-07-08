import React from 'react'
import { Facebook, Instagram, Linkedin } from "lucide-react"

function Footer() {
    const aboutSopa = [
        { title: "About us", link: "#" },
        { title: "Executive Committee", link: "#" },
        { title: "Organisation Structure", link: "#" },
        { title: "SOPA Circular", link: "#" },
    ];
    const knowledgeCenter = [
        { title: "Major Soybean Varieties in India", link: "#" },
        { title: "Laboratory", link: "#" },
        { title: "SOPA Publication", link: "#" },
        { title: "Library", link: "#" },
    ];
    const memberDirectory = [
        { title: "Full Members", link: "#" },
        { title: "Members Login", link: "#" },
        { title: "Associate Members", link: "#" },
        { title: "Soy Product Manufacturers", link: "#" },
    ];
    const soybeanCuisine = [
        { title: "Soy Non-veg Cuisine", link: "#" },
        { title: "Soy Veg Cuisine", link: "#" },
        { title: "Kids Soy Cuisine", link: "#" },
        { title: "Soy Cuisine Links", link: "#" },
    ];
    const marketUpdates = [
        { title: "daily Reports", link: "#" },
        { title: "soybean Oil", link: "#" },
        { title: "soybean Meal", link: "#" },
        { title: "CBOT Soybean Rate", link: "#" },
    ];
    const arbitration = [
        { title: "Model Contract", link: "#" },
        { title: "For Soybean Oil", link: "#" },
        { title: "For Soybean Meal Extraction", link: "#" },
        { title: "for soyabe", link: "#" },
    ];
  return (
    <div className='mt-40'>
        <div className="bg-[#69570B] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider">
              S
              <span className="inline-block mx-1">
                
                {/* img will be there */}
                O

              </span>
              PA
            </h2>
          </div>
          <p className="text-lg opacity-90">The Soybean Processors Association of India</p>
          <div className="w-32 h-px bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {/* About SOPA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About SOPA</h3>
            <ul className="space-y-2 text-sm">
                {aboutSopa.map((item, idx)=>{
                         return  <li key={idx}>
                <a href={item.link} className="hover:text-yellow-300 text-gray-300 transition-colors">
                  {item.title}
                </a>
              </li>
                })}
            
            </ul>
          </div>

          {/* Knowledge Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Knowledge center</h3>
            <ul className="space-y-2 text-sm">
             {knowledgeCenter.map((item, idx)=>{
                return <li key={idx}>
                <a href={item.link} className="hover:text-yellow-300 transition-colors">
                  {item.title}
                </a>
              </li>
             })}
            </ul>
          </div>

          {/* Member Directory */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Member Directory</h3>
            <ul className="space-y-2 text-sm">
                {memberDirectory.map((item, idx)=>{
                    return <li key={idx}>
                    <a href={item.link} className="hover:text-yellow-300 transition-colors">
                    {item.title}
                    </a>
                </li>
                })}
            
            </ul>
          </div>

          {/* Soybean Cuisine */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Soybean Cuisine</h3>
            <ul className="space-y-2 text-sm">
                {soybeanCuisine.map((item, idx)=>{
                    return <li key={idx}>
                    <a href={item.link} className="hover:text-yellow-300 transition-colors">
                    {item.title}
                    </a>
                </li>
                })}
            </ul>
          </div>

          {/* Market Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Market Updates</h3>
            <ul className="space-y-2 text-sm">
             {marketUpdates.map((item, idx)=>{
                return <li key={idx}>
                <a href={item.link} className="hover:text-yellow-300 transition-colors">
                  {item.title}
                </a>
              </li>
             })}
            </ul>
          </div>

          {/* Arbitration */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Arbitration</h3>
            <ul className="space-y-2 text-sm">
             {arbitration.map((item, idx)=>{
                return <li key={idx}>
                <a href={item.link} className="hover:text-yellow-300 transition-colors">
                  {item.title}
                </a>
              </li>
             })}
            </ul>
          </div>
        </div>

        {/* Bottom Links and Social Media */}
        <div className="border-t border-white  pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Disclaimer
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Refund Policy
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Sitemap
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm">follow us on</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Copyright Section */}
      <div className="bg-yellow-400 text-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">Copyright ©2016-2024 All right Reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer