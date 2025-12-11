import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const earningsData = [
  { title: "Total Users", amount: "5,000", change: "+15.03%", isMoney: false },
  { title: "Today Earnings", amount: "5,000", change: "+15.03%", isMoney: true },
];

const OverviewCard = ({ title, amount, change, bgColor, isMoney }) => (
  <div className={`px-6 py-8 rounded-2xl ${bgColor}`}>
    <h3 className="text-2xl font-semibold text-dark1 mb-4">{title}</h3>

    <div className="flex items-center justify-between">
      <p className="text-3xl font-semibold text-[#1C1C1C] mt-2">
        {isMoney ? `$${amount}` : amount}
      </p>

      <p className="text-green-600 mt-2 flex items-center gap-x-3 mr-12">
        {change} <FiTrendingUp size={28} />
      </p>
    </div>
  </div>
);

const OverviewLabel = () => {
  return (
    <div className="flex flex-col md:flex-row gap-7">
      {earningsData.map((data, index) => (
        <div key={index} className="w-full md:w-1/2">
          <OverviewCard
            title={data.title}
            amount={data.amount}
            change={data.change}
            isMoney={data.isMoney}
            bgColor={index === 0 ? "bg-[#EDEEFC]" : "bg-[#E6F1FD]"}
          />
        </div>
      ))}
    </div>
  );
};

export default OverviewLabel;
