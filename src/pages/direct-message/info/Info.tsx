import { Avatar } from 'antd';
import { FaCalendarAlt, FaUser, FaEnvelope, FaTags, FaTasks } from 'react-icons/fa';

const Info = () => {
    const info = [
        { icon: <FaUser />, label: 'Creator', value: 'Andrew M.' },
        { icon: <FaCalendarAlt />, label: 'Date of creation', value: '28 May' },
        { icon: <FaEnvelope />, label: 'Status', value: 'Active' },
        { icon: <FaTags />, label: 'Tags', value: '13' },
        { icon: <FaTasks />, label: 'Tasks', value: '4' },
    ];

    return (
        <div className="my-2">
            {info.map((detail, index) => (
                <div key={index} className="flex items-center py-2 border-b last:border-none">
                    <div className="text-white bg-blue-500 rounded-full p-2 text-sm mr-4">{detail.icon}</div>
                    <div className="flex-1 flex justify-between">
                        <p className="text-sm font-medium text-gray-700">{detail.label}</p>
                        {detail.value ? (
                            <p className="text-sm text-gray-600">{detail.value}</p>
                        ) : (
                            <p className="text-sm italic text-gray-400">No additional details</p>
                        )}
                    </div>
                    <div></div>
                </div>
            ))}

            <div className=" mt-10">
                <h3 className="text-lg font-semibold text-secondary mb-4">Members 9</h3>

                <div className="space-y-4">
                    {[
                        { name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
                        { name: 'Jane Doe', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
                        { name: 'Bob', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
                        { name: 'Alice', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
                        { name: 'Charlie', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
                        { name: 'Emily', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
                    ].map((member, index) => (
                        <div key={index} className="flex items-center">
                            <div className="relative">
                                <Avatar size={40} src={member.image} />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <p className="text-sm font-medium text-gray-700 ml-2">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
