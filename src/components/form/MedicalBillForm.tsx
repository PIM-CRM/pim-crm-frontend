import { Button, Checkbox, DatePicker, Form, Input, Radio, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const MedicalBillForm = () => {
      const [form] = Form.useForm();

      const handleFormSubmit = async (values: any) => {
            console.log('Received values of form:', values);
      };

      return (
            <div>
                  <Form
                        className="h-[80vh] overflow-y-scroll hide-scrollbar"
                        form={form}
                        layout="vertical"
                        onFinish={handleFormSubmit}
                        initialValues={{
                              billDate: null,
                              receivedDate: null,
                              status: 'Received',
                        }}
                  >
                        <h3>Bill details</h3>

                        {/* File Upload */}
                        <Form.Item label="File" name="file">
                              <Upload beforeUpload={() => false} accept=".pdf">
                                    <Button icon={<UploadOutlined />}>Choose file</Button>
                              </Upload>
                        </Form.Item>

                        {/* Name */}
                        <Form.Item
                              label="Name"
                              name="name"
                              rules={[{ required: true, message: 'Please enter a name or description' }]}
                        >
                              <Input placeholder="Enter name or description" />
                        </Form.Item>

                        {/* Dates */}
                        <Form.Item label="Bill date" name="billDate">
                              <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item label="Received date" name="receivedDate">
                              <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                        {/* Bill Amount */}
                        <Form.Item
                              label="Bill amount"
                              name="billAmount"
                              rules={[{ required: true, message: 'Please enter the bill amount' }]}
                        >
                              <Input prefix="$" placeholder="Initial bill amount" />
                        </Form.Item>

                        <h3>Payers</h3>
                        <Button type="link">+ Add payer</Button>

                        <h3>Total</h3>

                        {/* Total Paid */}
                        <div style={{ marginBottom: 16 }}>
                              <strong>Total paid by payers:</strong> $0.00
                        </div>

                        {/* Adjustment */}
                        <Form.Item label="Adjustment" name="adjustment">
                              <Input prefix="$" placeholder="Enter adjustment amount" />
                        </Form.Item>

                        {/* Balance Owed */}
                        <Form.Item
                              label="Balance owed to medical provider"
                              name="balanceOwed"
                              rules={[{ required: true, message: 'Please enter the balance owed amount' }]}
                        >
                              <Input prefix="$" placeholder="Enter balance owed amount" />
                        </Form.Item>

                        {/* Lien Checkbox */}
                        <Form.Item name="lien" valuePropName="checked">
                              <Checkbox>Mark as lien or outstanding balance</Checkbox>
                        </Form.Item>

                        <h3>Status update</h3>

                        {/* Status */}
                        <Form.Item label="Medical bill request status" name="status">
                              <Radio.Group>
                                    <Radio value="Received">Received</Radio>
                                    <Radio value="Incomplete">Incomplete</Radio>
                              </Radio.Group>
                        </Form.Item>

                        <p style={{ color: '#666', fontSize: 12 }}>
                              This adjusts the medical bill status on the medical provider card
                        </p>

                        {/* Buttons */}
                        <Form.Item>
                              <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                                    Save
                              </Button>
                              <Button htmlType="button">Cancel</Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default MedicalBillForm;
