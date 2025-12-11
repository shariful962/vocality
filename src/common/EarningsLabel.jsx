import React from 'react';

const earningsData = [
  { title: "Total Earnings", amount: "$5,000", change: "+15.03%" },
  { title: "Today Earnings", amount: "$5,000", change: "+15.03%" },
  { title: "Personality Earnings", amount: "$5,000", change: "+15.03%" },
  { title: "Time Package Earnings", amount: "$5,000", change: "+15.03%" },
  { title: "Plan Earnings", amount: "$5,000", change: "+15.03%" }
];

const EarningsCard = ({ title, amount, change, bgColor }) => (
  <div className={`p-6 rounded-lg shadow-md text-center ${bgColor}`}>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-2xl font-semibold text-gray-900 mt-2">{amount}</p>
    <p className="text-sm text-green-600 mt-2">{change}</p>
  </div>
);

const  EarningsLabel=()=> {
  return (
    <div className="flex flex-wrap lg:justify-start gap-7  flex-1 ">
      {earningsData.map((data, index) => (
        <div key={index} className='w-full lg:w-[280px]'>
          <EarningsCard 
          
          title={data.title}
          amount={data.amount}
          change={data.change}
          bgColor={
            index === 0
              ? 'bg-purple-100'
              : index === 1
              ? 'bg-blue-100'
              : index === 2
              ? 'bg-teal-100'
              : index === 3
              ? 'bg-yellow-100'
              : 'bg-pink-100'
          }
        />
        </div>
      ))}
    </div>
  );
}

export default EarningsLabel;