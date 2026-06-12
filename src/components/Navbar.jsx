export default function Navbar() {
    return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-red-500">Swift</span>
                <span className="text-blue-600">Rooter</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-blue-600 font-semibold text-sm transition border-b-2 border-blue-600 pb-1">Home</a>
              <a href="/services" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">Services</a>
              <a href="/about" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">About Us</a>
              <a href="/contact" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">Contact Us</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a href="/locations" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition shadow-sm shadow-blue-500/30">
                Get Services
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )}