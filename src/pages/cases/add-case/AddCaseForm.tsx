import { Form, Input, Select, DatePicker, Checkbox, Button, Switch, Radio } from 'antd';

const { Option } = Select;

type TAddCaseFormProps = {
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddCaseForm = ({ setOpen }: TAddCaseFormProps) => {
      const handleFinish = (values: any) => {
            console.log('Form Values:', values);
      };

      const handleCancel = () => {
            setOpen(false);
      };

      return (
            <div className="h-[80vh] overflow-y-scroll hide-scrollbar">
                  <Form layout="vertical" onFinish={handleFinish} className="space-y-8">
                        {/* Matter Details */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Matter Details</h3>
                              <div className="">
                                    <Form.Item label="Client" name="client">
                                          <Select placeholder="What's the contact's name?"></Select>
                                    </Form.Item>
                                    <Form.Item label="Matter Description" name="description">
                                          <Input.TextArea style={{ borderRadius: 10 }} placeholder="N/A" rows={3} />
                                    </Form.Item>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item label="Responsible Attorney" name="responsibleAttorney">
                                                <Select placeholder="Carli Bryant"></Select>
                                          </Form.Item>
                                          <Form.Item label="Originating Attorney" name="originatingAttorney">
                                                <Select placeholder="Find a firm user"></Select>
                                          </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item label="Client reference number" name="clientNumber">
                                                <Input placeholder="Enter a client reference number" />
                                          </Form.Item>
                                          <Form.Item label="Location" name="clientNumber">
                                                <Select placeholder="Select a location">
                                                      <Select.Option value="Texas">Texas</Select.Option>
                                                      <Select.Option value="Mississippi">Mississippi</Select.Option>
                                                      <Select.Option value="Alabama">Alabama</Select.Option>
                                                      <Select.Option value="Georgia">Georgia</Select.Option>
                                                </Select>
                                          </Form.Item>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item label="Practice Area" name="practiceArea">
                                                <Select placeholder="Personal Injury"></Select>
                                          </Form.Item>
                                          <Form.Item label="Matter Stage" name="matterStage">
                                                <Select placeholder="Find a matter stage"></Select>
                                          </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item label="Matter Status" name="matterStage">
                                                <Select placeholder="Find a matter stage">
                                                      <Select.Option value="open">Open</Select.Option>
                                                      <Select.Option value="closed">Closed</Select.Option>
                                                </Select>
                                          </Form.Item>
                                          <Form.Item label="Open Date" name="openDate">
                                                <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                                          </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item label="Closed Date" name="closedDate">
                                                <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                                          </Form.Item>

                                          <Form.Item label="Pending Date" name="pendingDate">
                                                <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                                          </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item
                                                label="Statute of Limitations Date"
                                                name="statuteOfLimitationsDate"
                                          >
                                                <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                                          </Form.Item>
                                    </div>
                                    <Form.Item>
                                          <Checkbox>Statute of limitations date satisfied</Checkbox>
                                    </Form.Item>
                              </div>
                        </div>

                        {/* Matter Permissions */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Matter Permissions</h3>
                              <Form.Item label="Firm Users with Access" name="usersWithAccess">
                                    <Radio.Group>
                                          <Radio value="everyone">Everyone</Radio>
                                          <Radio value="specific">Specific users or groups</Radio>
                                    </Radio.Group>
                              </Form.Item>
                              <Form.Item label="Add Users or Groups">
                                    <Select placeholder="Find users or groups"></Select>
                              </Form.Item>
                        </div>

                        {/* Notifications */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Matter Notifications</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Firm users that you select will receive notifications when the status of the
                                          matter changes or documents are uploaded.
                                    </div>
                              </Form.Item>
                              <Form.Item label="Firm User">
                                    <Select mode="tags" placeholder="Select users"></Select>
                              </Form.Item>
                        </div>
                        {/* Block user */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Block User</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Firm users that you select will receive notifications when the status of the
                                          matter changes or documents are uploaded.
                                    </div>
                              </Form.Item>
                              <Form.Item label="Choose Users to block">
                                    <Select mode="tags" placeholder="Select users"></Select>
                              </Form.Item>
                        </div>
                        {/* Related Contact */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Related Contact</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Firm users that you select will receive notifications when the status of the
                                          matter changes or documents are uploaded.
                                    </div>
                              </Form.Item>
                              <div className="grid grid-cols-2 gap-4">
                                    <Form.Item name={'contact'} label="Contact">
                                          <Select mode="tags" placeholder="Select contact"></Select>
                                    </Form.Item>
                                    <Form.Item name={'relationship'} label="Relationship">
                                          <Select mode="tags" placeholder="Select Relationship"></Select>
                                    </Form.Item>
                              </div>

                              <Form.Item name={''}>
                                    <Radio.Group>
                                          <Radio value="billRecipient">Bill recipient</Radio>
                                          <Radio value="other">Other</Radio>
                                    </Radio.Group>
                              </Form.Item>
                        </div>

                        {/*Custom fields*/}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Custom fields</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Firm users that you select will receive notifications when the status of this
                                          matter changes of the matter is deleted. they will also be notified when
                                          documents are uploaded by clients and related contacts.
                                    </div>
                              </Form.Item>
                              <div className="">
                                    <Form.Item label="Choose users to block" name="customFields">
                                          <Select placeholder="Find a firm user"></Select>
                                    </Form.Item>
                              </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Billing Preferences</h3>
                              <div className="grid grid-cols-2 gap-4 items-end">
                                    <Form.Item label="Billing Method" name="billingMethod">
                                          <Select placeholder="Contingency fee">
                                                <Option value="contingency">Contingency Fee</Option>
                                                <Option value="hourly">Hourly Fee</Option>
                                          </Select>
                                    </Form.Item>
                                    <Form.Item>
                                          <Checkbox>This matter is billable</Checkbox>
                                          <a className="block my-1" href="#">
                                                Learn more about billing
                                          </a>
                                    </Form.Item>
                                    <Form.Item label="Trust Balance Notification">
                                          <Switch />
                                    </Form.Item>
                              </div>
                              <div>
                                    <h1 className="text-lg font-semibold mb-4 text-[#414141]">
                                          Contingency fee defaults
                                    </h1>
                                    <div className="grid grid-cols-2 gap-4">
                                          <Form.Item label="Fee recipient" name="Contact">
                                                <Select placeholder="Carli Bryant"></Select>
                                          </Form.Item>
                                          <Form.Item label="Rate" name="Rate">
                                                <Input placeholder="33.33"></Input>
                                          </Form.Item>
                                    </div>
                              </div>
                              <div>
                                    <h1 className="text-lg font-semibold mb-4 text-[#414141]">
                                          Personal injury preferences
                                    </h1>
                                    <Form.Item>
                                          <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                                This sets the order of deductions on the settlement tab and settlement
                                                statement
                                          </div>
                                    </Form.Item>
                                    <Form.Item label="Order of settlement deductions" name="deduct">
                                          <Radio.Group>
                                                <Radio value="legalFeesFirst">
                                                      Deduct legal fees first, then expenses
                                                </Radio>
                                                <Radio value="expensesFirst">
                                                      Deduct expenses first, then legal fees
                                                </Radio>
                                          </Radio.Group>
                                    </Form.Item>
                              </div>
                        </div>

                        {/* Task List */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Task List</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Automatically generate and assign tasks when this matter is created.
                                    </div>
                              </Form.Item>
                              <Form.Item label="Add Task">
                                    <Select placeholder="Find a task list"></Select>
                              </Form.Item>
                        </div>

                        {/* Document Folders */}
                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Document Folders</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Create folders within this matter to keep incoming files organized. Learn more
                                          about clio documents
                                    </div>
                              </Form.Item>
                              <div className="grid grid-cols-2 gap-4">
                                    <Form.Item label="Folder Name">
                                          <Input placeholder="Enter folder name" />
                                    </Form.Item>
                                    <Form.Item label="Category">
                                          <Select placeholder="Find a document category"></Select>
                                    </Form.Item>
                              </div>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow">
                              <h3 className="text-lg font-semibold mb-4 text-[#414141]">Reports</h3>
                              <Form.Item>
                                    <div className="p-3 bg-[#E6F3FF] rounded-md border text-[#414141">
                                          Create folders within this matter to keep incoming files organized. Learn more
                                          about clio documents
                                    </div>
                              </Form.Item>
                              <div className="grid grid-cols-2 gap-4">
                                    <Form.Item name={'contact'} label="Originating attorney allocation">
                                          <Input placeholder="0" />
                                    </Form.Item>
                                    <Form.Item name={'contact'} label="Responsible attorney allocation">
                                          <Input placeholder="0" />
                                    </Form.Item>
                              </div>
                              <Form.Item label="Use Firm Settings">
                                    <Radio.Group>
                                          <Radio value="useFirmSetting">Use firm settings</Radio>
                                          <Radio value="notUseFirmSetting">Not use firm settings</Radio>
                                    </Radio.Group>
                              </Form.Item>
                        </div>

                        {/* Save and Delete Actions */}
                        <div className="flex gap-3 justify-end items-center">
                              <Form.Item>
                                    <Button
                                          onClick={handleCancel}
                                          style={{
                                                height: 42,
                                                backgroundColor: '#FFE1D4',
                                                boxShadow: 'none',
                                                color: 'red',
                                          }}
                                          type="primary"
                                    >
                                          Cancel
                                    </Button>
                              </Form.Item>
                              <Form.Item>
                                    <Button
                                          style={{
                                                height: 42,
                                                backgroundColor: '#0078FF',
                                                boxShadow: 'none',
                                          }}
                                          type="primary"
                                          htmlType="submit"
                                    >
                                          Save Case
                                    </Button>
                              </Form.Item>
                        </div>
                  </Form>
            </div>
      );
};

export default AddCaseForm;
