import { useParams } from "react-router-dom";

export default function CampaignDetails() {
  const { id } = useParams();

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Campaign Details
      </h1>

      <p className="text-gray-600 mb-6">
        You are viewing campaign ID: {id}
      </p>

      <div className="h-64 bg-gray-300 mb-6"></div>

      <p className="mb-4">
        This is where full campaign story, images, and donation info will go.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg">
        Donate Now
      </button>
    </div>
  );
}