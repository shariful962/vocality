import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { notification } from "./data";



const NotificationDropdown = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleNotifications = showAll ? notification : notification.slice(0, 4);

  return (
    <div className="absolute right-0 top-[60px] w-[320px] bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200">

      <h2 className="text-center text-lg font-semibold mb-3">
        Notifications
      </h2>

      <div className="border-b mb-3"></div>

      {/* Notification List */}
      <div className={`${showAll ? "max-h-[300px] overflow-y-auto pr-2" : ""}`}>
        {visibleNotifications.map((item) => (
          <div key={item.id} className="flex items-start gap-3 mb-3">
            <IoNotificationsOutline
              className="text-Secondary mt-1"
              size={20}
            />
            <div>
              <p className="font-medium text-sm">{item.notification}</p>
              <p className="text-gray-500 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {!showAll && notification.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full bg-Primary text-white py-2 rounded-lg mt-2 cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default NotificationDropdown;

