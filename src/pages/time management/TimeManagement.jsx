// import React, { useState } from "react";
// import { GoClock } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";

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
//   const [showModal, setShowModal] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [error, setError] = useState("")

//   const handleAddTime = () => {
//     if (!newTime.trim() || !newPrice.trim()) {
//       setError("Time & Price cannot be empty!");
//       return;
//     }
//     setError("");
//     const newTimeEntry = {
//       id: timeList.length + 1,
//       time: newTime,
//       price: newPrice,
//     };
//     setTimeList([newTimeEntry, ...timeList]);
//     setNewTime("");
//     setNewPrice("");
//     setShowModal(false);
    
   
//   };

//   const handleEditTime = (id) => {
//     const editTime = timeList.find((t) => t.id === id);
//     setNewTime(editTime.time);
//     setNewPrice(editTime.price);
//     setEditingId(id);
//     setIsEditing(true);
//     setShowModal(true);
    
//   };

//   const handleSaveEdit = () => {
//     setError("");
//     const updateList = timeList.map((t) =>
//       t.id === editingId ? { ...t, time: newTime, price: newPrice } : t
//     );
//     setTimeList(updateList);
//     setShowModal(false);
//     setNewTime("");
//     setNewPrice("");
//     setEditingId(null);
//     setIsEditing(false);
    
//   };

//   return (
//     <div>
//       <div className="flex justify-end mb-5">
//         <button
//           onClick={() => {
//             setIsEditing(false); // reset edit mode
//             setEditingId(null);
//             setNewTime("");
//             setNewPrice("");
//             setError("");
//             setShowModal(true);
            
//           }}
//           className="w-max px-8 py-3 rounded-lg bg-Primary text-white cursor-pointer"
//         >
//           + Add Time{" "}
//         </button>
//       </div>
//       <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-200px)]">
//         <div className="flex items-center justify-center flex-wrap gap-7">
//           {timeList.map((t) => (
//             <div
//               key={t.id}
//               className="space-y-2.5 w-[160px] bg-white p-6 text-center rounded-2xl"
//             >
//               <span className="inline-block">
//                 {" "}
//                 <GoClock size={28} className="text-2xl text-Primary" />{" "}
//               </span>
//               <p>{t.time} min</p>
//               <p>${t.price}</p>
//               <button
//                 onClick={() => handleEditTime(t.id)}
//                 className="w-max px-8 py-1.5 rounded-xl bg-black text-white cursor-pointer"
//               >
//                 Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* modal  */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-[#F9F9FA] p-6 pb-12 rounded-lg w-[600px] relative">
//             <div>
//               <span
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-3 right-2 cursor-pointer"
//               >
//                 {" "}
//                 <RxCross2 size={24} />{" "}
//               </span>
//             </div>
//             <h3 className="text-xl text-dark2 font-medium">
//               {isEditing ? "Edit Time" : "Add Time"}
//             </h3>
//             <div className="mt-4">
//               <label>Time</label>
//               <input
//                 type="text"
//                 value={newTime}
//                 onChange={(e) => {
//                   setNewTime(e.target.value);
//                   setError("")
//                 }}
//                 className="form-control1 bg-white"
//               />
//             </div>
//             <div className="mt-4">
//               <label>Price</label>
//               <input
//                 type="text"
//                 value={newPrice}
//                 onChange={(e) => {
//                   setNewPrice(e.target.value);
//                   setError("")
//                 }}
//                 className="form-control1 bg-white"
//               />
//             </div>
//             <button
//               onClick={isEditing ? handleSaveEdit : handleAddTime}
//               className="authButton mt-6"
//             >
//               {isEditing ? "Save Change" : "Save"}
//             </button>
//             {error && <p className="text-red-400 ">{error}</p>}
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
  const [error, setError] = useState("");

  const resetForm = () => {
    setNewTime("");
    setNewPrice("");
    setEditingId(null);
    setIsEditing(false);
    setError("");
  };

  const handleAddTime = () => {
    if (!newTime.trim() || !newPrice.trim()) {
      setError("Time & Price cannot be empty!");
      return;
    }

    setError("");

    const newTimeEntry = {
      id: Date.now(), // 🔥 unique ID
      time: newTime,
      price: newPrice,
    };

    setTimeList([newTimeEntry, ...timeList]);

    resetForm();
    setShowModal(false);
  };

  const handleEditTime = (id) => {
    const editItem = timeList.find((t) => t.id === id);

    setNewTime(editItem.time);
    setNewPrice(editItem.price);
    setEditingId(id);
    setIsEditing(true);
    setError("");

    setShowModal(true);
  };

  const handleSaveEdit = () => {
    if (!newTime.trim() || !newPrice.trim()) {
      setError("Time & Price cannot be empty!");
      return;
    }

    const updated = timeList.map((t) =>
      t.id === editingId ? { ...t, time: newTime, price: newPrice } : t
    );

    setTimeList(updated);

    resetForm();
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="w-max px-8 py-3 rounded-lg bg-Primary text-white cursor-pointer"
        >
          + Add Time
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
                <GoClock size={28} className="text-2xl text-Primary" />
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#F9F9FA] p-6 pb-12 rounded-lg w-[600px] relative">
            <span
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className="absolute top-3 right-2 cursor-pointer"
            >
              <RxCross2 size={24} />
            </span>

            <h3 className="text-xl text-dark2 font-medium">
              {isEditing ? "Edit Time" : "Add Time"}
            </h3>

            <div className="mt-4">
              <label>Time</label>
              <input
                type="text"
                value={newTime}
                onChange={(e) => {
                  setNewTime(e.target.value);
                  setError("");
                }}
                className="form-control1 bg-white"
              />
            </div>

            <div className="mt-4">
              <label>Price</label>
              <input
                type="text"
                value={newPrice}
                onChange={(e) => {
                  setNewPrice(e.target.value);
                  setError("");
                }}
                className="form-control1 bg-white"
              />
            </div>

            <button
              onClick={isEditing ? handleSaveEdit : handleAddTime}
              className="authButton mt-6"
            >
              {isEditing ? "Save Changes" : "Save"}
            </button>

            {error && <p className="text-red-400 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeManagement;
