// pages/index.tsx
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", dob: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/birthdays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Birthday saved!");
    setForm({ name: "", email: "", dob: "" });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-black shadow-md p-6 rounded w-full max-w-md"
      >
        <h2 className="font-bold text-xl">Birthday Reminder</h2>
        <input
          type="text"
          placeholder="Name"
          className="p-2 border w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="date"
          className="p-2 border w-full"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}
