import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data for earnings growth
const data2025 = [
  { month: 'Jan', earnings: 30 },
  { month: 'Feb', earnings: 50 },
  { month: 'Mar', earnings: 105 },
  { month: 'Apr', earnings: 70 },
  { month: 'May', earnings: 60 },
  { month: 'Jun', earnings: 90 },
  { month: 'Jul', earnings: 110 },
  { month: 'Aug', earnings: 85 },
  { month: 'Sept', earnings: 95 },
  { month: 'Oct', earnings: 65 },
  { month: 'Nov', earnings: 80 },
  { month: 'Dec', earnings: 75 },
];

const data2026 = [
  { month: 'Jan', earnings: 40 },
  { month: 'Feb', earnings: 55 },
  { month: 'Mar', earnings: 110 },
  { month: 'Apr', earnings: 80 },
  { month: 'May', earnings: 70 },
  { month: 'Jun', earnings: 100 },
  { month: 'Jul', earnings: 120 },
  { month: 'Aug', earnings: 95 },
  { month: 'Sept', earnings: 105 },
  { month: 'Oct', earnings: 75 },
  { month: 'Nov', earnings: 85 },
  { month: 'Dec', earnings: 90 },
];

const EaringsChart = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const data = selectedYear === '2025' ? data2025 : data2026;

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={{ width: '100%', height: 400, position: 'relative' }}>
     <div  className="flex justify-between items-center mb-4">
         <h2>Earnings Overview {selectedYear}</h2>
      <select
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        {/* You can add more years here if needed */}
      </select>
     </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#8A4FFF"
            fill="url(#gradient)"
            activeDot={{ r: 8 }}
            dot={{ stroke: '#8A4FFF', strokeWidth: 2, fill: '#fff' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stopColor="#8A4FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8A4FFF" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EaringsChart;

