import { Button, Input, Select } from 'antd';
import { BiPlus, BiSearch } from 'react-icons/bi';
import FileUploader from './FileUploader';

const DocumentMetadata = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
      return (
            <div>
                  <div className="flex items-center justify-between ">
                        <h1 className="text-2xl font-semibold">Documents</h1>
                        <Button
                              onClick={() => setOpen(true)}
                              style={{
                                    height: 42,
                              }}
                              type="text"
                              icon={
                                    <BiPlus
                                          color="#fff"
                                          className="bg-[#0089FC] rounded-full text-white p-1 text-4xl"
                                    />
                              }
                        >
                              Upload Document
                        </Button>
                  </div>
                  <div className="my-4">
                        <Input
                              style={{
                                    backgroundColor: '#F4F6F7',
                              }}
                              prefix={<BiSearch size={20} color="#414141" />}
                              placeholder="Search"
                        />
                  </div>
                  <div className="flex gap-4 ">
                        <Select placeholder="All Categories" style={{ width: '100%', borderRadius: '8px' }} allowClear>
                              <Select.Option value="category1">Category 1</Select.Option>
                              <Select.Option value="category2">Category 2</Select.Option>
                              <Select.Option value="category3">Category 3</Select.Option>
                        </Select>

                        <Select placeholder="Client" style={{ width: '100%', borderRadius: '8px' }} allowClear>
                              <Select.Option value="client1">Client 1</Select.Option>
                              <Select.Option value="client2">Client 2</Select.Option>
                              <Select.Option value="client3">Client 3</Select.Option>
                        </Select>

                        <Select placeholder="File Type" style={{ width: '100%', borderRadius: '8px' }} allowClear>
                              <Select.Option value="fileType1">File Type 1</Select.Option>
                              <Select.Option value="fileType2">File Type 2</Select.Option>
                              <Select.Option value="fileType3">File Type 3</Select.Option>
                        </Select>

                        <Select placeholder="Date" style={{ width: '100%', borderRadius: '8px' }} allowClear>
                              <Select.Option value="today">Today</Select.Option>
                              <Select.Option value="thisWeek">This Week</Select.Option>
                              <Select.Option value="thisMonth">This Month</Select.Option>
                        </Select>
                  </div>
                  <div className="my-4">
                        <FileUploader />
                  </div>
            </div>
      );
};

export default DocumentMetadata;
