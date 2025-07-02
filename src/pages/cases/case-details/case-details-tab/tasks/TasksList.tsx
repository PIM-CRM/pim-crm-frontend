import { Button, Tooltip } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import Model from '../../../../../components/shared/Modal';
import { useState } from 'react';
import AddTask from '../../../../tasks/AddTask';

const TasksList = () => {
      const tasks = [
            { id: 1, title: 'Follow up with client regarding treatment', notes: 'Notes' },
            { id: 2, title: 'Follow up with client regarding treatment', notes: 'Notes' },
            { id: 3, title: 'Follow up with client regarding treatment', notes: 'Notes' },
            { id: 4, title: 'Follow up with client regarding treatment', notes: 'Notes' },
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);

      return (
            <div className="p-4 mx-auto w-full bg-white rounded-lg border shadow">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Tasks</h2>
                        <Tooltip title="Add Task">
                              <Button
                                    onClick={() => setIsModalOpen(true)}
                                    type="text"
                                    style={{
                                          color: '#007AFF',
                                          border: '2px solid #007AFF',
                                    }}
                                    // shape="circle"
                                    icon={<PlusOutlined />}
                              />
                        </Tooltip>
                  </div>

                  {/* Task List */}
                  {tasks.map((task) => (
                        <div
                              key={task.id}
                              className="flex items-start py-3 space-x-4 border-b border-gray-200 last:border-none"
                        >
                              {/* Status Indicator */}
                              <div className="">
                                    <img src="/icons/check_circle.png" className="size-6" alt="" />
                              </div>

                              {/* Task Content */}
                              <div className="flex-1">
                                    {/* Task Title */}
                                    <p className="text-sm font-semibold text-gray-900">{task.title}</p>
                                    {/* Task Notes */}
                                    <p className="text-xs text-gray-500">{task.notes}</p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center mt-2 space-x-3">
                                          <button className="text-xs bg-[#F1F1F1E5] text-gray-500 border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-100">
                                                Add Date
                                          </button>
                                          <button className="text-xs bg-[#F1F1F1E5] text-gray-500 border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-100">
                                                Add Time
                                          </button>
                                          <button className="text-xs bg-[#F1F1F1E5] text-gray-500 border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-100">
                                                Add Occurrence #
                                          </button>
                                          <Button
                                                type="default"
                                                size="small"
                                                // shape="circle"
                                                icon={<UserOutlined />}
                                                className="border border-gray-300 bg-[#F1F1F1E5] text-gray-500"
                                          />
                                    </div>
                              </div>
                        </div>
                  ))}

                  <Model width={1000} open={isModalOpen} setOpen={setIsModalOpen} title="Add Task" body={<AddTask />} />
            </div>
      );
};

export default TasksList;
