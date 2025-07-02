import { Select } from 'antd';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', GoogleAds: 40, Facebook: 30 },
    { name: 'Feb', GoogleAds: 50, Facebook: 20 },
    { name: 'Mar', GoogleAds: 70, Facebook: 40 },
    { name: 'Apr', GoogleAds: 60, Facebook: 80 },
    { name: 'May', GoogleAds: 80, Facebook: 90 },
    { name: 'Jun', GoogleAds: 30, Facebook: 70 },
    { name: 'Jul', GoogleAds: 50, Facebook: 60 },
    { name: 'Aug', GoogleAds: 40, Facebook: 50 },
    { name: 'Sep', GoogleAds: 60, Facebook: 70 },
    { name: 'Oct', GoogleAds: 70, Facebook: 60 },
    { name: 'Nov', GoogleAds: 50, Facebook: 40 },
    { name: 'Dec', GoogleAds: 30, Facebook: 20 },
];

const AnalyticsChart = () => {
    const [activeView, setActiveView] = useState('Year');

    return (
        <div className="p-6 bg-[#EFF1F4] w-[65%] rounded-lg  mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Analytics statistics</h3>
                <Select style={{ width: 100 }} value={activeView} onChange={(e) => setActiveView(e)}>
                    <Select.Option value="Month">Month</Select.Option>
                    <Select.Option value="Year">Year</Select.Option>
                    <Select.Option value="Total">Total</Select.Option>
                </Select>
            </div>

            {/* Legend */}
            <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Google Ads</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">Facebook</span>
                </div>
            </div>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="GoogleAds" stroke="#4CAF50" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Facebook" stroke="#2196F3" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AnalyticsChart;
