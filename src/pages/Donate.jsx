import { useParams } from "react-router-dom";
import { useState } from "react";
import campaigns from "../data/campaigns";

export default function Donate() {
  const { id } = useParams();

  const campaign = campaigns.find(
    (item) => item.id === parseInt(id)
  );

  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const walletAddress = "0x1234abcd5678efgh9012ijklmnopqrst";

  if (!campaign) {
    return <p className="pt-24 text-center">Campaign not found</p>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 px-4 md:px-6 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Support {campaign.title}
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your contribution helps bring real change. Every donation matters.
        </p>
      </div>

      {/* IMAGE */}
      <div className="h-64 md:h-80 rounded-xl overflow-hidden mb-6">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CAMPAIGN INFO */}
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        {campaign.description}
      </p>

      {/* DONATION BOX */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">

        {/* AMOUNT */}
        <label className="block mb-2 font-medium">
          Enter Amount ($)
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-amber-500 outline-none"
          placeholder="e.g. 5000"
        />

        {/* QUICK AMOUNTS */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[1000, 5000, 10000, 20000].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={`px-4 py-2 border rounded-lg transition ${
                amount == value
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>

        {/* CRYPTO SECTION */}
        <div className="bg-gray-50 p-5 rounded-xl border">

          <h3 className="font-semibold mb-2 text-lg">
            Pay with Crypto
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            Send your donation to the wallet address below:
          </p>

          {/* WALLET */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
            <span className="text-sm break-all">
              {walletAddress}
            </span>

            <button
              onClick={handleCopy}
              className="ml-3 px-3 py-1 bg-black text-white rounded-lg text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* NOTE */}
          <p className="text-xs text-gray-500 mt-3">
            After sending, keep your transaction ID as proof.
          </p>
        </div>

        {/* CONFIRM */}
        <button
          onClick={() =>
            alert("Payment submitted. Awaiting blockchain confirmation.")
          }
          className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          I Have Made Payment
        </button>

        {/* TRUST BADGES */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span>🔒 Secure</span>
          <span>🌍 Global Donations</span>
          <span>📊 Transparent</span>
        </div>

      </div>
    </div>
  );
}