import React from 'react';
import { Table, Pagination, Tooltip } from 'antd';

const contacts = [
      {
            key: 1,
            companyName: 'Amazon Web Services, Inc.',
            address: '410 Terry Ave N, Seattle, WA 98109',
            phone: '(206) 266-1000',
            email: 'info@amazon.com',
      },
      {
            key: 2,
            companyName: 'Microsoft Corporation',
            address: 'One Microsoft Way, Redmond, WA 98052-6399',
            phone: '(425) 882-8080',
            email: 'msft@microsoft.com',
      },
      {
            key: 3,
            companyName: 'Google LLC',
            address: '1600 Amphitheatre Parkway, Mountain View, CA 94043',
            phone: '(650) 253-0000',
            email: 'press@google.com',
      },
      {
            key: 4,
            companyName: 'Facebook, Inc.',
            address: '1601 Willow Road, Menlo Park, CA 94025',
            phone: '(650) 543-4800',
            email: 'info@fb.com',
      },
];

const columns = [
      {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
      },
      {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
      },
      {
            title: 'Phone No',
            dataIndex: 'phone',
            key: 'phone',
      },
      {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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

const CompanyContactTable = () => {
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

export default CompanyContactTable;
