import React from 'react';
import { Table, Pagination, Tooltip, Input, Select, Avatar } from 'antd';
import { BiSearch } from 'react-icons/bi';

const data = [
      {
            key: '1',
            taskName: 'Redesign Checkout Flow',
            teamManagers: 'Carli Bryant',
            assignedBy: 'Rob Kardashian',
            assignedTo: 'Carli Bryant',
            status: { text: 'In Progress', color: '#facc15' },
            runTime: '5 Days',
            dueTime: '10 Jun, 2024',
      },
      {
            key: '2',
            taskName: 'Create Design System',
            teamManagers: 'Samantha Jones',
            assignedBy: 'Carli Bryant',
            assignedTo: 'Rob Kardashian',
            status: { text: 'Pending', color: '#f97316' },
            runTime: '3 Days',
            dueTime: '12 Jun, 2024',
      },
      {
            key: '3',
            taskName: 'Develop Landing Page',
            teamManagers: 'Andrew Lee',
            assignedBy: 'Rob Kardashian',
            assignedTo: 'Carli Bryant',
            status: { text: 'Done', color: '#22c55e' },
            runTime: '7 Days',
            dueTime: '15 Jun, 2024',
      },
      {
            key: '4',
            taskName: 'Database Optimization',
            teamManagers: 'Sarah Johnson',
            assignedBy: 'Rob Kardashian',
            assignedTo: 'Samantha Jones',
            status: { text: 'In Progress', color: '#facc15' },
            runTime: '10 Days',
            dueTime: '18 Jun, 2024',
      },
      {
            key: '5',
            taskName: 'UI/UX Improvements',
            teamManagers: 'John Smith',
            assignedBy: 'Carli Bryant',
            assignedTo: 'Andrew Lee',
            status: { text: 'Pending', color: '#f97316' },
            runTime: '6 Days',
            dueTime: '20 Jun, 2024',
      },
];

const columns = [
      {
            title: 'Task Name',
            dataIndex: 'taskName',
            key: 'taskName',
      },
      {
            title: 'Team Managers',
            dataIndex: 'teamManagers',
            key: 'teamManagers',
            render: () => (
                  <Avatar.Group>
                        <Avatar src="/user.svg" />
                        <Avatar src="/user.svg" />
                        <Avatar src="/user.svg" />
                        <Tooltip title="2 more users">
                              <Avatar style={{ backgroundColor: '#87d068' }}>+2</Avatar>
                        </Tooltip>
                  </Avatar.Group>
            ),
      },
      {
            title: 'Assign By',
            dataIndex: 'assignedBy',
            key: 'assignedBy',
      },
      {
            title: 'Assign To',
            dataIndex: 'assignedTo',
            key: 'assignedTo',
      },
      {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: { text: string; color: string }) => (
                  <div
                        style={{
                              backgroundColor: status.color,
                        }}
                        className={`p-1 text-center text-white rounded-2xl`}
                  >
                        <p>{status.text}</p>
                  </div>
            ),
      },
      {
            title: 'Run Time',
            dataIndex: 'runTime',
            key: 'runTime',
      },
      {
            title: 'Due Time',
            dataIndex: 'dueTime',
            key: 'dueTime',
      },
      {
            title: 'Action',
            key: 'action',
            render: (_text: string, _record: any, _index: any) => (
                  <div className="flex gap-2 items-center">
                        <Tooltip title="Note">
                              <img className="cursor-pointer" src="/icons/action/squre.png" alt="" />
                        </Tooltip>
                        {/* <Tooltip title="Signature">
                    <img className="cursor-pointer" src="/icons/action/pen.png" alt="" />
                </Tooltip> */}
                        <Tooltip title="Download">
                              <img className="cursor-pointer" src="/icons/action/right.png" alt="" />
                        </Tooltip>
                        <Tooltip title="Preview">
                              <img className="cursor-pointer" src="/icons/action/eye.png" alt="" />
                        </Tooltip>
                        <Tooltip title="Delete">
                              <img className="cursor-pointer" src="/icons/action/trash.png" alt="" />
                        </Tooltip>
                        <Tooltip title="More">
                              <img className="cursor-pointer" src="/icons/action/ellipsis.png" alt="" />
                        </Tooltip>
                  </div>
            ),
      },
];

const TasksTable = () => {
      const [currentPage, setCurrentPage] = React.useState(1);

      const handlePaginationChange = (page: number) => {
            setCurrentPage(page);
      };

      return (
            <div>
                  <div className="my-4">
                        <Input
                              prefix={<BiSearch size={20} color="#414141" />}
                              style={{
                                    backgroundColor: '#F4F6F7',
                              }}
                              placeholder="Search"
                              className="w-full"
                        />
                        <div className="flex gap-4">
                              <Select
                                    placeholder="All Categories"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Assign To"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Status"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>
                              <Select
                                    placeholder="Date"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    className="mt-4"
                              >
                                    <Select.Option value="1">Option 1</Select.Option>
                                    <Select.Option value="2">Option 2</Select.Option>
                                    <Select.Option value="3">Option 3</Select.Option>
                              </Select>

                              {/* <DatePicker  className="" /> */}
                        </div>
                  </div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        bordered
                        className="bg-white rounded-lg shadow"
                  />
                  <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-500">
                              Showing {currentPage * 15 - 14} - {currentPage * 15} out of 1239
                        </span>
                        <Pagination
                              current={currentPage}
                              total={1239}
                              pageSize={15}
                              onChange={handlePaginationChange}
                              showSizeChanger={false}
                        />
                  </div>
            </div>
      );
};

export default TasksTable;
