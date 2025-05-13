import React, { useState } from "react";

interface SipFormData {
  fund: string;
  planType: string;
  amount: string;
  startDate: string;
  endDate: string;
  navDate: string;
}

const SipPerformanceForm: React.FC = () => {
  const [formData, setFormData] = useState<SipFormData>({
    fund: "",
    planType: "",
    amount: "",
    startDate: "",
    endDate: "",
    navDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you can add actual SIP calculation logic or API call
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-600 inline-block">
        SIP Performance
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fund Dropdown */}
        <select
          name="fund"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.fund}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="fundA">Fund A</option>
          <option value="fundB">Fund B</option>
        </select>

        {/* Plan Type Dropdown */}
        <select
          name="planType"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.planType}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="growth">Growth</option>
          <option value="dividend">Dividend</option>
        </select>

        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.amount}
          onChange={handleChange}
        />

        {/* Start Date */}
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.startDate}
          onChange={handleChange}
        />

        {/* End Date */}
        
        <input
          type="date"
          name="endDate"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.endDate}
          onChange={handleChange}
        />

        {/* NAV Date */}
        <input
          type="date"
          name="navDate"
          className="border rounded-md px-4 py-2 w-full"
          value={formData.navDate}
          onChange={handleChange}
        />

        {/* Submit */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SipPerformanceForm;
