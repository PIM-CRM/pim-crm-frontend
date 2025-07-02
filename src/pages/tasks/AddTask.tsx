import { Form, Input, Select, Button, Tooltip, Switch, DatePicker, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BsCalendar2Date } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';

const { Option } = Select;

const AddTask = () => {
      return (
            <div className="">
                  <Form requiredMark={false} layout="vertical" className="h-[80vh] overflow-y-scroll hide-scrollbar">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Name is required' }]}
                              >
                                    <Input placeholder="Apu csd" />
                              </Form.Item>
                              <Form.Item label="Priority" name="priority">
                                    <Select defaultValue="Normal">
                                          <Option value="Low">Low</Option>
                                          <Option value="Normal">Normal</Option>
                                          <Option value="High">High</Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <Form.Item label="Description" name="description">
                              <Input.TextArea
                                    style={{
                                          borderRadius: 8,
                                    }}
                                    placeholder="N/A"
                                    rows={3}
                              />
                        </Form.Item>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Assign To" name="assignTo">
                                    <Select defaultValue="Carli Bryant">
                                          <Option value="Carli Bryant">Carli Bryant</Option>
                                          <Option value="Rob Kardashian">Rob Kardashian</Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label=" " name="assignBy">
                                    <Switch />
                                    <Tooltip className="" title="Restrict visibility">
                                          <div>
                                                <span className="block text-gray-600">
                                                      Private task ? <InfoCircleOutlined className="text-gray-400" />
                                                </span>
                                          </div>
                                    </Tooltip>
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                              <Form.Item label="Task type" name="taskType">
                                    <Select placeholder="Select a task type">
                                          <Select.Option value="client_meeting">Client Meeting</Select.Option>
                                          <Select.Option value="case_review">Case Review</Select.Option>
                                          <Select.Option value="court_filing">Court Filing</Select.Option>
                                          <Select.Option value="document_preparation">
                                                Document Preparation
                                          </Select.Option>
                                          <Select.Option value="research">Legal Research</Select.Option>
                                          <Select.Option value="follow_up">Client Follow-up</Select.Option>
                                          <Select.Option value="negotiation">Negotiation</Select.Option>
                                          <Select.Option value="other">Other</Select.Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item label="Status" name="status">
                                    <Select defaultValue="In Progress">
                                          <Option value="In Progress">In Progress</Option>
                                          <Option value="Pending">Pending</Option>
                                          <Option value="Done">Done</Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label="Time Estimate" name="timeEstimate">
                                    <Input placeholder="Ex. 1h 30m, 1:30am" />
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                              <Form.Item label="Matter" name="matter">
                                    <Select defaultValue="Carli Bryant">
                                          <Option value="Carli Bryant">Carli Bryant Case 00001-Doe</Option>
                                          <Option value="Rob Kardashian">Rob Kardashian Case 00001-Doe</Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <Form.Item name="dueDateType" label="Due Date Type">
                              <Radio.Group className="flex gap-4">
                                    <Radio.Button
                                          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                                          value="standard"
                                    >
                                          <div className="flex gap-4 justify-start items-center">
                                                <div>
                                                      <BsCalendar2Date style={{ fontSize: '30px', color: '#0070e0' }} />
                                                </div>
                                                <div>
                                                      <h1 className="font-semibold">Standard Due Date</h1>
                                                      <p>Select a date from calendar</p>
                                                </div>
                                          </div>
                                    </Radio.Button>
                                    <Radio.Button
                                          style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                gap: '10px',
                                                borderRadius: '8px',
                                                paddingLeft: '10px',
                                          }}
                                          value="relative"
                                    >
                                          <div className="flex gap-4 justify-start items-center">
                                                <div>
                                                      <GoTasklist style={{ fontSize: '30px', color: '#0070e0' }} />
                                                </div>
                                                <div>
                                                      <h1 className="font-semibold">Relative Due Date</h1>
                                                      <p>Based on an existing task</p>
                                                </div>
                                          </div>
                                    </Radio.Button>
                              </Radio.Group>
                        </Form.Item>

                        <Form.Item
                              shouldUpdate={(prevValues, currentValues) =>
                                    prevValues.dueDateType !== currentValues.dueDateType
                              }
                        >
                              {({ getFieldValue }) => {
                                    const dueDateType = getFieldValue('dueDateType');
                                    if (dueDateType === 'standard') {
                                          return (
                                                <Form.Item name="standardDate" label="Select Date">
                                                      <DatePicker style={{ width: '100%' }} />
                                                </Form.Item>
                                          );
                                    }
                                    if (dueDateType === 'relative') {
                                          return (
                                                <div className="grid grid-cols-3 gap-4 mt-4">
                                                      <Form.Item name="relativeDays">
                                                            <Input defaultValue="1" placeholder="1" />
                                                      </Form.Item>
                                                      <Form.Item name="relativeType">
                                                            <Select defaultValue="Business days">
                                                                  <Select.Option value="Business days">
                                                                        Business days
                                                                  </Select.Option>
                                                                  <Select.Option value="Calendar days">
                                                                        Calendar days
                                                                  </Select.Option>
                                                            </Select>
                                                      </Form.Item>
                                                      <Form.Item name="relativeDirection">
                                                            <Select defaultValue="After">
                                                                  <Select.Option value="After">After</Select.Option>
                                                                  <Select.Option value="Before">Before</Select.Option>
                                                            </Select>
                                                      </Form.Item>
                                                </div>
                                          );
                                    }
                                    return null;
                              }}
                        </Form.Item>

                        <Form.Item label="Select a task from 00001-Doe" name="selectTask">
                              <Select defaultValue="Carli Bryant">
                                    <Option value="Carli Bryant">Carli Bryant</Option>
                                    <Option value="Rob Kardashian">Rob Kardashian</Option>
                              </Select>
                        </Form.Item>

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
                                    Save Task
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default AddTask;
