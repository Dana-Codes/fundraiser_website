export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Rafa Foundation</h2>
          <p className="text-gray-400">
            Empowering lives through donations and community support.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Campaigns</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email: support@dnc.com</p>
          <p className="text-gray-400">Phone: +233 000 000 0000</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} DNC Foundation. All rights reserved.
      </div>
    </footer>
  );
}