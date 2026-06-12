
// Reusable SVG Icon
const MapPin = ({ className = "w-5 h-5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function LocationsComponent() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-gray-500" />
            Our Location
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Where Does SwiftRooter<br />Operate?
          </h2>
          
          <p className="text-gray-500 text-lg">
            We proudly serve multiple locations, ensuring prompt and<br className="hidden sm:block" /> reliable plumbing services near you.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Location Card 1 - Headquarters */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
            <div className="h-72 overflow-hidden relative bg-gray-100">
              {/* Replace with your actual storefront image */}
              <img 
                src="https://framerusercontent.com/images/ur2qMM97ppHtkIIPTYYYk4HRREg.png?scale-down-to=1024" 
                alt="SwiftRooter Headquarters building" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                SwiftRooter Headquarters
              </h3>
              <div className="flex items-start gap-3 text-gray-800 font-medium text-lg">
                <MapPin className="w-6 h-6 flex-shrink-0 text-gray-500 mt-0.5" />
                <p>123 Main Street, Los Angeles, CA 90001</p>
              </div>
            </div>
          </div>

          {/* Location Card 2 - Office */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
            <div className="h-72 overflow-hidden relative bg-gray-100">
              {/* Replace with your actual storefront image */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="SwiftRooter Branch Office building" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                SwiftRooter Office
              </h3>
              <div className="flex items-start gap-3 text-gray-800 font-medium text-lg">
                <MapPin className="w-6 h-6 flex-shrink-0 text-gray-500 mt-0.5" />
                <p>456 Ocean Drive, San Diego, CA 92101</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}