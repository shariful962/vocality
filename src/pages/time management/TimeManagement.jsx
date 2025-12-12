// import React, { useState } from "react";
// import { GoClock } from "react-icons/go";

// const initialTimeList = [
//   { id: 1, time: "12", price: "4.99" },
//   { id: 2, time: "12", price: "4.99" },
//   { id: 3, time: "12", price: "4.99" },
//   { id: 4, time: "12", price: "4.99" },
//   { id: 5, time: "12", price: "4.99" },
//   { id: 6, time: "12", price: "4.99" },
//   { id: 7, time: "12", price: "4.99" },
//   { id: 8, time: "12", price: "4.99" },
//   { id: 9, time: "12", price: "4.99" },
//   { id: 10, time: "12", price: "4.99" },
//   { id: 11, time: "12", price: "4.99" },
//   { id: 12, time: "12", price: "4.99" },
//   { id: 13, time: "12", price: "4.99" },
//   { id: 14, time: "12", price: "4.99" },
//   { id: 15, time: "12", price: "4.99" },
//   { id: 16, time: "12", price: "4.99" },
//   { id: 17, time: "12", price: "4.99" },
//   { id: 18, time: "12", price: "4.99" },
//   { id: 19, time: "12", price: "4.99" },
//   { id: 20, time: "12", price: "4.99" },
// ];
// const TimeManagement = () => {
//   const [timeList, setTimeList] = useState(initialTimeList);
//   console.log(timeList);

//   return (
//     <div>
//       <div className="flex justify-end mb-5">
//         <button className="w-max px-8 py-3 rounded-lg bg-Primary text-white">
//           + Add Time{" "}
//         </button>
//       </div>
//       <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">
//         <div className="flex items-center justify-center flex-wrap gap-7">
//           {timeList.map((t, i) => (
//             <div key={i} className="space-y-2.5 w-[160px] bg-white p-6 text-center rounded-2xl">
//               <span className="inline-block">
//                 {" "}
//                 <GoClock size={28} className="text-2xl text-Primary" />{" "}
//               </span>
//               <p>{t.time} min</p>
//               <p>${t.price}</p>
//               <button className="w-max px-8 py-1.5 rounded-xl bg-black text-white cursor-pointer">
//                 Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeManagement;

// import React, { useState } from "react";
// import { GoClock } from "react-icons/go";

// const initialTimeList = [
//   { id: 1, time: "12", price: "4.99" },
//   { id: 2, time: "12", price: "4.99" },
//   { id: 3, time: "12", price: "4.99" },
//   { id: 4, time: "12", price: "4.99" },
//   { id: 5, time: "12", price: "4.99" },
//   { id: 6, time: "12", price: "4.99" },
//   { id: 7, time: "12", price: "4.99" },
//   { id: 8, time: "12", price: "4.99" },
//   { id: 9, time: "12", price: "4.99" },
//   { id: 10, time: "12", price: "4.99" },
//   { id: 11, time: "12", price: "4.99" },
//   { id: 12, time: "12", price: "4.99" },
//   { id: 13, time: "12", price: "4.99" },
//   { id: 14, time: "12", price: "4.99" },
//   { id: 15, time: "12", price: "4.99" },
//   { id: 16, time: "12", price: "4.99" },
//   { id: 17, time: "12", price: "4.99" },
//   { id: 18, time: "12", price: "4.99" },
//   { id: 19, time: "12", price: "4.99" },
//   { id: 20, time: "12", price: "4.99" },
// ];

// const TimeManagement = () => {
//   const [timeList, setTimeList] = useState(initialTimeList);
//   const [newTime, setNewTime] = useState("");
//   const [newPrice, setNewPrice] = useState("");
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [isEditing, setIsEditing] = useState(false); // State to check if it's edit mode
//   const [editingId, setEditingId] = useState(null); // ID of the time entry being edited

//   // Add new time entry
//   const handleAddTime = () => {
//     const newTimeEntry = {
//       id: timeList.length + 1,
//       time: newTime || "12", // Default to "12" if no input
//       price: newPrice || "4.99", // Default to "4.99" if no input
//     };
//     setTimeList([...timeList, newTimeEntry]);
//     setNewTime(""); // Clear the input fields after adding
//     setNewPrice("");
//     setShowModal(false); // Close the modal after adding
//   };

//   // Edit an existing time entry
//   const handleEditTime = (id) => {
//     const timeToEdit = timeList.find((t) => t.id === id);
//     setNewTime(timeToEdit.time);
//     setNewPrice(timeToEdit.price);
//     setEditingId(id);
//     setIsEditing(true); // Set editing mode to true
//     setShowModal(true); // Open the modal
//   };

//   // Save the edited time entry
//   const handleSaveEdit = () => {
//     const updatedList = timeList.map((t) =>
//       t.id === editingId ? { ...t, time: newTime, price: newPrice } : t
//     );
//     setTimeList(updatedList);
//     setShowModal(false); // Close the modal after saving
//     setNewTime(""); // Clear the input fields
//     setNewPrice("");
//     setEditingId(null); // Reset editingId
//     setIsEditing(false); // Reset editing mode
//   };

//   return (
//     <div>
//       {/* Add Time Button */}
//       <div className="flex justify-end mb-5">
//         <button
//           onClick={() => setShowModal(true)} // Open modal for adding
//           className="w-max px-8 py-3 rounded-lg bg-Primary text-white"
//         >
//           + Add Time
//         </button>
//       </div>

//       {/* Time List Display */}
//       <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">
//         <div className="flex items-center justify-center flex-wrap gap-7">
//           {timeList.map((t) => (
//             <div key={t.id} className="space-y-2.5 w-[160px] bg-white p-6 text-center rounded-2xl">
//               <span className="inline-block">
//                 <GoClock size={28} className="text-2xl text-Primary" />
//               </span>
//               <p>{t.time} min</p>
//               <p>${t.price}</p>
//               <button
//                 onClick={() => handleEditTime(t.id)} // Open modal for editing
//                 className="w-max px-8 py-1.5 rounded-xl bg-black text-white cursor-pointer"
//               >
//                 Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Add/Edit Time */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-semibold mb-4">
//               {isEditing ? "Edit Time Entry" : "Add New Time Entry"}
//             </h3>
//             <input
//               type="number"
//               value={newTime}
//               onChange={(e) => setNewTime(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//               placeholder="Time (minutes)"
//             />
//             <input
//               type="number"
//               value={newPrice}
//               onChange={(e) => setNewPrice(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//               placeholder="Price"
//             />
//             <div className="flex justify-between">
//               <button
//                 onClick={isEditing ? handleSaveEdit : handleAddTime} // Handle add or edit based on state
//                 className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//               >
//                 {isEditing ? "Save Changes" : "Save"}
//               </button>
//               <button
//                 onClick={() => setShowModal(false)} // Close modal on cancel
//                 className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeManagement;

import React, { useState } from "react";
import { GoClock } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const initialTimeList = [
  { id: 1, time: "12", price: "4.99" },
  { id: 2, time: "12", price: "4.99" },
  { id: 3, time: "12", price: "4.99" },
  { id: 4, time: "12", price: "4.99" },
  { id: 5, time: "12", price: "4.99" },
  { id: 6, time: "12", price: "4.99" },
  { id: 7, time: "12", price: "4.99" },
  { id: 8, time: "12", price: "4.99" },
  { id: 9, time: "12", price: "4.99" },
  { id: 10, time: "12", price: "4.99" },
  { id: 11, time: "12", price: "4.99" },
  { id: 12, time: "12", price: "4.99" },
  { id: 13, time: "12", price: "4.99" },
  { id: 14, time: "12", price: "4.99" },
  { id: 15, time: "12", price: "4.99" },
  { id: 16, time: "12", price: "4.99" },
  { id: 17, time: "12", price: "4.99" },
  { id: 18, time: "12", price: "4.99" },
  { id: 19, time: "12", price: "4.99" },
  { id: 20, time: "12", price: "4.99" },
];
const TimeManagement = () => {
  const [timeList, setTimeList] = useState(initialTimeList);
  const [newTime, setNewTime] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleAddTime = () => {
    const newTimeEntry = {
      id: timeList.length + 1,
      time: newTime || "12",
      price: newPrice || "4.99",
    };
    setTimeList([newTimeEntry, ...timeList]);
    setNewTime("");
    setNewPrice("");
    setShowModal(false);
  };

  const handleEditTime = (id) => {
    const editTime = timeList.find((t) => t.id === id);
    setNewTime(editTime.time);
    setNewPrice(editTime.price);
    setEditingId(id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    const updateList = timeList.map((t) =>
      t.id === editingId ? { ...t, time: newTime, price: newPrice } : t
    );
    setTimeList(updateList);
    setShowModal(false);
    setNewTime("");
    setNewPrice("");
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="w-max px-8 py-3 rounded-lg bg-Primary text-white cursor-pointer"
        >
          + Add Time{" "}
        </button>
      </div>
      <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">
        <div className="flex items-center justify-center flex-wrap gap-7">
          {timeList.map((t) => (
            <div
              key={t.id}
              className="space-y-2.5 w-[160px] bg-white p-6 text-center rounded-2xl"
            >
              <span className="inline-block">
                {" "}
                <GoClock size={28} className="text-2xl text-Primary" />{" "}
              </span>
              <p>{t.time} min</p>
              <p>${t.price}</p>
              <button
                onClick={() => handleEditTime(t.id)}
                className="w-max px-8 py-1.5 rounded-xl bg-black text-white cursor-pointer"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* modal  */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#F9F9FA] p-6 pb-12 rounded-lg w-[600px] relative">
            <div>
              <span
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-2 cursor-pointer"
              >
                {" "}
                <RxCross2 size={24} />{" "}
              </span>
            </div>
            <h3 className="text-xl text-dark2 font-medium">
              {isEditing ? "Edit Time" : "Add Time"}
            </h3>
            <div className="mt-4">
              <label>Time</label>
              <input
                type="text"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="form-control1 bg-white"
              />
            </div>
            <div className="mt-4">
              <label>Price</label>
              <input
                type="text"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="form-control1 bg-white"
              />
            </div>
            <button
              onClick={isEditing ? handleSaveEdit : handleAddTime}
              className="authButton mt-6"
            >
              {isEditing ? "Save Change" : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeManagement;
