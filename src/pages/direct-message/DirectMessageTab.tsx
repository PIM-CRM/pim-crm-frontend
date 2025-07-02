import { ConfigProvider, Tabs } from 'antd';
import Info from './info/Info';
import Files from './files/Files';
import Links from './links/Links';

const DirectMessageTab = () => {
    const tabItems = [
        {
            key: '1',
            label: 'Info',
            children: <Info />,
        },

        {
            key: '3',
            label: 'Files',
            children: <Files />,
        },
        {
            key: '4',
            label: 'Links',
            children: <Links />,
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
                            <div className="flex justify-between mb-4 bg-[#7878801F] px-2 py-1 rounded-md shadow-md">
                                {tabItems.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={(e) => tabBarProps.onTabClick(tab.key, e)}
                                        className={`px-6 py-0.5 rounded-md  ${
                                            tabBarProps.activeKey === tab.key
                                                ? 'bg-white text-black shadow-sm font-semibold '
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

export default DirectMessageTab;
