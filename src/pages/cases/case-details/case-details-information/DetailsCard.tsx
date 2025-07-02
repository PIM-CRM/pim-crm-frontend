import { FaComments, FaHistory, FaFileAlt, FaBriefcaseMedical, FaUserTie, FaInfoCircle } from 'react-icons/fa';

const details = [
    { icon: <FaComments className="text-blue-500 text-lg" />, label: 'Contact Preference', value: 'Text' },
    { icon: <FaHistory className="text-blue-500 text-lg" />, label: 'Past two years?', value: 'Yes' },
    { icon: <FaFileAlt className="text-blue-500 text-lg" />, label: 'Police report filed?', value: 'Yes' },
    { icon: <FaBriefcaseMedical className="text-blue-500 text-lg" />, label: 'Medical Attention?', value: 'Yes' },
    { icon: <FaUserTie className="text-blue-500 text-lg" />, label: 'Have an attorney?', value: 'No' },
    { icon: <FaInfoCircle className="text-blue-500 text-lg" />, label: 'Additional Details', value: 'Label' },
];

const DetailsCard = () => {
    return (
        <div className="bg-white rounded-lg p-4 w-full border">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Details</h2>
            <div className="space-y-3">
                {details.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                            {item.icon}
                            <p className="text-sm font-medium text-gray-700">{item.label}</p>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsCard;
