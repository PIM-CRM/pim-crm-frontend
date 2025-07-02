import { ConfigProvider, Tabs } from 'antd';
import Details from './details/Details';
import Intake from './intake/Intake';
import Activity from './activity/Activity';
import Task from './task/Task';
import Document from './document/Document';

const ClientInboxDetailsTab = () => {
      const tabItems = [
            {
                  key: '1',
                  label: 'Details',
                  children: <Details />,
            },

            {
                  key: '3',
                  label: 'Intake',
                  children: <Intake />,
            },
            {
                  key: '4',
                  label: 'Tasks',
                  children: <Task />,
            },
            {
                  key: '5',
                  label: 'Docs',
                  children: <Document />,
            },
            {
                  key: '6',
                  label: 'Activity',
                  children: <Activity />,
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
                                          <div className="flex justify-between  mb-4 bg-[#7878801F] px-2 py-1 rounded-md shadow-md">
                                                {tabItems.map((tab) => (
                                                      <button
                                                            key={tab.key}
                                                            onClick={(e) => tabBarProps.onTabClick(tab.key, e)}
                                                            className={`px-2 py-0.5 rounded-md  ${
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

export default ClientInboxDetailsTab;
