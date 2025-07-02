import { Avatar, Select, Tooltip } from 'antd';
import {
      CalendarOutlined,
      TagsOutlined,
      MessageOutlined,
      PhoneOutlined,
      OrderedListOutlined,
      FileOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const OpportunityCard = () => {
      const navigate = useNavigate();
      return (
            <div
                  onClick={() => navigate('/inbox/opportunities/1')}
                  className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer"
            >
                  {/* Header Section */}
                  <div className="flex justify-between items-start">
                        <div>
                              <h2 className="text-lg font-semibold text-gray-800">Olivier Creed</h2>
                              <p className="text-sm text-gray-500">
                                    Source : <span className="text-gray-700">Vehicle Injury</span>
                              </p>
                        </div>
                  </div>

                  {/* Avatars Section */}
                  <div className="flex items-center mt-4 space-x-2">
                        <Avatar.Group maxCount={3}>
                              <Avatar src="https://i.pravatar.cc/40?img=1" />
                              <Avatar src="https://i.pravatar.cc/40?img=2" />
                              <Avatar src="https://i.pravatar.cc/40?img=3" />
                        </Avatar.Group>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                              +2
                        </span>
                  </div>

                  {/* Actions Section */}
                  <div onClick={(e) => e.stopPropagation()} className="flex gap-1 justify-between items-center mt-4">
                        <Tooltip title="Calendar">
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <CalendarOutlined />
                                    <span className="text-sm font-medium">2</span>
                              </div>
                        </Tooltip>
                        <Tooltip
                              // styles={{
                              //       body: {
                              //             backgroundColor: '#f5f5f5',
                              //             color: '#333',
                              //             borderRadius: '4px',
                              //       },
                              // }}

                              title={
                                    <div>
                                          <Select
                                                placeholder="Actions"
                                                onClick={(e) => {
                                                      e.stopPropagation();
                                                }}
                                                style={{ width: 150, height: '100%' }}
                                                size="small"
                                          >
                                                <Select.Option value="new_lead">New Lead</Select.Option>
                                                <Select.Option value="follow_up">Follow Up</Select.Option>
                                                <Select.Option value="contingency_sent">Contingency Sent</Select.Option>
                                                <Select.Option value="won">Won</Select.Option>
                                                <Select.Option value="lost">Lost</Select.Option>
                                          </Select>
                                    </div>
                              }
                        >
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <TagsOutlined />
                                    <span className="text-sm font-medium">2</span>
                              </div>
                        </Tooltip>
                        <Tooltip title="Messages">
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <MessageOutlined />
                                    <span className="text-sm font-medium">2</span>
                              </div>
                        </Tooltip>
                        <Tooltip title="Calls">
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <PhoneOutlined />
                                    <span className="text-sm font-medium">2</span>
                              </div>
                        </Tooltip>
                        <Tooltip title="Tasks">
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <OrderedListOutlined />
                                    <span className="text-sm font-medium">0</span>
                              </div>
                        </Tooltip>
                        <Tooltip title="Documents">
                              <div className="flex items-center px-2 py-2 space-x-1 text-gray-600 bg-gray-100 rounded-md">
                                    <FileOutlined />
                                    <span className="text-sm font-medium">0</span>
                              </div>
                        </Tooltip>
                  </div>
            </div>
      );
};

export default OpportunityCard;
