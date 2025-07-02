import { Form, Input, Select, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
type TAddDocument = { setOpen: React.Dispatch<React.SetStateAction<boolean>> };
const AddDocument = ({ setOpen }: TAddDocument) => {
      return (
            <div className=" h-[80vh] overflow-y-scroll hide-scrollbar">
                  <Form requiredMark={false} layout="vertical">
                        <h1 className="my-4 text-lg font-semibold">Clients Info</h1>
                        <hr className="my-4" />
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item
                                    label="Client's Name"
                                    name="clientName"
                                    rules={[{ required: true, message: "Client's name is required" }]}
                              >
                                    <Input placeholder="Md. Nadir" />
                              </Form.Item>
                              <Form.Item
                                    label="Client's Email"
                                    name="clientEmail"
                                    rules={[{ type: 'email', message: 'Enter a valid email' }]}
                              >
                                    <Input placeholder="MdNadirPagla@gmail.com" />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item
                                    label="Client's Phone"
                                    name="clientPhone"
                                    rules={[{ required: true, message: "Client's phone is required" }]}
                              >
                                    <Input placeholder="+991465496" />
                              </Form.Item>
                              <Form.Item label="Case Name" name="caseName">
                                    <Input placeholder="Barack Obama vs. State" />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <Form.Item label="Client's Address" name="location">
                                    <Input placeholder="Location" />
                              </Form.Item>
                              <Form.Item label="City" name="city">
                                    <Select placeholder="Select a city">
                                          <Option value="City A">City A</Option>
                                          <Option value="City B">City B</Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label="Country" name="country">
                                    <Select placeholder="Select a country">
                                          <Option value="Country A">Country A</Option>
                                          <Option value="Country B">Country B</Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <h1 className="my-4 text-lg font-semibold">Documents Details</h1>
                        <hr className="my-4" />
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="File Name" name="fileName">
                                    <Input placeholder="Al Amin Sheikh Case" />
                              </Form.Item>
                              <Form.Item label="File Category" name="fileCategory">
                                    <Select placeholder="Medical Records">
                                          <Option value="Medical Records">Medical Records</Option>
                                          <Option value="Financial Reports">Financial Reports</Option>
                                    </Select>
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Assigned by" name="assignedBy">
                                    <Input placeholder="Carli Bryant" />
                              </Form.Item>
                              <Form.Item label="Total Expense" name="totalExpense">
                                    <Input placeholder="$0" />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Assign to" name="assignTo">
                                    <Input placeholder="Dr. Fahim Sheikh" />
                              </Form.Item>
                              <Form.Item label="Source's Address" name="sourceAddress">
                                    <Input placeholder="California Hospital ltd." />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Source's Email" name="sourceEmail">
                                    <Input placeholder="Fahim@gmail.com" />
                              </Form.Item>
                              <Form.Item label="Source's Phone" name="sourcePhone">
                                    <Input placeholder="+99231545446516" />
                              </Form.Item>
                        </div>

                        <Form.Item label="Upload file (Max: 10)" name="upload">
                              <Upload multiple maxCount={10}>
                                    <Button icon={<UploadOutlined />}>Upload file here</Button>
                              </Upload>
                        </Form.Item>

                        <Form.Item label="Comment" name="comment">
                              <Input.TextArea style={{ borderRadius: 6 }} placeholder="N/A" rows={4} />
                        </Form.Item>

                        <div className="flex justify-end items-center mt-4">
                              <Button
                                    onClick={() => setOpen(false)}
                                    style={{
                                          boxShadow: 'none',
                                          height: 40,
                                    }}
                                    className="mr-2"
                              >
                                    Cancel
                              </Button>
                              <Button
                                    style={{
                                          backgroundColor: '#0078FF',
                                          color: '#FFFFFF',
                                          boxShadow: 'none',
                                          height: 40,
                                    }}
                                    type="primary"
                              >
                                    Update
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default AddDocument;
