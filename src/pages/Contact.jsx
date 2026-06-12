import  { useState } from 'react';

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

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

// --- Components ---

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">{title}</span>
        <span className="text-gray-400 flex-shrink-0">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 text-sm leading-relaxed pr-8">
          {content}
        </div>
      )}
    </div>
  );
};

export default function SwiftRooterContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

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
        {/* PAGE HEADER */}
        <div className="bg-white pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">GET IN TOUCH</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          </div>
        </div>

        {/* CONTACT FORM & INFO SECTION */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Left Column: Contact Info */}
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Get in Touch with Us</h3>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!
                </p>

                <div className="space-y-4">
                  {/* Info Card 1 */}
                  <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <MailIcon />
                      <span className="font-semibold text-gray-900">hello@swiftrooter.com</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition">Message</span>
                  </div>

                  {/* Info Card 2 */}
                  <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <PhoneIcon />
                      <span className="font-semibold text-gray-900">+1 (555) 678-2945</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition">Call Now</span>
                  </div>

                  {/* Info Card 3 */}
                  <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <CalendarIcon />
                      <span className="font-semibold text-gray-900">Online Appointment</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition">Schedule</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-500 text-sm mb-6">Use the contact form to reach out with questions, feedback, or collaboration requests.</p>
                
                <form className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows="4" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-6 rounded-xl transition shadow-md flex justify-center items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    Submit
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ & HELP SECTION */}
        <section className="py-24 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Title & Image */}
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">COMMON QUERIES</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h3>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                    alt="Plumber smiling with wrench" 
                    className="w-full h-[450px] object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Accordion & Need Help Box */}
              <div className="flex flex-col h-full justify-between">
                {/* Accordion */}
                <div className="bg-white mb-10">
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

                {/* CTA Box */}
                <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-12 text-center shadow-xl">
                  <h3 className="text-3xl font-extrabold mb-4">Need More Help?</h3>
                  <p className="text-gray-400 mb-8 text-base">Contact us for support, inquiries, or partnerships - we're happy to assist!</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition shadow-md shadow-blue-500/20 inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Contact Us
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      
    </div>
  );
}