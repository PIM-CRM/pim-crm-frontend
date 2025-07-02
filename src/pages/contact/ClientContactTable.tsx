import React from 'react';
import { Table, Pagination, Tooltip } from 'antd';

const contacts = [
      {
            key: 1,
            name: 'John Doe',
            email: 'Gt6kI@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Anytown, USA',
      },
      {
            key: 2,
            name: 'Jane Smith',
            email: 'Tb4wZ@example.com',
            phone: '987-654-3210',
            address: '456 Elm St, Anytown, USA',
      },
      {
            key: 3,
            name: 'Bob Johnson',
            email: 'VdV2l@example.com',
            phone: '555-555-5555',
            address: '789 Oak St, Anytown, USA',
      },
      {
            key: 4,
            name: 'Alice Brown',
            email: '6kNtD@example.com',
            phone: '111-222-3333',
            address: '321 Pine St, Anytown, USA',
      },
];

const columns = [
      {
            title: 'Contact Name',
            dataIndex: 'name',
            key: 'name',
      },
      {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
      },
      {
            title: 'Phone No',
            dataIndex: 'phone',
            key: 'phone',
      },
      {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
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

const ClientContactTable = () => {
      const [currentPage, setCurrentPage] = React.useState(1);

      const handlePaginationChange = (page: number) => {
            setCurrentPage(page);
      };

      return (
            <div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        dataSource={contacts}
                        columns={columns}
                        pagination={false}
                        bordered
                        className="bg-white rounded-lg shadow"
                  />
                  <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-500">
                              Showing {currentPage * 15 - 14} - {currentPage * 15} out of {contacts.length}
                        </span>
                        <Pagination
                              current={currentPage}
                              total={contacts.length}
                              pageSize={15}
                              onChange={handlePaginationChange}
                              showSizeChanger={false}
                        />
                  </div>
            </div>
      );
};

export default ClientContactTable;
