import { SearchOutlined } from '@ant-design/icons';
import { Collapse, Input } from 'antd';

const Channels = () => {
      const channels = [
            {
                  id: 1,
                  name: 'General',
                  count: 0,
            },
            {
                  id: 2,
                  name: '1st Case',
                  count: 2,
            },
            {
                  id: 3,
                  name: '2nd Case',
                  count: 1,
            },
      ];
      return (
            <div>
                  <div className="flex items-center mx-2 mb-4 space-x-2">
                        <Input
                              placeholder="Search user"
                              className="w-full"
                              prefix={<SearchOutlined className="text-gray-500 text-[20px]" />}
                        />
                  </div>
                  <h1 className="mb-4 text-2xl font-semibold">Direct Messages</h1>
                  <Collapse
                        bordered={false}
                        style={{ background: 'transparent' }}
                        expandIconPosition="right"
                        defaultActiveKey={['1']}
                  >
                        <Collapse.Panel header={<h1 className="text-lg font-semibold"> Channels</h1>} key="1">
                              {channels.map((channel, index) => (
                                    <div key={index} className="flex justify-between my-4 text-[#414141]">
                                          <div className="flex gap-4 items-center">
                                                <img className="object-contain w-8 h-6" src="/images/logo.png" />
                                                <p className="leading-none">{channel.name}</p>
                                          </div>
                                          <p>{channel.count}</p>
                                    </div>
                              ))}
                        </Collapse.Panel>
                  </Collapse>
            </div>
      );
};

export default Channels;
