import { Link } from "react-router-dom";

export default function CampaignCard({ id, title, description, amount, goal, image }) {
  const progress = (amount / goal) * 100;

  return (
    <Link to={`/campaign/${id}`}>

  <div className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover hover:scale-110 transition duration-300"
  />
</div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          ${amount} raised of ${goal}
        </p>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Donate Now
        </button>
      </div>
    </div>

    </Link>
  );
}