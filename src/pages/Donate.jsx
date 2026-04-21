import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// EmailJS IDs
const SERVICE_ID = "service_zshgayc";
const TEMPLATE_ID = "template_3s478pl";
const PUBLIC_KEY = "ejAkxTLV84M8ZTwjP"; // <-- Replace with your real public key

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [tribute, setTribute] = useState("");
  const [purpose, setPurpose] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [sending, setSending] = useState(false);

  const suggestedAmounts = [25, 50, 100, 250, 500];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const pickAmount = (amt) => setAmount(String(amt));

  const validate = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please select or enter a valid donation amount.");
      return false;
    }
    if (!name.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!email.trim()) {
      alert("Please enter your email address.");
      return false;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    // Data must match template fields exactly
    const donationData = {
      donor_name: name.trim(),
      donor_email: email.trim(),
      donor_phone: phone.trim(),
      donation_amount: String(Number(amount).toFixed(2)),
      donation_purpose: purpose?.trim() || tribute?.trim() || "General Donation",
      donation_frequency: frequency,
      donation_tribute: tribute?.trim() || "",
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        donationData,
        { publicKey: PUBLIC_KEY }
      );

      alert(`Thank you, ${name}! Your donation has been sent successfully.`);

      // reset fields
      setAmount("");
      setFrequency("one-time");
      setTribute("");
      setPurpose("");
      setName("");
      setEmail("");
      setPhone("");

    } catch (error) {
      console.error("EmailJS Error →", error);
      alert("Something went wrong while sending your donation. Please try again.");
    }

    setSending(false);
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#0A1A2F] text-center mb-6">
        Choose Your Donation
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg space-y-6">
        
        {/* Suggested Amounts */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Suggested Amounts</label>
          <div className="flex flex-wrap gap-3">
            {suggestedAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => pickAmount(amt)}
                className={`px-5 py-2 rounded-lg border ${
                  Number(amount) === amt
                    ? "bg-[#1A73E8] text-white"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-[#1A73E8] hover:text-white transition`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Custom Amount</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="$0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Frequency */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Donation Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1A73E8]"
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly Recurring</option>
          </select>
        </div>

        {/* Tribute */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Tribute / Memorial (optional)</label>
          <input
            type="text"
            placeholder="In honor of..."
            value={tribute}
            onChange={(e) => setTribute(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Purpose */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Purpose of Donation (optional)</label>
          <input
            type="text"
            placeholder="Education, Cancer, Medical Outreach..."
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Donor Info */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Your Information</label>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={sending}
          className={`w-full ${
            sending ? "bg-gray-400" : "bg-[#1A73E8] hover:bg-blue-700"
          } text-white py-3 px-6 rounded-lg font-semibold transition`}
        >
          {sending ? "Sending..." : "Donate Now"}
        </button>
      </form>
    </section>
  );
}
