import React from 'react';
import { Table, Pagination, Tooltip } from 'antd';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const data = [
      {
            key: '1',
            case: 'Barack Obama vs. State',
            client: 'Al Amin Sheikh',
            status: { text: 'In Treatment', color: 'gold' },
            responsibleAttorney: 'Carli Bryant',
            caseNotifications: 'Carli Bryant',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaFacebook className="text-2xl text-blue-500" />,
      },
      {
            key: '2',
            case: 'Barack Obama vs. State',
            client: 'Daniel',
            status: { text: 'Records & Bills', color: 'blue' },
            responsibleAttorney: 'Rob Kardashian',
            caseNotifications: 'Rob Kardashian',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaGoogle className="text-2xl text-red-500" />,
      },
      {
            key: '3',
            case: 'Barack Obama vs. State',
            client: 'Al Asad',
            status: { text: 'Liability Accepted', color: 'green' },
            responsibleAttorney: 'Carli Bryant',
            caseNotifications: 'Carli Bryant',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaFacebook className="text-2xl text-blue-500" />,
      },
      {
            key: '4',
            case: 'Barack Obama vs. State',
            client: 'King J. Young',
            status: { text: 'Demand', color: 'orange' },
            responsibleAttorney: 'Rob Kardashian',
            caseNotifications: 'Rob Kardashian',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaGoogle className="text-2xl text-red-500" />,
      },
      {
            key: '5',
            case: 'Barack Obama vs. State',
            client: 'Osama Ladin',
            status: { text: 'Litigation', color: 'gray' },
            responsibleAttorney: 'Rob Kardashian',
            caseNotifications: 'Rob Kardashian',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaFacebook className="text-2xl text-blue-500" />,
      },
      {
            key: '6',
            case: 'Barack Obama vs. State',
            client: 'Salma Dill',
            status: { text: 'Settlement', color: 'purple' },
            responsibleAttorney: 'Siam Hunnan',
            caseNotifications: 'Siam Hunnan',
            openDate: '10 Jun, 2024',
            filingDate: '10 Jun, 2024',
            source: <FaGoogle className="text-2xl text-red-500" />,
      },
];

const columns = [
      {
            title: 'Case',
            dataIndex: 'case',
            key: 'case',
      },
      {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
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
            title: 'Responsible Attorney',
            dataIndex: 'responsibleAttorney',
            key: 'responsibleAttorney',
            render: (responsibleAttorney: string) => (
                  <p className="flex gap-3 items-center">
                        <span className="block bg-green-300 rounded-full size-3" />
                        {responsibleAttorney}
                  </p>
            ),
      },
      {
            title: 'Case Notifications',
            dataIndex: 'caseNotifications',
            key: 'caseNotifications',
            render: (caseNotifications: string) => (
                  <p className="flex gap-3 items-center">
                        <span className="block bg-blue-300 rounded-full size-3" />
                        {caseNotifications}
                  </p>
            ),
      },
      {
            title: 'Open Date',
            dataIndex: 'openDate',
            key: 'openDate',
            render: (openDate: string) => (
                  <p className="bg-[#E8EBEE] text-[#0078FF] py-2 text-center px-3 rounded-full">{openDate}</p>
            ),
      },
      {
            title: 'Statutory Date',
            dataIndex: 'filingDate',
            key: 'filingDate',
            render: (filingDate: string) => (
                  <p className="bg-[#E8EBEE] text-[#0078FF] py-2 text-center px-3 rounded-full">{filingDate}</p>
            ),
      },
      {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
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

const OpenCaseTable = () => {
      const navigate = useNavigate();
      const [currentPage, setCurrentPage] = React.useState(1);

      const handlePaginationChange = (page: number) => {
            setCurrentPage(page);
      };

      return (
            <div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        bordered
                        className="bg-white rounded-lg shadow"
                        rowClassName={() => 'cursor-pointer'}
                        onRow={(record) => ({
                              onClick: () => navigate(`/cases/case-details/${record.key}`),
                        })}
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

export default OpenCaseTable;
