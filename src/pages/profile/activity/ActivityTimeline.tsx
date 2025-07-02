import { LuUserRound } from 'react-icons/lu';

const ActivityTimeline = () => {
    const events = [
        {
            date: '12-11-2024 4:27pm',
            title: 'Accessing the Account delete',
            iconColor: 'bg-[#54B0FD]',
            icon: <LuUserRound size={20} color="white" />,
            actions: [
                {
                    date: '12-11-2024 4:27pm',
                    text: "The User 'ABC' Successful event after connect password confirmation",
                    statusColor: 'bg-green-500',
                },
                {
                    date: '12-11-2024 4:27pm',
                    text: "The User 'ABC' Successful event after connect password confirmation",
                    statusColor: 'bg-red-500',
                },
            ],
        },
        {
            date: '12-10-2024 4:27pm',
            title: 'Delete Process',
            iconColor: 'bg-red-500',
            icon: <LuUserRound size={20} color="white" />,
            actions: [
                {
                    date: '12-11-2024 4:27pm',
                    text: "The User 'ABC' Successful event after connect password confirmation",
                    statusColor: 'bg-green-500',
                },
                {
                    date: '12-11-2024 4:27pm',
                    text: 'Email Verification',
                    statusColor: 'bg-green-500',
                },
                {
                    date: '12-11-2024 4:27pm',
                    text: 'Phone No Verification',
                    statusColor: 'bg-red-500',
                },
                {
                    date: '12-11-2024 4:27pm',
                    text: "The User 'ABC' Successful event after connect password confirmation",
                    statusColor: 'bg-red-500',
                },
            ],
        },
    ];

    return (
        <div className="p-2 space-y-2">
            <h2 className="text-lg font-semibold">Activities</h2>
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-0 left-6 w-0.5 bg-gray-300 h-full"></div>

                {events.map((event, index) => (
                    <div key={index} className="flex items-start relative">
                        {/* Icon */}
                        <div className="absolute left-2">
                            <div
                                className={`w-8 h-8 ${event.iconColor} text-white rounded-full flex items-center justify-center`}
                            >
                                {event.icon}
                            </div>
                        </div>

                        {/* Event Content */}
                        <div className="ml-12">
                            {/* Date & Title */}
                            <p className="text-gray-500 text-sm">{event.date}</p>
                            <h3 className="text-gray-900 font-medium mb-1">{event.title}</h3>

                            {/* Actions */}
                            <div className="ml-4 space-y-3">
                                {event.actions.map((action, actionIndex) => (
                                    <div key={actionIndex} className="flex items-start gap-2">
                                        {/* Status Indicator */}
                                        <div className={`w-2.5 h-2.5 rounded-full ${action.statusColor} mt-1`}></div>
                                        {/* Action Content */}
                                        <div>
                                            <p className="text-sm text-gray-500">{action.date}</p>
                                            <p className="text-sm bg-[#E7E7E7] p-1 rounded-lg text-gray-700">
                                                {action.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityTimeline;
