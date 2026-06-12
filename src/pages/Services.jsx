import LocationsComponent from "../components/Location";

// --- Reusable SVG Icons ---
const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

// --- Components ---

export default function SwiftRooterServicesPage() {
  const services = [
    {
      title: "Bathroom & Kitchen Plumbing",
      desc: "From leaky faucets to full remodels, we handle all your kitchen and bath plumbing needs with precision.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Drain Cleaning",
      desc: "Fast and effective removal of stubborn blockages in sinks, showers, and main sewer lines.",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Commercial Plumbing",
      desc: "Reliable plumbing services tailored for businesses, ensuring minimal downtime and maximum efficiency.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Leak Detection & Repair",
      desc: "Advanced technology to pinpoint and fix hidden leaks before they cause major water damage.",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Water Heaters",
      desc: "Expert repair, maintenance, and installation of traditional and energy-efficient tankless water heaters.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pipe Repair & Replacement",
      desc: "Durable, long-lasting solutions for burst, corroded, or aging pipes in your property.",
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
   

      <main>
        {/* PAGE HEADER */}
        <div className="bg-white pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">WHAT WE DO</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide a comprehensive range of plumbing solutions to meet all your residential and commercial needs with speed and professionalism.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-lg transition duration-300 flex flex-col">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 flex-grow">{service.desc}</p>
                    <a href="#" className="text-blue-600 font-bold text-sm flex items-center group-hover:text-blue-700 transition">
                      Learn more <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (3 EASY STEPS) */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">OUR PROCESS</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Book your service in 3 easy steps</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-16">
              We've streamlined our process to get your plumbing issues resolved as quickly and painlessly as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Decorative connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-blue-100 z-0 border-dashed border-t-2"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  <CalendarIcon />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Call or Book Online</h4>
                <p className="text-gray-500 text-sm px-4">Contact us via phone or our online form to describe your issue and choose a convenient time.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  <TruckIcon />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. We Arrive Promptly</h4>
                <p className="text-gray-500 text-sm px-4">Our licensed technician arrives on time, diagnoses the problem, and provides an upfront estimate.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  <WrenchIcon />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Job Done to Satisfaction</h4>
                <p className="text-gray-500 text-sm px-4">We complete the repair or installation efficiently and clean up the work area before leaving.</p>
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