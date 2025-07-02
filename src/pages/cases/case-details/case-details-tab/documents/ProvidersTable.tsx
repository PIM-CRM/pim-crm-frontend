import { ConfigProvider, Dropdown, Menu, Table, Tag, Tooltip } from 'antd';
import { BiPlusMedical } from 'react-icons/bi';
import { useState } from 'react';
import Model from '../../../../../components/shared/Modal';
import MedicalRecordForm from '../../../../../components/form/MedicalRecordForm';
import MedicalBillForm from '../../../../../components/form/MedicalBillForm';
import { IoWarning } from 'react-icons/io5';
import MedicalProviderForm from '../../../../../components/form/MedicalProviderForm';
import getFileIcon from '../../../../../utils/getFileIcon';

const ProviderTable = () => {
      const [modalKey, setModalKey] = useState<string | null>(null);
      const [refreshKey, setRefreshKey] = useState(0);
      const handleMenuClick = (e: any) => {
            setModalKey(e.key);
            setRefreshKey((prevKey) => prevKey + 1);
      };

      const menu = (
            <Menu
                  onClick={handleMenuClick}
                  items={[
                        { label: 'Edit Provider', key: 'Edit Provider' },
                        { label: 'Medical Bill', key: 'Medical Bill' },
                        { label: 'Medical Record', key: 'Medical Record' },
                  ]}
            />
      );

      const parentData = [
            {
                  key: '1',
                  name: 'Methodist Hospital',

                  status: 'in-treatment',
                  firstTreatmentDate: 'Today, 20 December',
                  lastTreatmentDate: 'Last Treatment Date',
                  category: 'Medical Provider',
                  comments: 'Lorem ipsum dolor sit amet',
                  billed: 10000,
                  paid: 5000,
                  owed: 5000,
                  subData: [
                        {
                              key: '1-1',
                              name: 'Medical Bill',
                              date: 'Received Today, 20 Dec 2024',
                              category: 'PDF',
                              comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                              fileType: 'pdf',
                              treatmentStatus: 'in-treatment',
                              lienStatus: 'in-lien',
                        },
                        {
                              key: '1-2',
                              name: 'Medical Record',
                              date: 'Received Today, 20 Dec 2024',
                              category: 'PDF',
                              comments: 'Follow Up Date',
                              fileType: 'pdf',
                              treatmentStatus: 'in-treatment',
                        },
                  ],
            },
            {
                  key: '2',
                  name: 'Methodist Hospital',
                  status: 'completed',
                  firstTreatmentDate: 'Today, 20 December',
                  lastTreatmentDate: 'Last Treatment Date',
                  category: 'Medical Provider',
                  comments: 'Lorem ipsum dolor sit amet',
                  billed: 10000,
                  paid: 5000,
                  owed: 5000,
                  subData: [
                        {
                              key: '2-1',
                              name: 'Medical Bill',
                              date: 'Received Today, 20 Dec 2024',
                              category: 'PDF',
                              comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                              fileType: 'pdf',
                              treatmentStatus: 'in-treatment',
                              lienStatus: 'not-in-lien',
                        },
                        {
                              key: '2-2',
                              name: 'Medical Record',
                              date: 'Received Today, 20 Dec 2024',
                              category: 'PDF',
                              comments: 'Follow Up Date',
                              fileType: 'pdf',
                              treatmentStatus: 'in-treatment',
                        },
                  ],
            },
      ];

      const parentColumns = [
            {
                  title: 'Provider',
                  dataIndex: 'name',
                  key: 'name',
                  render: (text: string, record: any) => (
                        <div className="flex gap-2 items-center">
                              <div className="w-4">{renderIcon(record)}</div>
                              <div className="flex flex-col gap-2 items-center">
                                    <span className="font-semibold text-gray-800">{text}</span>
                                    <div className="text-sm text-gray-500">{record.firstTreatmentDate}</div>
                                    <div className="text-sm text-gray-500">{record.lastTreatmentDate}</div>
                              </div>
                        </div>
                  ),
            },
            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: (_: any, _record: any) => (
                        <div className="flex items-center">
                              <div className="bg-[#5cd89d] size-3 rounded-full"></div>
                        </div>
                  ),
            },
            {
                  title: 'Comments',
                  dataIndex: 'comments',
                  key: 'comments',
                  render: (text: string) => <div className="text-sm text-gray-600 truncate">{text}</div>,
            },
            {
                  title: 'Billing Information',
                  dataIndex: 'billingInfo',
                  key: 'billingInfo',
                  render: (_: any, record: any) => (
                        <div>
                              <div>Billed: ${record.billed}</div>
                              <div>Paid: ${record.paid}</div>
                              <div>Owed: ${record.owed}</div>
                        </div>
                  ),
            },
            {
                  title: 'Action',
                  key: 'action',
                  render: () => (
                        <Dropdown trigger={['click']} overlay={menu} placement="bottomRight" arrow>
                              <img className="cursor-pointer" src="/icons/action/ellipsis.png" alt="" />
                        </Dropdown>
                  ),
            },
      ];

      const childColumns = [
            {
                  title: 'Files',
                  dataIndex: 'name',
                  key: 'name',
                  render: (text: string, record: any) => {
                        return (
                              <div className="flex gap-2 items-center">
                                    <div className="w-4">{renderLienStatus(record)}</div>

                                    {getFileIcon(record.fileType)}
                                    <div>
                                          <div className="font-semibold text-gray-800">{text}</div>
                                          <div className="text-sm text-gray-500">{record.date}</div>
                                    </div>
                              </div>
                        );
                  },
            },
            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: (text: string) => (
                        <Tag color="blue" className="rounded-lg">
                              {text}
                        </Tag>
                  ),
            },
            {
                  title: 'Comments',
                  dataIndex: 'comments',
                  key: 'comments',
                  render: (text: string) => <div className="text-sm text-gray-600 truncate">{text}</div>,
            },
            {
                  title: 'Action',
                  key: 'action',
                  render: () => (
                        <div className="flex gap-2 items-center">
                              <Tooltip title="Note">
                                    <img className="cursor-pointer" src="/icons/action/squre.png" alt="" />
                              </Tooltip>
                              <Tooltip title="Signature">
                                    <img className="cursor-pointer" src="/icons/action/pen.png" alt="" />
                              </Tooltip>
                              <Tooltip title="Download">
                                    <img className="cursor-pointer" src="/icons/action/right.png" alt="" />
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

      const renderIcon = (record: any) => {
            // console.log(record);

            return (
                  <Tooltip title={record.status === 'in-treatment' ? 'In Treatment' : 'Treatment Completed'}>
                        <BiPlusMedical
                              className={`${
                                    record.status == 'in-treatment'
                                          ? 'bg-[#FF3B30] text-white'
                                          : 'bg-[#bfbfbf] text-black'
                              } rounded-full p-1`}
                              size={20}
                        />
                  </Tooltip>
            );
      };

      const renderLienStatus = (record: any) => {
            if (record.name === 'Medical Bill' && record.lienStatus === 'in-lien') {
                  return (
                        <Tooltip title="Lien">
                              <IoWarning className="text-[#FF3B30]" size={20} />
                        </Tooltip>
                  );
            } else {
                  return null;
            }
      };

      return (
            <div className="my-5">
                  <h3 className="my-4">Providers Table</h3>

                  <ConfigProvider
                        theme={{
                              components: {
                                    Table: {
                                          headerBg: '#ffffff',
                                    },
                              },
                        }}
                  >
                        <Table
                              dataSource={parentData}
                              columns={parentColumns}
                              expandable={{
                                    expandedRowRender: (record) => (
                                          <Table
                                                columns={childColumns}
                                                dataSource={record.subData}
                                                pagination={false}
                                                size="small"
                                                bordered
                                          />
                                    ),
                                    // rowExpandable: (record) => record.subData && record.subData.length > 0,
                              }}
                              pagination={false}
                              rowClassName="hover:bg-gray-100"
                        />
                  </ConfigProvider>

                  {modalKey === 'Medical Record' && (
                        <Model
                              key={`medical-${refreshKey}`}
                              title="New Medical Record"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<MedicalRecordForm />}
                        />
                  )}
                  {modalKey === 'Medical Bill' && (
                        <Model
                              key={`medical-${refreshKey}`}
                              title="Add Medical Bill"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<MedicalBillForm />}
                        />
                  )}

                  {modalKey === 'Edit Provider' && (
                        <Model
                              key={`medical-${refreshKey}`}
                              title="Edit Provider"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<MedicalProviderForm />}
                        />
                  )}
            </div>
      );
};

export default ProviderTable;
