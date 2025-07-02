import { Dropdown, Table, Tooltip } from 'antd';
import getFileIcon from '../../../../utils/getFileIcon';
import { Link } from 'react-router-dom';
import { MdFileDownload, MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';
import { useState } from 'react';
import Model from '../../../../components/shared/Modal';
import DamageForm from '../../../../components/form/DamageForm';
import EvidenceForm from '../../../../components/form/EvidenceForm';
import MedicalRecordForm from '../../../../components/form/MedicalRecordForm';
import MedicalBillForm from '../../../../components/form/MedicalBillForm';

const CaseList = () => {
      const [modalKey, setModalKey] = useState<string | null>(null);
      const [refreshKey, setRefreshKey] = useState(0);

      const handleMenuClick = (e: any) => {
            setModalKey(e.key);
            setRefreshKey((prevKey) => prevKey + 1);
      };

      const data = [
            {
                  key: '1',
                  case: 'Barack Obama vs. State',

                  status: { text: 'In Treatment', color: 'gold' },
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
                  case: 'Barack Obama vs. State',
                  client: 'Daniel',
                  status: { text: 'Records & Bills', color: 'blue' },
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
                  key: '3',
                  case: 'Barack Obama vs. State',
                  client: 'Al Asad',
                  status: { text: 'Liability Accepted', color: 'green' },
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
      ];

      const fileColumns = [
            {
                  title: 'Files',
                  dataIndex: 'name',
                  key: 'name',
                  render: (text: string, record: any) => (
                        <div className="flex gap-2 items-center">
                              {getFileIcon(record.fileType)}
                              <div className="">
                                    <div className="font-semibold text-gray-800">{text}</div>
                                    <div className="text-sm text-gray-500 text-nowrap">{record.date}</div>
                              </div>
                        </div>
                  ),
            },

            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: () => <div className="bg-[#ff736b] size-3 rounded-full"></div>,
            },
            {
                  title: 'Action',
                  key: 'action',
                  render: () => (
                        <div className="flex gap-2 items-center">
                              <Tooltip title="Download">
                                    <MdFileDownload size={20} className="cursor-pointer" />
                              </Tooltip>
                        </div>
                  ),
            },
      ];

      const menuItems = [
            { label: 'Add Medical Bill', key: 'Medical Bill', icon: '/images/folders/provider.png' },
            { label: 'Add Medical Record', key: 'Medical Record', icon: '/images/folders/provider.png' },
            // { label: 'Medical Provider', key: 'Medical Provider' },
            { label: 'Add Damages', key: 'Damages', icon: '/images/folders/damages.png' },
            { label: 'Add Evidence', key: 'Evidence', icon: '/images/folders/evidence.png' },
      ];
      const columns = [
            {
                  title: 'Case',
                  dataIndex: 'case',
                  key: 'case',
                  render: (text: string, record: any) => (
                        <div className="cursor-pointer">
                              <Link to={`/cases/case-details/${record.id}`} className="">
                                    {text}
                              </Link>
                        </div>
                  ),
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
                              className={`px-2 text-sm text-center text-white rounded-2xl w-fit`}
                        >
                              <p>{status.text}</p>
                        </div>
                  ),
            },
            {
                  title: 'Action',
                  key: 'action',
                  render: () => (
                        <div className="flex gap-2 items-center">
                              <Tooltip title="More ">
                                    <Dropdown
                                          trigger={['click']}
                                          dropdownRender={() => (
                                                <div className="p-2 space-y-4 bg-white shadow-lg">
                                                      {menuItems.map((item) => (
                                                            <div
                                                                  onClick={() => handleMenuClick(item)}
                                                                  className="flex gap-2 items-center pb-1 cursor-pointer"
                                                                  key={item.key}
                                                            >
                                                                  <div>
                                                                        <img
                                                                              src={item.icon}
                                                                              alt={item.label}
                                                                              className="w-6 h-6"
                                                                        />
                                                                  </div>
                                                                  <div>{item.label}</div>
                                                            </div>
                                                      ))}
                                                </div>
                                          )}
                                    >
                                          <IoMdMore size={20} className="cursor-pointer" />
                                    </Dropdown>
                              </Tooltip>
                        </div>
                  ),
            },
      ];

      return (
            <div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        expandable={{
                              expandIcon: ({ onExpand, expanded, record }) => (
                                    <div onClick={(e) => onExpand(record, e)}>
                                          {expanded ? (
                                                <MdOutlineExpandLess size={24} className="cursor-pointer" />
                                          ) : (
                                                <MdOutlineExpandMore size={24} className="cursor-pointer" />
                                          )}
                                    </div>
                              ),
                              expandedRowRender: (record) => (
                                    <Table
                                          showHeader={false}
                                          dataSource={record.subData}
                                          columns={fileColumns}
                                          pagination={false}
                                          bordered
                                    />
                              ),
                        }}
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        bordered
                  />

                  {modalKey === 'Damages' && (
                        <Model
                              key={`damages-${refreshKey}`}
                              title="New Damage"
                              width={800}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<DamageForm />}
                        />
                  )}
                  {modalKey === 'Evidence' && (
                        <Model
                              key={`evidence-${refreshKey}`}
                              title="New Evidence"
                              width={600}
                              open={true}
                              setOpen={() => setModalKey(null)}
                              body={<EvidenceForm />}
                        />
                  )}

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
            </div>
      );
};

export default CaseList;
