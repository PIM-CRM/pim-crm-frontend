import { ConfigProvider, Table, Tag, Tooltip } from 'antd';
import getFileIcon from '../../../../../utils/getFileIcon';

const RecordTable = () => {
      // Sample data for the table
      const records = [
            {
                  key: '1',
                  fileName: 'Medical Bill',
                  receivedDate: '20 Dec 2024',
                  startDate: '2024-12-18',
                  endDate: '2024-12-19',
                  status: 'Received',
                  fileType: 'pdf',
            },
            {
                  key: '2',
                  fileName: 'Accident Photo',
                  receivedDate: '20 Dec 2024',
                  startDate: '2024-12-15',
                  endDate: '2024-12-16',
                  status: 'Incomplete',
                  fileType: 'jpg',
            },
            {
                  key: '3',
                  fileName: 'Expense Sheet',
                  receivedDate: '20 Dec 2024',
                  startDate: '2024-12-10',
                  endDate: '2024-12-12',
                  status: 'Received',
                  fileType: 'csv',
            },
      ];

      // Table columns
      const columns = [
            {
                  title: 'File Name',
                  dataIndex: 'fileName',
                  key: 'fileName',
                  render: (text: string, record: any) => (
                        <div className="flex gap-2 items-center">
                              <div> {getFileIcon(record.fileType)}</div>
                              <div>
                                    <p className="font-semibold">{text}</p>
                                    <p>{record.receivedDate}</p>
                              </div>
                        </div>
                  ),
            },

            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: () => <div className="bg-[#bf68de] size-3 rounded-full"></div>,
            },
            {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (text: string) =>
                        text === 'Received' ? <Tag color="green">{text}</Tag> : <Tag color="red">{text}</Tag>,
            },

            {
                  title: 'Action',
                  key: 'action',
                  render: (_text: string, _record: any) => (
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

      return (
            <div>
                  <h3 className="my-4">Medical Records</h3>

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
                              columns={columns}
                              dataSource={records}
                              bordered
                              pagination={{ pageSize: 5 }}
                              scroll={{ x: 'max-content' }}
                        />
                  </ConfigProvider>
            </div>
      );
};

export default RecordTable;
