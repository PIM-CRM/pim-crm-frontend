import { ConfigProvider, Tabs } from 'antd';
import Details from './details/Details';
import Task from '../client/task/Task';
import CaseList from './cases/CaseList';

const CompanyInboxDetailsTab = () => {
      const tabItems = [
            {
                  key: '1',
                  label: 'Details',
                  children: <Details />,
            },

            {
                  key: '3',
                  label: 'Cases',
                  children: <CaseList />,
            },
            {
                  key: '4',
                  label: 'Tasks',
                  children: <Task />,
            },
            // {
            //       key: '5',
            //       label: 'Docs',
            //       children: <Document />,
            // },
      ];

      return (
            <div className="">
                  <ConfigProvider>
                        <Tabs
                              defaultActiveKey="1"
                              items={tabItems}
                              renderTabBar={(tabBarProps, _DefaultTabBar) => {
                                    return (
                                          <div className="flex justify-between overflow-x-scroll hide-scrollbar mb-4 bg-[#7878801F] px-2 py-1 rounded-md shadow-md">
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

export default CompanyInboxDetailsTab;
