// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { CiCircleInfo } from "react-icons/ci";
// import { MdBlock } from "react-icons/md";
// import { CgUnblock } from "react-icons/cg";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { users } from "./data";
// import ConfirmationModal from "../../common/ConfirmationModal"; // Import the new modal component
// import UserDetails from "../../common/UserDetails";

// const Users = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
//   const [userAction, setUserAction] = useState(null); // To store the user for block/unblock
//   const perUsersPage = 10;

//   // Reset to page 1 when search changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search]);

//   // FIXED filtering logic
//   const filterUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase()) ||
//       user.block.toLowerCase().includes(search.toLowerCase())
//   );

//   // Pagination
//   const totalPages = Math.ceil(filterUsers.length / perUsersPage);
//   const startIndex = (currentPage - 1) * perUsersPage;
//   const endIndex = startIndex + perUsersPage;
//   const paginatedUsers = filterUsers.slice(startIndex, endIndex);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const handleInfoClick = (user) => setSelectedUser(user);
//   const handleCloseModal = () => setSelectedUser(null);

//   // Handle block/unblock icon click
//   const handleBlockUnblockClick = (user) => {
//     setUserAction(user);
//     setOpenConfirmationModal(true);
//   };

//   // Handle confirm action
//   const handleConfirmAction = (user) => {
//     // Perform the block/unblock logic here (just toggle for now)
//     user.block = !user.block;
//     setOpenConfirmationModal(false);
//   };

//   return (
//     <div className="bg-[#F9F9FA] rounded-2xl pb-6">
//       <div className="p-4 md:px-12 flex flex-col md:flex-row gap-3 md:items-center justify-between">
//         <h1 className="text-2xl font-semibold mb-4">Users</h1>

//         {/* Search input */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="p-2 w-72 border bg-white border-gray-300 rounded-lg pl-10 outline-none"
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead className="bg-[#FFDD70]">
//             <tr>
//               <th className="px-4 py-4 text-left">Serial</th>
//               <th className="px-4 py-2 text-left">Full Name</th>
//               <th className="px-4 py-2 text-left">Email</th>
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {paginatedUsers.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="5"
//                   className="text-center py-6 text-gray-500 text-lg"
//                 >
//                   No users found
//                 </td>
//               </tr>
//             ) : (
//               paginatedUsers.map((user, index) => (
//                 <tr key={index} className="border-b border-gray-200">
//                   <td className="px-4 py-2">{user.id}</td>
//                   <td className="px-4 py-2">{user.name}</td>
//                   <td className="px-4 py-2">{user.email}</td>
//                   <td className="px-4 py-2">{user.date}</td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="text-[#138487] cursor-pointer"
//                       onClick={() => handleInfoClick(user)}
//                     >
//                       <CiCircleInfo size={24} />
//                     </button>
//                     <button
//                       className={`ml-2 cursor-pointer ${user.block === true ? "text-red-600" : "text-[#138487]"}`}
//                       onClick={() => handleBlockUnblockClick(user)}
//                     >
//                       {user.block === true ? <MdBlock size={24} /> : <CgUnblock size={26} />}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination footer */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex items-center justify-between px-4">
//           <div className="text-lg text-gray-600">
//             SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)} OF{" "}
//             {filterUsers.length}
//           </div>

//           <Stack spacing={2}>
//             <Pagination
//               count={totalPages}
//               page={currentPage}
//               onChange={handlePageChange}
//               shape="rounded"
//               siblingCount={0}
//               boundaryCount={1}
//               sx={{
//                 "& .MuiPaginationItem-root": { color: "#727272" },
//                 "& .Mui-selected": {
//                   backgroundColor: "#FFC300 !important",
//                   color: "white",
//                 },
//               }}
//             />
//           </Stack>
//         </div>
//       )}

//       {selectedUser && (
//         <UserDetails user={selectedUser} onClose={handleCloseModal} />
//       )}

//       {/* Confirmation Modal */}
//       <ConfirmationModal
//         isOpen={openConfirmationModal}
//         onClose={() => setOpenConfirmationModal(false)}
//         onConfirm={handleConfirmAction}
//         user={userAction}
//       />
//     </div>
//   );
// };

// export default Users;



import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { users } from "./data";
import UserDetails from "../../common/UserDetails";

const Users = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filterUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filterUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleInfoClick = (user) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);

  return (
    <div className="bg-[#F9F9FA] rounded-2xl pb-6">
      <div className="p-4 md:px-12 flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-72 border bg-white border-gray-300 rounded-lg pl-10 outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-[#FFDD70]">
            <tr>
              <th className="px-4 py-4 text-left">Serial</th>
              <th className="px-4 py-2 text-left">Full Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500 text-lg">
                  No users found
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.date}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-[#138487] cursor-pointer"
                      onClick={() => handleInfoClick(user)}
                    >
                      <CiCircleInfo size={24} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between px-4">
          <div className="text-lg text-gray-600">
            SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)} OF{" "}
            {filterUsers.length}
          </div>

          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
              siblingCount={0}
              boundaryCount={1}
              sx={{
                "& .MuiPaginationItem-root": { color: "#727272" },
                "& .Mui-selected": {
                  backgroundColor: "#FFC300 !important",
                  color: "white",
                },
              }}
            />
          </Stack>
        </div>
      )}

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Users;

