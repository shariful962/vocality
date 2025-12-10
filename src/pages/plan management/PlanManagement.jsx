
// import React from "react";
// import { IoMdCheckmark } from "react-icons/io";

// const priceData = [
//   {
//     id: 1,
//     price: "29.99",
//     type: "basic",
//     features: [
//       "20 minutes per day",
//       "American A mode",
//       "Basic voice quality",
//       "Email support",
//       "Email and community support",
//     ],
//   },
//   {
//     id: 2,
//     price: "29.99",
//     type: "premium",
//     features: [
//       "Unlimited product updates",
//       "Unlimited product updates",
//       "Unlimited product updates",
//       "Appointment reminders",
//       "Email and community support",
//     ],
//   },
//   {
//     id: 3,
//     price: "49.99",
//     type: "ultimate",
//     features: [
//       "Unlimited product updates",
//       "Unlimited product updates",
//       "Unlimited product updates",
//       "Appointment reminders",
//       "Email and community support",
     
//     ],
//   },
// ];

// const Pricing = () => {
//   return (
//     <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)] text-[#BF9E00]">
//       <div className="flex flex-wrap justify-center gap-6">
//         {priceData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl w-[300px] flex flex-col justify-between"
//           >
//             {/* header */}
//             <div className="py-3 border-b border-Primary">
//               <h2 className="text-2xl font-semibold capitalize text-center">
//                 {item.type}
//               </h2>
//             </div>

//             {/* content */}
//             <div className="p-6 flex flex-col flex-grow">
//               <p className="text-xl font-bold mb-4 text-center">
//                 ${item.price}{" "}
//                 <span className="text-sm ">
//                   {item.type === "premium" || item.type === "ultimate"
//                     ? "2 months"
//                     : "Month"}
//                 </span>
//               </p>

//               <ul className="space-y-3 mb-6 flex-grow">
//                 {item.features.map((feature, index) => {
//                   const isLastTwo =
//                     index >= item.features.length - 2; // last two features
//                   return (
//                     <li key={index} className="flex items-center gap-3">
//                       <div
//                         className={`w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 ${
//                           isLastTwo ? "bg-[#BDBDBD]" : "bg-yellow-500"
//                         } text-white`}
//                       >
//                         <IoMdCheckmark />
//                       </div>
//                       <span>{feature}</span>
//                     </li>
//                   );
//                 })}
//               </ul>

//               {/* button at bottom */}
//               <button className="w-full py-2 bg-Primary text-white rounded-md mt-auto cursor-pointer">
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;


import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import EditModal from "./EditModal";


const initialPriceData = [
  {
    id: 1,
    price: "29.99",
    type: "basic",
    features: [
      "20 minutes per day",
      "American A mode",
      "Basic voice quality",
      "Email support",
      "Email and community support",
    ],
  },
  {
    id: 2,
    price: "29.99",
    type: "premium",
    features: [
      "Unlimited product updates",
      "Unlimited product updates",
      "Unlimited product updates",
      "Appointment reminders",
      "Email and community support",
    ],
  },
  {
    id: 3,
    price: "49.99",
    type: "ultimate",
    features: [
      "Unlimited product updates",
      "Unlimited product updates",
      "Unlimited product updates",
      "Appointment reminders",
      "Email and community support",
    ],
  },
];

const Pricing = () => {
  const [priceData, setPriceData] = useState(initialPriceData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleUpdate = (updatedItem) => {
    setPriceData((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setSelectedItem(null);
  };

  return (
    <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)] text-[#BF9E00]">
      <div className="flex flex-wrap justify-center gap-6">
        {priceData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl w-[300px] flex flex-col justify-between"
          >
            {/* header */}
            <div className="py-3 border-b border-Primary">
              <h2 className="text-2xl font-semibold capitalize text-center">
                {item.type}
              </h2>
            </div>

            {/* content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xl font-bold mb-4 text-center">
                ${item.price}{" "}
                <span className="text-sm ">
                  {item.type === "premium" || item.type === "ultimate"
                    ? "2 months"
                    : "Month"}
                </span>
              </p>

              <ul className="space-y-3 mb-6 flex-grow">
                {item.features.map((feature, index) => {
                  const isLastTwo = index >= item.features.length - 2;
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 ${
                          isLastTwo ? "bg-[#BDBDBD]" : "bg-yellow-500"
                        } text-white`}
                      >
                        <IoMdCheckmark />
                      </div>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Edit button */}
              <button
                onClick={() => setSelectedItem(item)}
                className="w-full py-2 bg-Primary text-white rounded-md mt-auto cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <EditModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default Pricing;



