import { Form } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const MedicalProviderForm = () => {
      const [form] = Form.useForm();

      const onFinish = async (values: any) => {
            console.log('Received values of form:', values);
      };

      return (
            <div>
                  <Form
                        className="h-[80vh] overflow-y-scroll hide-scrollbar"
                        requiredMark={false}
                        layout="vertical"
                        onFinish={onFinish}
                        form={form}
                  >
                        {/* Medical Provider Details */}
                        <Form.Item label="Medical provider details">
                              <Form.Item
                                    label="Medical provider"
                                    name="medicalProvider"
                                    rules={[{ required: true, message: 'Please select a medical provider!' }]}
                              >
                                    <Select placeholder="Search or select a medical provider">
                                          <Select.Option value="Provider 1">Provider 1</Select.Option>
                                          <Select.Option value="Provider 2">Provider 2</Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item label="Description" name="description">
                                    <TextArea
                                          style={{
                                                borderRadius: '8px',
                                          }}
                                          placeholder="Add information about the provider"
                                          rows={2}
                                    />
                              </Form.Item>
                        </Form.Item>

                        {/* Treatment Dates */}
                        <Form.Item label="Treatment dates">
                              <Form.Item
                                    label="First treatment date"
                                    name="firstTreatmentDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item
                                    label="Last treatment date"
                                    name="lastTreatmentDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item name="treatmentComplete" valuePropName="checked">
                                    <Checkbox>Treatment is complete</Checkbox>
                              </Form.Item>
                        </Form.Item>

                        {/* Medical Record Request Dates */}
                        <Form.Item label="Medical record request dates">
                              <Form.Item
                                    label="Medical record request date"
                                    name="medicalRecordRequestDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item
                                    label="Add follow up date"
                                    name="medicalRecordFollowUpDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item name="medicalRecordTask" valuePropName="checked">
                                    <Checkbox>Create a task to follow up on medical records</Checkbox>
                              </Form.Item>
                              <Form.Item label="Medical record status" name="medicalRecordStatus">
                                    <Select placeholder="Not yet requested">
                                          <Select.Option value="Not yet requested">Not yet requested</Select.Option>
                                          <Select.Option value="Requested">Requested</Select.Option>
                                          <Select.Option value="Received">Received</Select.Option>
                                    </Select>
                              </Form.Item>
                        </Form.Item>

                        {/* Bill Request Dates */}
                        <Form.Item label="Bill request dates">
                              <Form.Item
                                    label="Medical bill request date"
                                    name="medicalBillRequestDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item
                                    label="Add follow up date"
                                    name="medicalBillFollowUpDate"
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
                              >
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item name="medicalBillTask" valuePropName="checked">
                                    <Checkbox>Create a task to follow up on medical bills</Checkbox>
                              </Form.Item>
                              <Form.Item label="Medical bill status" name="medicalBillStatus">
                                    <Select placeholder="Not yet requested">
                                          <Select.Option value="Not yet requested">Not yet requested</Select.Option>
                                          <Select.Option value="Requested">Requested</Select.Option>
                                          <Select.Option value="Received">Received</Select.Option>
                                    </Select>
                              </Form.Item>
                        </Form.Item>

                        {/* Save and Cancel Buttons */}
                        <Form.Item>
                              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                    <Button type="primary" htmlType="submit">
                                          Save
                                    </Button>
                              </div>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default MedicalProviderForm;
