import { ConfigProvider, Tabs } from 'antd';
import MyDetails from './my-details/MyDetails';
import Security from './security/Security';
import Notification from './notification/Notification';
import CreateTeam from './create-team/CreateTeam';
import ManageTeam from './manage-team/ManageTeam';

const SettingsTab = () => {
    const tabItems = [
        {
            key: '1',
            label: 'My Details',
            children: <MyDetails />,
        },

        {
            key: '3',
            label: 'Security',
            children: <Security />,
        },
        {
            key: '4',
            label: 'Create Team',
            children: <CreateTeam />,
        },
        {
            key: '5',
            label: 'Manage Team',
            children: <ManageTeam />,
        },
        {
            key: '6',
            label: 'Notifications',
            children: <Notification />,
        },
    ];

    return (
        <div className="">
            <ConfigProvider>
                <Tabs
                    defaultActiveKey="1"
                    items={tabItems}
                    renderTabBar={(tabBarProps, _DefaultTabBar) => {
                        return (
                            <div className="flex space-x-8 mb-4 bg-[#7878801F] p-1 rounded-[9px] shadow-md">
                                {tabItems.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={(e) => tabBarProps.onTabClick(tab.key, e)}
                                        className={`px-full py-0.5 w-full rounded-[7px]  ${
                                            tabBarProps.activeKey === tab.key
                                                ? 'bg-white text-black shadow-sm shadow-[#d4d3d3e5] font-semibold '
                                                : 'text-gray-500 hover:bg-gray-100'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        );
                    }}
                />
            </ConfigProvider>
        </div>
    );
};

export default SettingsTab;
