import React from 'react';
import { Table, Pagination, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

const documents = [
      {
            key: 1,
            filename: 'John Doe - Invoice.pdf',
            client: 'John Doe',
            category: 'Invoice',
            updatedAt: '2024-07-29 12:30:00',
            comments: 'This is an invoice',
      },
      {
            key: 2,
            filename: 'Jane Smith - Contract.docx',
            client: 'Jane Smith',
            category: 'Contract',
            updatedAt: '2024-07-28 14:00:00',
            comments: 'This is a contract',
      },
      {
            key: 3,
            filename: 'Bob Johnson - Resume.pdf',
            client: 'Bob Johnson',
            category: 'Resume',
            updatedAt: '2024-07-27 10:00:00',
            comments: 'This is a resume',
      },
      {
            key: 4,
            filename: 'Alice Brown - Letter.docx',
            client: 'Alice Brown',
            category: 'Letter',
            updatedAt: '2024-07-26 12:00:00',
            comments: 'This is a letter',
      },
];

const columns = [
      {
            title: 'File',
            dataIndex: 'filename',
            key: 'filename',
      },
      {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
      },
      {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (text: string) => {
                  let color;
                  switch (text) {
                        case 'Invoice':
                              color = 'green';
                              break;
                        case 'Contract':
                              color = 'orange';
                              break;
                        case 'Resume':
                              color = 'purple';
                              break;
                        case 'Letter':
                              color = 'blue';
                              break;
                        default:
                              color = 'gray';
                  }
                  return (
                        <div
                              style={{
                                    backgroundColor: color,
                              }}
                              className={`p-1 text-center text-white rounded-2xl`}
                        >
                              <p>{text}</p>
                        </div>
                  );
            },
      },
      {
            title: 'Update Date/Time',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
      },
      {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
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

const DocumentTable = () => {
      const [currentPage, setCurrentPage] = React.useState(1);
      const navigate = useNavigate();

      const handlePaginationChange = (page: number) => {
            setCurrentPage(page);
      };

      return (
            <div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        dataSource={documents}
                        columns={columns}
                        pagination={false}
                        bordered
                        className="bg-white rounded-lg shadow"
                        rowClassName={() => 'cursor-pointer'}
                        onRow={(record) => ({
                              onClick: () => {
                                    navigate(`/documents/${record.key}`);
                              },
                        })}
                  />
                  <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-500">
                              Showing {currentPage * 15 - 14} - {currentPage * 15} out of {documents.length}
                        </span>
                        <Pagination
                              current={currentPage}
                              total={documents.length}
                              pageSize={15}
                              onChange={handlePaginationChange}
                              showSizeChanger={false}
                        />
                  </div>
            </div>
      );
};

export default DocumentTable;
