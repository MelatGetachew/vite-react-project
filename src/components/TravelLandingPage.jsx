import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaPlaneDeparture, FaCalendarAlt, FaRegCreditCard } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";


export default function TravelLandingPage() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-20 py-6 bg-white">
  <h1 className="text-2xl font-bold text-[#181e4b]">Jadoo</h1>
  <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
    <a href="#">Destinations</a>
    <a href="#">Hotels</a>
    <a href="#">Flights</a>
    <a href="#">Bookings</a>
    <a href="#">Login</a>
    <button className="px-4 py-1 border border-gray-400 rounded-full text-[#181e4b] bg-transparent">
  Sign up</button>


    <div className="ml-2 text-gray-600 cursor-pointer">EN ⌄</div>
  </nav>
</header>

    
  
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 bg-white">
  <div className="space-y-6">
    <h2 className="text-sm text-orange-500 font-semibold uppercase">Best destinations around the world</h2>
    <h1 className="text-4xl md:text-6xl font-bold text-[#181e4b] leading-tight">
      Travel, <span className="border-b-4 border-orange-500 inline-block">enjoy</span><br />
      and live a new <br /> and full life
    </h1>
    <p className="text-gray-500">
      Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
      Park gate sell they west hard for the.
    </p>
    <div className="flex gap-4">
      <Button className="bg-yellow-400 text-white hover:bg-yellow-500">Find out more</Button>
      <Button variant="outline" className="flex items-center gap-2 border border-gray-300">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M10.804 8.354L5.96 11.55A.5.5 0 0 1 5.2 11.1V4.9a.5.5 0 0 1 .76-.45l4.844 3.196a.5.5 0 0 1 0 .708z"/></svg>
        Play Demo
      </Button>
    </div>
  </div>
  <div className="mt-10 md:mt-0">
    <img
  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  alt="Traveler"
  className="w-full"
/>
  </div>
</section>


      {/* Services */}
      <section className="text-center py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-xl text-gray-400">Category</h2>
    <h1 className="text-3xl font-bold text-[#181e4b] mt-2">We Offer Best Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
      {[
        { title: "Calculated Weather", desc: "Built Wicket longer admire do barton vanity itself do in it." },
        { title: "Best Flights", desc: "Engrossed listening. Park gate sell they west hard for the." },
        { title: "Local Events", desc: "Barton vanity itself do in it. Preferred to men it engrossed listening." },
        { title: "Customization", desc: "We deliver outsourced aviation services for military customers." }
      ].map((item, index) => (
        <Card key={index} className="p-4 text-left">
          <CardContent>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Top Destinations */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-center text-sm text-gray-500">Top Selling</h2>
    <h1 className="text-center text-3xl font-bold text-[#181e4b] mb-10">Top Destinations</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { city: "Rome, Italy", price: "$5.42k", duration: "10 Days Trip", img: "https://qtxasset.com/quartz/qcloud1/media/image/travelagentcentral/1544476629/ColosseumRomevwalakteiStockGettyImagesPlusGettyImages.jpg/ColosseumRomevwalakteiStockGettyImagesPlusGettyImages.jpg?VersionId=8Wt_BNtEzqQ45ee8zdeFkLXdBecNFNnP" },
        { city: "London, UK", price: "$4.2k", duration: "12 Days Trip", img: "https://www.studying-in-uk.org/wp-content/uploads/2020/09/Big-Ben-London.jpg" },
        { city: "Full Europe", price: "$15k", duration: "28 Days Trip", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.explore.com%2F1636887%2Fdestination-rick-steves-most-underrated-croatia-europe-zagreb%2F&psig=AOvVaw38xEtSRP184QzcwiISqG5l&ust=1753981322107000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOiM5t-H5Y4DFQAAAAAdAAAAABAS" },
      ].map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <img src={item.img} alt={item.city} className="w-full h-48 object-cover" />
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">{item.city}</h3>
            <p className="text-sm text-gray-500">{item.duration} • {item.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Booking Steps */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-xl font-bold text-[#181e4b] mb-6">Book Your Next Trip In 3 Easy Steps</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700"><MdOutlinePlace /> Choose Destination</li>
            <li className="flex items-center gap-3 text-gray-700"><FaRegCreditCard /> Make Payment</li>
            <li className="flex items-center gap-3 text-gray-700"><FaCalendarAlt /> Reach Airport on Selected Date</li>
          </ul>
          <div>
            <img src="/trip-greece.jpg" alt="Trip" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-xl font-bold text-[#181e4b] mb-6">What People Say About Us.</h2>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.
              Of believed or diverted no."
            </p>
            <p className="font-bold text-[#181e4b]">Mike Taylor</p>
            <p className="text-sm text-gray-500">Lahore, Pakistan</p>
          </CardContent>
        </Card>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-purple-100 px-4 text-center">
        <h2 className="text-xl font-bold text-[#181e4b] mb-4">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        <div className="flex max-w-md mx-auto">
          <Input placeholder="Your email" className="rounded-l-full" />
          <Button className="rounded-r-full bg-orange-500 hover:bg-orange-600">Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 px-4 md:px-20 border-t">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h1 className="font-bold text-xl text-[#181e4b] mb-4">Jadoo.</h1>
            <p className="text-gray-500 text-sm">Book your trip in minute, get full control for much longer.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#181e4b] mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#181e4b] mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#181e4b] mb-3">More</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Airline fees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>



           <div className="flex flex-col items-center space-y-4">
      <div className="flex gap-4 text-[#181e4b] text-xl">
        <a href="#"><img src="https://api.iconify.design/fa6-brands/facebook-f.svg" alt="Facebook" className="w-5 h-5" /><i className="fab fa-facebook"></i></a>
        <a href="#"><img src="https://api.iconify.design/fa6-brands/twitter.svg" alt="Twitter" className="w-5 h-5" /><i className="fab fa-twitter"></i></a>
        <a href="#"><img src="https://api.iconify.design/fa6-brands/instagram.svg" alt="Instagram" className="w-5 h-5" /><i className="fab fa-instagram"></i></a>
      </div >
      <p className="text-[#181e4b] font-semibold text-sm">Download our app</p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-black text-white text-sm rounded-md flex items-center gap-2">
          <i className="fab fa-google-play"></i> Play Store</button>
        <button className="px-4 py-2 bg-black text-white text-sm rounded-md flex items-center gap-2">
          <i className="fab fa-apple"></i>Apple Store</button>
      </div>
    </div>

        </div>
        <div className="text-center mt-10 text-sm text-gray-400">
          All rights reserved © jadoo.co
        </div>
      </footer>
    </div>
  );
}
