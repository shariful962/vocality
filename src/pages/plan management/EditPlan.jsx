// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const EditPlan = () => {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     time: "1 month",
//     features: []
//   });

//   // Load the plan from priceData OR API
//   useEffect(() => {
//     const plan = priceData.find((p) => p.id === Number(id));
//     if (plan) {
//       setFormData({
//         name: plan.type,
//         price: plan.price,
//         time: "1 month",
//         features: plan.features
//       });
//     }
//   }, [id]);

//   return (
//     <div className="p-6 bg-white rounded-2xl">
//       <h2 className="text-xl font-bold mb-4">Edit Plan</h2>

//       {/* Plan Name */}
//       <label>Plan Name</label>
//       <input
//         className="border p-2 w-full rounded mb-3"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       />

//       {/* Price */}
//       <label>Plan Price</label>
//       <input
//         className="border p-2 w-full rounded mb-3"
//         value={formData.price}
//         onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//       />

//       {/* Time */}
//       <label>Plan Time</label>
//       <select
//         className="border p-2 w-full rounded mb-3"
//         value={formData.time}
//         onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//       >
//         <option>1 month</option>
//         <option>2 months</option>
//         <option>6 months</option>
//       </select>

//       {/* Features */}
//       <div className="mt-4">
//         {formData.features.map((feature, i) => (
//           <p key={i} className="flex items-center gap-2">
//             • {feature}
//           </p>
//         ))}
//       </div>

//       {/* Save */}
//       <button className="mt-6 bg-yellow-500 rounded p-2 text-white w-full">
//         Save
//       </button>
//     </div>
//   );
// };

// export default EditPlan;


// import React, { useState } from "react";
// import { useNavigate, useParams, useOutletContext } from "react-router-dom";

// const EditPlan = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { priceData, handleUpdate } = useOutletContext();

//   const item = priceData.find((p) => p.id === Number(id));

//   const [formData, setFormData] = useState({ ...item });

//   const updateFeature = (index, value) => {
//     const updated = [...formData.features];
//     updated[index] = value;
//     setFormData({ ...formData, features: updated });
//   };

//   const saveHandler = () => {
//     handleUpdate(formData);
//     navigate("/plan"); // close modal
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//       <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Edit Pricing</h2>

//         <label className="font-medium">Plan Type</label>
//         <input
//           value={formData.type}
//           onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//           className="w-full border p-2 rounded mb-3"
//         />

//         <label className="font-medium">Price</label>
//         <input
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="w-full border p-2 rounded mb-3"
//         />

//         <label className="font-medium">Features</label>
//         <div className="space-y-2 mb-4">
//           {formData.features.map((feature, index) => (
//             <input
//               key={index}
//               value={feature}
//               onChange={(e) => updateFeature(index, e.target.value)}
//               className="w-full border p-2 rounded"
//             />
//           ))}
//         </div>

//         <div className="flex justify-between mt-4">
//           <button
//             onClick={() => navigate("/pricing")}
//             className="px-4 py-2 bg-gray-300 rounded-md"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={saveHandler}
//             className="px-4 py-2 bg-Primary text-white rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditPlan;




import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EditPlan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const handleUpdate = location.state?.handleUpdate;
  const priceData = JSON.parse(localStorage.getItem("priceData")) || [];

  const item = priceData.find((p) => p.id === Number(id));

  const [formData, setFormData] = useState({ ...item });

  const updateFeature = (index, value) => {
    const updated = [...formData.features];
    updated[index] = value;
    setFormData({ ...formData, features: updated });
  };

  const saveHandler = () => {
    handleUpdate(formData);
    navigate("/plan");
  };

  return (
    <div className="p-6 bg-[#F9F9FA] min-h-[calc(100vh-100px)]">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Pricing</h2>

        <label className="font-medium">Plan Type</label>
        <input
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />

        <label className="font-medium">Price</label>
        <input
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          className="w-full border p-2 rounded mb-3"
        />

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
            onClick={() => navigate("/plan")}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={saveHandler}
            className="px-4 py-2 bg-Primary text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlan;


