export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold">FundRaise</h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Campaigns</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        {/* CTA BUTTON */}
        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          Donate
        </button>
      </div>
    </nav>
  );
}