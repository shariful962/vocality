
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { priceData } from "./data";
import { RiArrowLeftSLine, RiCheckboxCircleFill } from "react-icons/ri";

const EditPersonality = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    time: "1 month",
    features: [],
    prompt: "",
    oneTimeUnlock: false
  });

  // Load the plan from priceData OR API
  useEffect(() => {
    const plan = priceData.find((p) => p.id === Number(id));
    if (plan) {
      setFormData({
        name: plan.type,
        price: plan.price,
        time: "1 month",
        features: plan.features,
        prompt: plan.prompt || "",
        oneTimeUnlock: plan.oneTimeUnlock || false
      });
    }
  }, [id]);

  const handleSave = () => {
    navigate("/personality");
  };

  return (
    <div>
      <div className="flex items-center gap-4 text-3xl mb-5">
        <span
          onClick={() => navigate("/personality")}
          className="cursor-pointer"
        >
          <RiArrowLeftSLine size={28} />
        </span>
        <h2 className="text-3xl font-medium text-dark2">
          Edit Personality
        </h2>
      </div>

      <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">

        {/* Plan Name */}
        <label>Plan Name</label>
        <input
          className="form-control1 bg-white mb-3"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        {/* Personality Price */}
        <label>Personality Price</label>
        <input
          className="form-control1 bg-white mb-3"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />

        {/* Personality Prompt */}
        <label>Personality Prompt</label>
        <textarea
          className="form-control1 bg-white mb-2"
          rows={6}
          cols={50}
          value={formData.prompt}
          onChange={(e) =>
            setFormData({ ...formData, prompt: e.target.value })
          }
        />

        {/* One Time Unlock */}
        <div
          className="flex items-center gap-2 cursor-pointer mb-4"
          onClick={() =>
            setFormData({
              ...formData,
              oneTimeUnlock: !formData.oneTimeUnlock
            })
          }
        >
          <RiCheckboxCircleFill
            size={20}
            className={
              formData.oneTimeUnlock
                ? "text-[#F4B400]"
                : "text-gray-300"
            }
          />
          <span className="text-[#F4B400] font-medium">
            One Time Unlock
          </span>
        </div>

        {/* Features */}
        <div className="mt-4">
          {formData.features.map((feature, i) => (
            <p key={i} className="flex items-center gap-2">
              • {feature}
            </p>
          ))}
        </div>

        {/* Save */}
        <button onClick={handleSave} className="mt-6 authButton">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPersonality;

