import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag, Tooltip, Upload } from 'antd';
import { BsCloudUpload } from 'react-icons/bs';
import getFileIcon from '../../../../utils/getFileIcon';

const Document = () => {
      const data = [
            {
                  key: '1',
                  name: 'Medical Bill',
                  date: 'Uploaded Today, 20 Dec 2024',
                  category: 'PDF',
                  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  fileType: 'pdf',
            },
            {
                  key: '2',
                  name: 'Letter of Protection',
                  date: 'Uploaded Today, 20 Dec 2024',
                  category: 'Text',
                  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  fileType: 'doc',
            },
            {
                  key: '3',
                  name: 'Expense Sheet',
                  date: 'Uploaded Today, 20 Dec 2024',
                  category: 'CSV',
                  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  fileType: 'csv',
            },
            {
                  key: '4',
                  name: 'Lien Request',
                  date: 'Uploaded Today, 20 Dec 2024',
                  category: 'Word',
                  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  fileType: 'docx',
            },
            {
                  key: '5',
                  name: 'Accident Photo',
                  date: 'Uploaded Today, 20 Dec 2024',
                  category: 'Image',
                  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  fileType: 'jpg',
            },
      ];
      const columns = [
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
                  render: () => (
                        <Tag color="blue" className="rounded-lg">
                              Category
                        </Tag>
                  ),
                  width: 100,
            },
            // {
            //       title: 'Comments',
            //       dataIndex: 'comments',
            //       key: 'comments',
            //       render: (text: string) => (
            //             <div className="text-sm text-gray-600 truncate w-full max-w-[20ch]">{text}</div>
            //       ),
            // },
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

      return (
            <div>
                  <div>
                        <div className="flex items-center mb-4 space-x-2">
                              <Input
                                    placeholder="Search documents"
                                    className="w-full"
                                    prefix={<SearchOutlined className="text-gray-500 text-[20px]" />}
                              />
                              <Upload>
                                    <Button icon={<BsCloudUpload />} type="default"></Button>
                              </Upload>
                        </div>
                  </div>
                  <Table
                        scroll={{ x: 'max-content' }}
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        rowClassName="hover:bg-gray-100"
                  />
            </div>
      );
};

export default Document;
