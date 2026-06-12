
// --- Reusable SVG Icons ---
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

const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <path d="m9 11 3 3L22 4"/>
  </svg>
);

// --- Components ---

export default function SwiftRooterAboutPage() {
  const team = [
    { name: "James Garcia", role: "Master Plumber", rating: "4.9", reviews: "124", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=500" },
    { name: "Sarah Mitchell", role: "Lead Technician", rating: "4.8", reviews: "98", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" },
    { name: "Robert Thompson", role: "Plumbing Specialist", rating: "5.0", reviews: "156", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100 selection:text-blue-900">
      
  

      <main>
        {/* ABOUT HERO SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">ABOUT US</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                  About SwiftRooter Plumbing
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  SwiftRooter Plumbing has been the trusted name in residential and commercial plumbing for over a decade. We built our reputation on a foundation of hard work, transparent pricing, and an unwavering commitment to customer satisfaction.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're dealing with a midnight emergency, a clogged drain, or planning a major pipe replacement, our certified experts bring the latest technology and years of hands-on experience directly to your door.
                </p>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2">
                       <div className="bg-blue-50 p-1 rounded-full"><CheckCircle /></div>
                       <span className="font-semibold text-gray-900">Licensed Experts</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <div className="bg-blue-50 p-1 rounded-full"><CheckCircle /></div>
                       <span className="font-semibold text-gray-900">24/7 Availability</span>
                   </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
                <div className="flex flex-col justify-end">
                    <img 
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
                      alt="Plumber fixing sink" 
                      className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm"
                    />
                </div>
                <div className="h-full">
                    <img 
                      src="https://framerusercontent.com/images/IM7o451CSmIsTRCLbO5eh6lo.png?scale-down-to=1024" 
                      alt="Smiling Plumber by Van" 
                      className="w-full h-full min-h-[300px] object-cover rounded-2xl shadow-sm"
                    />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EXPERTS SECTION */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">THE EXPERTS</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Some of Our Plumbing Experts</h3>
              </div>
              <p className="text-gray-500 max-w-md text-base md:text-right">
                Our highly trained and background-checked technicians are the best in the business. We ensure every job is done right the first time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center">
                  <div className="h-72 overflow-hidden relative bg-gray-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 border-t border-gray-50 pt-4">
                      <Star /> <span className="font-bold text-gray-900">{member.rating}</span> ({member.reviews} reviews)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">LOCATIONS</h2>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Where Does SwiftRooter Operate?</h3>
              <p className="text-gray-500">We proudly serve multiple regions. Find the office closest to you below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Location 1 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-56 overflow-hidden">
                  <img src="https://framerusercontent.com/images/ur2qMM97ppHtkIIPTYYYk4HRREg.png?scale-down-to=1024" alt="Headquarters" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SwiftRooter Headquarters</h3>
                  <p className="text-gray-500 text-sm flex items-start gap-3">
                    <span className="mt-0.5"><MapPin /></span> 
                    123 Main Street, Suite 200<br/>Cityville, ST 12345
                  </p>
                </div>
              </div>

              {/* Location 2 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-56 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Branch Office" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SwiftRooter Branch Office</h3>
                  <p className="text-gray-500 text-sm flex items-start gap-3">
                    <span className="mt-0.5"><MapPin /></span> 
                    456 Branch Ave, Building B<br/>Townsburg, ST 67890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}