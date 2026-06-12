import  { useState } from 'react';
import LocationsComponent from '../components/Location';

// --- Reusable SVG Icons ---
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <path d="m9 11 3 3L22 4"/>
  </svg>
);

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

// --- Components ---

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</span>
        <span className="text-gray-400 ml-4">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm leading-relaxed pr-8">
          {content}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    { title: "General Plumbing", image: "https://framerusercontent.com/images/kxxjxhaTxA3drKJQz9bVjDKdIT8.png?width=2048&height=1432", desc: "Comprehensive plumbing services for leaks, clogs, and routine maintenance." },
    { title: "Drain Cleaning", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600", desc: "Fast and effective removal of stubborn blockages in sinks, showers, and main lines." },
    { title: "Water Heater Repair", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600", desc: "Expert troubleshooting, repair, and installation of tankless and traditional water heaters." },
    { title: "Leak Detection", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600", desc: "Advanced technology to locate and fix hidden leaks before they cause major water damage." },
    { title: "Pipe Repair & Replacement", image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=600", desc: "Durable solutions for burst, corroded, or aging pipes in your home or business." },
    { title: "Sewer Line Services", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600", desc: "Professional inspection, repair, and replacement of damaged sewer lines." }
  ];

  const team = [
    { name: "James Garcia", role: "Master Plumber", rating: "4.9", reviews: "124", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=500" },
    { name: "Sarah Mitchell", role: "Lead Technician", rating: "4.8", reviews: "98", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" },
    { name: "Robert Thompson", role: "Plumbing Specialist", rating: "5.0", reviews: "156", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" }
  ];

  const faqs = [
    { title: "What plumbing services do you offer?", content: "We provide residential and commercial plumbing services, including emergency repairs, drain cleaning, water heater installation, leak detection, and more." },
    { title: "Do you offer 24/7 emergency plumbing services?", content: "Yes, our team is available 24 hours a day, 7 days a week for any plumbing emergencies you might encounter." },
    { title: "How can I schedule a service appointment?", content: "You can schedule an appointment by calling our hotline directly or using the booking form available on our website." },
    { title: "How much do your services cost?", content: "We offer upfront, flat-rate pricing. After assessing the issue, our technician will provide a detailed estimate before any work begins." },
    { title: "Do you offer warranties on your plumbing work?", content: "Absolutely. We stand behind our work with a 100% satisfaction guarantee and offer warranties on both parts and labor." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100 selection:text-blue-900">
      


      <main>
        {/* HERO SECTION */}
        <section className="relative w-full h-[600px] flex items-center justify-center">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1604928141064-207cea6f5722?auto=format&fit=crop&q=80&w=2000" 
              alt="Plumber with Van" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-white/70 sm:bg-white/50 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="text-red-500">Swift</span><span className="text-blue-600">Rooter</span> – Fast & Reliable Plumbing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm">
              We fix leaks, unclog drains, and handle all your plumbing emergencies with speed and precision.
            </p>
            
            {/* Floating Booking Bar */}
            <div className="bg-white p-3 rounded-full shadow-2xl flex flex-col sm:flex-row items-center max-w-2xl mx-auto border border-gray-100">
              <div className="flex items-center w-full px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-200">
                <MapPin />
                <input 
                  type="text" 
                  placeholder="Enter your zip code..." 
                  className="w-full px-3 py-2 text-gray-700 focus:outline-none bg-transparent"
                />
              </div>
              <button className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3 bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
              </div>
              <a href="#" className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
                View All <span className="ml-1">&rarr;</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition">
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.desc}</p>
                    <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:text-blue-700 transition">
                      Learn more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US & STATS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">WHY CHOOSE US</h2>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose SwiftRooter®?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're committed to providing top-tier service with transparent pricing and guaranteed satisfaction. Our expert team is ready to tackle any plumbing challenge.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" alt="Plumbing Work" className="w-full h-[300px] object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Upfront Pricing</h4>
                    <p className="text-sm text-gray-500">No hidden fees or surprise charges ever.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Certified Plumbers</h4>
                    <p className="text-sm text-gray-500">Fully licensed and experienced experts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">24/7 Availability</h4>
                    <p className="text-sm text-gray-500">Ready to help around the clock, any day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fully Licensed & Insured</h4>
                    <p className="text-sm text-gray-500">For your complete peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Quality Materials</h4>
                    <p className="text-sm text-gray-500">We use only high-grade, durable parts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1.5 rounded-full"><CheckCircle /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Clean-Up Included</h4>
                    <p className="text-sm text-gray-500">We leave your home as clean as we found it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Circular Badges Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-4 bg-white shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900">100% Satisfaction Guaranteed</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-4 bg-white shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900">24/7 Emergency Service Available</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-4 bg-white shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900">Upfront Pricing Before Work Begins</h4>
              </div>
            </div>

          </div>
        </section>

        {/* BLUE CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-blue-600 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-10 md:p-16 relative z-10 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="font-bold tracking-wider uppercase text-sm">SwiftRooter Quality</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Plumbing services you can trust, every single time.</h2>
                <p className="text-blue-100 mb-8 max-w-md">Our team is equipped to handle any plumbing challenge, big or small. Get in touch today for expert assistance.</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition shadow-lg">
                  Get Services Now
                </button>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4 p-8 relative z-10 h-full">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-[250px] w-full object-cover shadow-lg translate-y-8" alt="Plumbing"/>
                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-[250px] w-full object-cover shadow-lg -translate-y-4" alt="Plumbing"/>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTS SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet Some of Our Plumbing Experts</h2>
              <p className="text-gray-500">Our highly trained and background-checked technicians are the best in the business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center">
                  <div className="h-64 overflow-hidden relative bg-gray-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <Star /> <span className="font-bold text-gray-900">{member.rating}</span> ({member.reviews} reviews)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & CONTACT BOX */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* FAQ Left: Image */}
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">COMMON QUERIES</h2>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                    alt="Friendly Plumber" 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* FAQ Right: Accordion & CTA */}
              <div className="flex flex-col h-full justify-center">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index}
                      title={faq.title}
                      content={faq.content}
                      isOpen={openFaq === index}
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    />
                  ))}
                </div>

                <div className="bg-gray-900 text-white rounded-2xl p-10 text-center shadow-xl">
                  <h3 className="text-2xl font-bold mb-3">Need More Help?</h3>
                  <p className="text-gray-400 mb-8">Contact us for support, inquiries, or partnerships - we're happy to assist!</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md shadow-blue-500/20 inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATIONS SECTION */}
      <LocationsComponent/>

      </main>


     
    </div>
  );
}