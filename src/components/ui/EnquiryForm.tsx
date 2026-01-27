"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      alert("Inquiry sent successfully!");
      form.reset();
    } else {
      alert("Failed to send inquiry. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition";

  const selectClass = inputClass;
  const textareaClass = inputClass + " min-h-[100px] resize-y";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl space-y-6 rounded-2xl bg-white p-6 shadow-lg md:p-8"
    >
      {/* <h2 className="text-2xl font-semibold text-gray-900">
        Event Enquiry
      </h2> */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={inputClass}
        />

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className={inputClass}
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className={inputClass}
        />

        {/* Event Type */}
        <select
          name="eventType"
          required
          className={selectClass}
        >
          <option value="">Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Engagement/Roka">Engagement / Roka</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Events">Corporate Events</option>
          <option value="Other">Other</option>
        </select>

        {/* Event Date */}
        <input
          type="date"
          name="eventDate"
          required
          className={inputClass}
        />

        {/* Guests */}
        <select
          name="guests"
          required
          className={selectClass}
        >
          <option value="">Guests</option>
          <option value="Less than 50">Less than 50</option>
          <option value="50 - 100">50 - 100</option>
          <option value="100 - 200">100 - 200</option>
          <option value="200 - 300">200 - 300</option>
          <option value="300+">300+</option>
        </select>
      </div>

      {/* Location */}
      <textarea
        name="location"
        placeholder="Event Location (Full Address or Landmark)"
        required
        className={textareaClass}
      />

      {/* Services */}
      <textarea
        name="services"
        placeholder="What Services do you need? (like dinner, or complete wedding package)
*"
        required
        className={textareaClass}
      />

      {/* Budget + Preferred Time */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <select
    name="budget"
    required
    className={selectClass}
  >
    <option value="">Budget Range</option>
    <option value="Under ₹25,000">Under ₹25,000</option>
    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
    <option value="₹1,00,000 – ₹2,00,000">₹1,00,000 – ₹2,00,000</option>
    <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
    <option value="₹5,00,000+">₹5,00,000+</option>
    <option value="Not sure yet">Not sure yet</option>
  </select>

  <select
    name="preferredTime"
    required
    className={selectClass}
  >
    <option value="">Preferred Contact Time</option>
    <option value="Morning (9 AM – 12 PM)">Morning</option>
    <option value="Afternoon (12 PM – 4 PM)">Afternoon</option>
    <option value="Evening (4 PM – 8 PM)">Evening</option>
    <option value="Anytime">Anytime</option>
  </select>
</div>


      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
