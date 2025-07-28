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
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 bg-[#fef8f0]">
        <div className="space-y-6">
          <h2 className="text-sm text-orange-500 font-semibold uppercase">Best destinations around the world</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-[#181e4b] leading-tight">
            Travel, <span className="line-through text-red-500">enjoy</span><br /> and live a new <br /> and full life
          </h1>
          <p className="text-gray-500">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">Find out more</Button>
            <Button variant="outline">Play Demo</Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/hero-image.png" alt="Traveler" className="w-full" />
        </div>
      </section>

      {/* Services */}
      <section className="text-center py-16 px-4">
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
      </section>

      {/* Top Destinations */}
      <section className="py-16 px-4">
        <h2 className="text-center text-sm text-gray-500">Top Selling</h2>
        <h1 className="text-center text-3xl font-bold text-[#181e4b] mb-10">Top Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { city: "Rome, Italy", price: "$5.42k", duration: "10 Days Trip", img: "/rome.jpg" },
            { city: "London, UK", price: "$4.2k", duration: "12 Days Trip", img: "/london.jpg" },
            { city: "Full Europe", price: "$15k", duration: "28 Days Trip", img: "/europe.jpg" }
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
      </section>

      {/* Booking Steps */}
      <section className="py-16 px-4 md:px-20 bg-[#fef8f0]">
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
      <section className="py-16 px-4">
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
        <div className="grid md:grid-cols-4 gap-8">
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
        </div>
        <div className="text-center mt-10 text-sm text-gray-400">
          All rights reserved © jadoo.co
        </div>
      </footer>
    </div>
  );
}
