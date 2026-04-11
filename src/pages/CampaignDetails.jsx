import { useParams } from "react-router-dom";
import campaigns from "../data/campaigns";

export default function CampaignDetails() {
  const { id } = useParams();

  const campaign = campaigns.find(
    (item) => item.id === parseInt(id)
  );

  if (!campaign) {
    return <p className="pt-24 text-center">Campaign not found</p>;
  }

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {campaign.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {campaign.description}
      </p>

      <div className="h-64 bg-gray-300 mb-6"></div>

      <p className="mb-4">
        ₦{campaign.amount} raised of ₦{campaign.goal}
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg">
        Donate Now
      </button>
    </div>
  );
}