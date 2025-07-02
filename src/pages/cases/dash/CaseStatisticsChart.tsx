import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Settlement', value: 15, color: '#A855F7' },
    { name: 'Intake / Liability', value: 10, color: '#22C55E' },
    { name: 'Treatment', value: 15, color: '#FACC15' },
    { name: 'Records / Bills', value: 15, color: '#60A5FA' },
    { name: 'Demand', value: 40, color: '#FB923C' },
    { name: 'Negotiations', value: 10, color: '#EF4444' },
    { name: 'Litigation', value: 5, color: '#6B7280' },
];
type Props = {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    value: number;
};

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: Props) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={18} fontWeight={600}>
            {value}%
        </text>
    );
};

const CaseStatisticsChart = () => {
    return (
        <div className="h-full">
            <div className="w-full ">
                <h2 className="text-lg w-full text-start font-semibold text-gray-900 mb-4">Case Statistics</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={150}
                        label={renderCustomLabel}
                        paddingAngle={2}
                        labelLine={false}
                        activeShape={false}
                    >
                        {data.map((entry, index) => (
                            <Cell style={{ outline: 'none' }} key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CaseStatisticsChart;
