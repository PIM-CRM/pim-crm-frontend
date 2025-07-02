import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Radio, Upload } from 'antd';
const MedicalRecordForm = () => {
      const [form] = Form.useForm();
      const handleFinish = async (values: any) => {
            console.log('Success:', values);
      };
      return (
            <div>
                  <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFinish}
                        initialValues={{
                              status: 'Received',
                        }}
                  >
                        {/* File Details Section */}
                        <h3>File details</h3>
                        <Form.Item
                              name="file"
                              label="File"
                              valuePropName="fileList"
                              rules={[{ required: true, message: 'Please select a file' }]}
                        >
                              <Upload beforeUpload={() => false} maxCount={1}>
                                    <Button icon={<UploadOutlined />}>Choose file</Button>
                              </Upload>
                        </Form.Item>

                        <Form.Item
                              name="fileName"
                              label="File name"
                              rules={[{ required: true, message: 'Please add a file name' }]}
                        >
                              <Input placeholder="Add file name" />
                        </Form.Item>

                        <Form.Item name="receivedDate" label="Record received date">
                              <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <Form.Item name="startDate" label="Record start date">
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                              <Form.Item name="endDate" label="Record end date">
                                    <DatePicker style={{ width: '100%' }} />
                              </Form.Item>
                        </div>

                        <a href="#" className="text-blue-500">
                              + Add another medical record
                        </a>

                        {/* Status Update Section */}
                        <h3 className="my-2 font-semibold">Status update</h3>
                        <Form.Item name="status" label="Medical record request status">
                              <Radio.Group>
                                    <Radio value="Received">Received</Radio>
                                    <Radio value="Incomplete">Incomplete</Radio>
                              </Radio.Group>
                        </Form.Item>

                        <p className="mb-2 text-gray-500">
                              This adjusts the medical record status on the medical provider card
                        </p>

                        {/* Form Actions */}
                        <Form.Item className="flex justify-end">
                              <Button type="primary" htmlType="submit" className="mr-2">
                                    Upload
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default MedicalRecordForm;
