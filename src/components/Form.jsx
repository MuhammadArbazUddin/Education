import React from "react";

const Form = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Stay updated on the latest news
      </h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border-2 bg-[#141412] border-[##AE5F22] focus:outline-none transition-all text-[##AE5F22] text-xs"
        />
        <button className="px-6 py-2 bg-[#AE5F22] rounded-lg font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
