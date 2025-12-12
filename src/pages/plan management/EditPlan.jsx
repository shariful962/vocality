// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { priceData } from "./data";

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
//     <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)]">
//       {/* <h2 className="text-xl font-bold mb-4">Edit Plan</h2> */}

//      <div className="max-w-[600px] mx-auto">
//        <h2 className="text-xl font-bold mb-4">Edit Plan</h2>
//        {/* Plan Name */}
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
//      </div>
//     </div>
//   );
// };

// export default EditPlan;



import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { priceData } from "./data";
import { RiArrowLeftSLine } from "react-icons/ri";


const EditPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    time: "1 month",
    features: []
  });

  // Load the plan from priceData OR API
  useEffect(() => {
    const plan = priceData.find((p) => p.id === Number(id));
    if (plan) {
      setFormData({
        name: plan.type,
        price: plan.price,
        time: "1 month",
        features: plan.features
      });
    }
  }, [id]);

 const handleSave = ()=>{
  navigate('/plan')
 }
   
  return (
    <div>
      <div className="flex items-center gap-4 text-3xl mb-5">
        <span onClick={()=>navigate("/plan")} className="cursor-pointer"> <RiArrowLeftSLine size={28} />  </span>
        <h2 className="text-3xl font-medium text-dark2 ">Edit Plan</h2>
      </div>

     <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">
       
       {/* Plan Name */}
      <label>Plan Name</label>
      <input
        className="form-control1 bg-white mb-3"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      {/* Price */}
      <label>Plan Price</label>
      <input
        className="form-control1 bg-white mb-3"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />

      {/* Time */}
      <label>Plan Time</label>
      <select
        className="form-control1 bg-white mb-3"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        <option>1 month</option>
        <option>2 months</option>
        <option>6 months</option>
      </select>

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

export default EditPlan;



