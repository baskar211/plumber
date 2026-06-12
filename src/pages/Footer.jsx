export default function Footer() {
    return (
       <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
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
    )}
