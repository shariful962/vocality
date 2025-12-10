import React, { useState } from "react";

const EditModal = ({ item, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...item });

  const updateFeature = (index, value) => {
    const updated = [...formData.features];
    updated[index] = value;
    setFormData({ ...formData, features: updated });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Pricing</h2>

        {/* Type */}
        <label className="font-medium">Plan Type</label>
        <input
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Price */}
        <label className="font-medium">Price</label>
        <input
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Features */}
        <label className="font-medium">Features</label>
        <div className="space-y-2 mb-4">
          {formData.features.map((feature, index) => (
            <input
              key={index}
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
              className="w-full border p-2 rounded"
            />
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-Primary text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
