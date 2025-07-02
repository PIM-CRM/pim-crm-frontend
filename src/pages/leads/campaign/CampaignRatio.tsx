import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const dataSets = [
    { google: 36, facebook: 64, label: 'Spend' },
    { google: 75, facebook: 25, label: 'CPA' },
    { google: 55, facebook: 45, label: 'Revenue' },
    { google: 92, facebook: 8, label: 'CPC' },
    { google: 80, facebook: 20, label: 'Clicks' },
];

const COLORS = ['#4CAF50', '#2196F3'];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={14} fontWeight={600}>
            {`${value}%`}
        </text>
    );
};

const CampaignRatio = () => {
    return (
        <div className="bg-[#EFF1F4] my-5 p-4 pb-10 rounded-lg">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-semibold">Campaign Ratio</h1>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-600">Google Ads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-600">Facebook</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-around items-center space-x-4">
                {dataSets.map((data, index) => {
                    const pieData = [
                        { name: 'Google Ads', value: data.google },
                        { name: 'Facebook', value: data.facebook },
                    ];

                    return (
                        <div key={index} className="w-[100%]  h-44">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        innerRadius="50%"
                                        outerRadius="100%"
                                        paddingAngle={0}
                                        dataKey="value"
                                        label={renderCustomLabel}
                                    >
                                        {pieData.map((_entry, i) => (
                                            <Cell style={{ outline: 'none' }} key={`cell-${i}`} fill={COLORS[i]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                            <p className="text-center text-sm text-gray-700 font-semibold mt-2 break-words">
                                {data.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CampaignRatio;
