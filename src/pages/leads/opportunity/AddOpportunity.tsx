import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const AddOpportunity = () => {
      return (
            <div className="h-[80vh] overflow-y-scroll hide-scrollbar">
                  <Form requiredMark={false} layout="vertical">
                        <h1 className="my-4 text-lg font-semibold">Contact Information</h1>
                        <hr className="my-4" />
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item
                                    label="Primary Contact Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Name is required' }]}
                              >
                                    <Input placeholder="Apu csd" />
                              </Form.Item>
                              <Form.Item label="Primary Email" name="email">
                                    <Input placeholder="N/A" />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item
                                    label="Primary Phone"
                                    name="phone"
                                    rules={[{ required: true, message: 'Name is required' }]}
                              >
                                    <Input placeholder="000-000-000" />
                              </Form.Item>
                              <Form.Item label="Additional Contacts (Max: 10)" name="additionalContacts">
                                    <Input placeholder="N/A" />
                              </Form.Item>
                        </div>

                        <h1 className="my-4 text-lg font-semibold">Opportunity Details</h1>
                        <hr className="my-4" />

                        <Form.Item label="Assign To" name="assignTo">
                              <Select defaultValue="Carli Bryant">
                                    <Option value="Carli Bryant">Carli Bryant</Option>
                                    <Option value="Rob Kardashian">Rob Kardashian</Option>
                              </Select>
                        </Form.Item>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Pipeline" name="pipeline">
                                    <Input placeholder="N/A" />
                              </Form.Item>
                              <Form.Item label="Stage" name="stage">
                                    <Input placeholder="Documents Sent" />
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Status" name="status">
                                    <Select defaultValue="">
                                          <Select.Option value="Carli Bryant">Carli Bryant</Select.Option>
                                          <Select.Option value="Rob Kardashian">Rob Kardashian</Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label="Opportunity Value" name="opportunityValue">
                                    <Input placeholder="$10,000" />
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Owner" name="owner">
                                    <Select defaultValue="Open">
                                          <Select.Option value="Open">Open</Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label="Opportunity Source" name="opportunitySource">
                                    <Input placeholder="Add  Followers" />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Business Name" name="owner">
                                    <Input placeholder="Carli Bryant" />
                              </Form.Item>
                        </div>

                        <div className="flex justify-end items-center mt-4">
                              <Button
                                    // shape="round"
                                    style={{
                                          backgroundColor: '#0078FF',
                                          color: '#FFFFFF',
                                          boxShadow: 'none',
                                          height: 42,
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

export default AddOpportunity;
