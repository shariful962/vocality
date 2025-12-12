

// import React, { useState } from 'react';

// const AiConfiguration = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [formData, setFormData] = useState({
//     titleName: "Image AI Analysis",
//     subtitle: "Upload an image for AI-powered insights",
//     price: "$1.00"
//   });

//   // Toggle edit/save
//   const handleEditToggle = () => {
//     if (isEditing) {
//       // Save logic here
//       console.log("Saved:", formData);
//       // Add API call if needed
//     }
//     setIsEditing(!isEditing);
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)]">
//       <div className='max-w-[800px] mx-auto'>
//         {/* Title Name */}
//         <div className="mb-8">
//           <label htmlFor="titleName" className="block  font-semibold text-[#101625] mb-2">
//             Title Name
//           </label>
//           <input
//             id="titleName"
//             name="titleName"
//             type="text"
//             value={formData.titleName}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white  border-[#FFD300]"
//           />
//         </div>

//         {/* Subtitle */}
//         <div className="mb-8">
//           <label htmlFor="subtitle" className="block  font-semibold text-[#101625] mb-2">
//             Subtitle
//           </label>
//           <input
//             id="subtitle"
//             name="subtitle"
//             type="text"
//             value={formData.subtitle}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white  border-[#FFD300]"
//           />
//         </div>

//         {/* Price */}
//         <div className="mb-8">
//           <label htmlFor="price" className="block  font-semibold text-[#101625] mb-2">
//             Per analysis price
//           </label>
//           <input
//             id="price"
//             name="price"
//             type="text"
//             value={formData.price}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white  border-[#FFD300]"
//           />
//         </div>

//         {/* Edit/Save Button */}
//         <button
//           type="button"
//           onClick={handleEditToggle}
//           className="w-full bg-[#E6BE00] text-white px-5 py-3.5  rounded-[12px] cursor-pointer"
//         >
//           {isEditing ? "Save" : "Edit"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AiConfiguration;



import React, { useState } from 'react';

const AiConfiguration = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    titleName: "Image AI Analysis",
    subtitle: "Upload an image for AI-powered insights",
    price: "$1.00",
    prompt: ""  // Add prompt field to formData
  });

  // Toggle edit/save
  const handleEditToggle = () => {
    if (isEditing) {
      // Save logic here
      console.log("Saved:", formData);
      // Add API call if needed
    }
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)]">
      <div className='max-w-[800px] mx-auto'>
        {/* Title Name */}
        <div className="mb-8">
          <label htmlFor="titleName" className="block font-semibold text-[#101625] mb-2">
            Title Name
          </label>
          <input
            id="titleName"
            name="titleName"
            type="text"
            value={formData.titleName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white border-[#FFD300]"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <label htmlFor="subtitle" className="block font-semibold text-[#101625] mb-2">
            Subtitle
          </label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={formData.subtitle}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white border-[#FFD300]"
          />
        </div>

        {/* Price */}
        <div className="mb-8">
          <label htmlFor="price" className="block font-semibold text-[#101625] mb-2">
            Per analysis price
          </label>
          <input
            id="price"
            name="price"
            type="text"
            value={formData.price}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white border-[#FFD300]"
          />
        </div>

        {/* Image Analysis Prompt */}
        <div className="mb-8">
          <label htmlFor="prompt" className="block font-semibold text-[#101625] mb-2">
            Image analysis Prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Type prompt"
            rows="6"      // Adjust rows for height
            cols="40"     // Adjust cols for width
            className="w-full px-5 py-3.5 border rounded-[12px] outline-none bg-white border-[#FFD300]"
          />
        </div>

        {/* Edit/Save Button */}
        <button
          type="button"
          onClick={handleEditToggle}
          className="w-full bg-[#E6BE00] text-white px-5 py-3.5 rounded-[12px] cursor-pointer"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default AiConfiguration;

