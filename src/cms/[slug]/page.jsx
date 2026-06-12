
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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <path d="m9 11 3 3L22 4"/>
  </svg>
);

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// --- Components ---

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">{title}</span>
        <span className="text-gray-500 ml-4">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm leading-relaxed pr-8 animate-in fade-in duration-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default function SwiftRooterCMSPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      title: "What plumbing services do you offer?",
      content: "We provide residential and commercial plumbing services, including emergency repairs, drain cleaning, water heater installation, leak detection, and more."
    },
    {
      title: "Do you offer 24/7 emergency plumbing services?",
      content: "Yes, our team is available 24 hours a day, 7 days a week for any plumbing emergencies you might encounter."
    },
    {
      title: "How can I schedule a service appointment?",
      content: "You can schedule an appointment by calling our hotline directly or using the booking form available on our website."
    },
    {
      title: "How much do your services cost?",
      content: "We offer upfront, flat-rate pricing. After assessing the issue, our technician will provide a detailed estimate before any work begins."
    },
    {
      title: "Do you offer warranties on your plumbing work?",
      content: "Absolutely. We stand behind our work with a 100% satisfaction guarantee and offer warranties on both parts and labor."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation */}
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
              <a href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">Home</a>
              <a href="#" className="text-blue-600 font-semibold text-sm transition border-b-2 border-blue-600 pb-1">Services</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">About Us</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 font-medium text-sm transition">Contact Us</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition shadow-sm shadow-blue-500/30">
                Get Service
              </button>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <a href="#" className="text-gray-400 text-sm font-medium hover:text-blue-600 flex items-center transition">
             &larr; Back to Services
          </a>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600" 
            alt="Plumber fixing sink" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Service Header & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">PLUMBING SERVICES</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Bathroom & Kitchen Plumbing – Installations & Repairs
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Whether you're upgrading fixtures, fixing a leaky faucet, or undertaking a full remodel, our expert plumbers ensure your bathroom and kitchen plumbing functions flawlessly. From sinks and toilets to garbage disposals and dishwashers, we provide reliable installations and prompt repairs.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Rating</div>
                <div className="font-bold text-gray-900 flex items-center gap-1">
                  4.8/5 <Star />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Experience</div>
                <div className="font-bold text-gray-900">15+ Years</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Availability</div>
                <div className="font-bold text-gray-900">24/7</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Response Time</div>
                <div className="font-bold text-gray-900">&lt; 1 Hour</div>
              </div>
            </div>
          </div>

          {/* Sticky CTA Box */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need plumbing service?</h3>
              <p className="text-gray-500 text-sm mb-6">We're ready to help you with your plumbing needs right now.</p>
              <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md">
                Call Us Now
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">WHY CHOOSE US</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose SwiftRooter®</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're committed to providing top-tier service with transparent pricing and guaranteed satisfaction. Here is why homeowners trust us with their most critical plumbing needs.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=800" 
                alt="Plumbing pipes" 
                className="w-full h-[350px] object-cover"
              />
              {/* Floating icon badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-xl">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 hover:shadow-md transition">
              <div className="flex-shrink-0 mt-1"><CheckCircle /></div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Upfront Pricing</h4>
                <p className="text-gray-500 text-sm">No hidden fees or surprise charges. You'll know the exact cost before we start any work.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 hover:shadow-md transition">
              <div className="flex-shrink-0 mt-1"><CheckCircle /></div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Certified & Experienced Plumbers</h4>
                <p className="text-gray-500 text-sm">Our team consists of fully licensed professionals with years of hands-on experience.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 hover:shadow-md transition">
              <div className="flex-shrink-0 mt-1"><CheckCircle /></div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">24/7 Availability</h4>
                <p className="text-gray-500 text-sm">Plumbing emergencies don't wait for business hours. We're available round the clock.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 hover:shadow-md transition">
              <div className="flex-shrink-0 mt-1"><CheckCircle /></div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Fully Licensed & Insured</h4>
                <p className="text-gray-500 text-sm">For your peace of mind, our company meets all state regulations and carries full insurance coverage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* FAQ Left: Title & Image */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">COMMON QUERIES</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                alt="Friendly Plumber" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* FAQ Right: Accordion & CTA */}
          <div className="flex flex-col h-full justify-between">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md shadow-blue-500/20 inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Col */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-red-500">Swift</span>
                  <span className="text-blue-600">Rooter</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Fast, reliable, and professional plumbing & rooter services.
              </p>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">FAQ</a></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Socials Col */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg></a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-end pt-8 border-t border-gray-100">
            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch!</h3>
              <p className="text-gray-500 text-sm mb-4">Leave your email and we will contact you shortly.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Address</h4>
                <p className="text-gray-500 text-xs mb-4">1007 Mountain Dr, British,<br/>Hawaii 81042</p>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Address</h4>
                <p className="text-gray-500 text-xs">1007 Mountain Dr, British,<br/>Hawaii 81042</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Phone</h4>
                <p className="text-gray-500 text-xs mb-4">+1 (555) 478 5143</p>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Email</h4>
                <p className="text-gray-500 text-xs">hello.test@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-100 text-xs text-gray-400">
            <p>© 2024 SwiftRooter Plumbing. All Rights Reserved.</p>
            <p className="flex items-center gap-1 mt-2 md:mt-0">
               Built with Framer
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}