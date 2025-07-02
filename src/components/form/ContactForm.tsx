import { CameraFilled } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload } from 'antd';

const ContactForm = () => {
      const [form] = Form.useForm();

      const handleFormSubmit = async (values: any) => {
            console.log('Received values of form:', values);
      };

      return (
            <Form
                  name="contact-form"
                  form={form}
                  layout="vertical"
                  onFinish={handleFormSubmit}
                  initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                  }}
            >
                  <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                              name="type"
                              label="Is this contact a person or a company?"
                              rules={[{ required: true, message: 'Please select a type!' }]}
                        >
                              <Select defaultValue="person">
                                    <Select.Option value="person">Person</Select.Option>
                                    <Select.Option value="company">Company</Select.Option>
                              </Select>
                        </Form.Item>

                        <Form.Item
                              style={{ width: '100%' }}
                              label="Upload a file"
                              name="file"
                              rules={[{ required: true, message: 'Please upload a file!' }]}
                        >
                              <Upload style={{ width: '100%', height: 48 }} beforeUpload={() => false} maxCount={1}>
                                    <Button icon={<CameraFilled />} style={{ width: '100%', height: 42 }}>
                                          Choose file
                                    </Button>
                              </Upload>
                        </Form.Item>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                              label="Name"
                              name="name"
                              rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                              <Input placeholder="Enter your name" />
                        </Form.Item>

                        <Form.Item
                              label="Email"
                              name="email"
                              rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Invalid email!' },
                              ]}
                        >
                              <Input placeholder="Enter your email" />
                        </Form.Item>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                              label="Phone"
                              name="phone"
                              rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                              <Input placeholder="Enter your phone number" />
                        </Form.Item>

                        <Form.Item
                              label="Address"
                              name="address"
                              rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                              <Input placeholder="Enter your address" />
                        </Form.Item>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                              label="Country"
                              name="country"
                              rules={[{ required: true, message: 'Please input your country!' }]}
                        >
                              <Input placeholder="Enter your country" />
                        </Form.Item>

                        <Form.Item
                              label="City"
                              name="city"
                              rules={[{ required: true, message: 'Please input your city!' }]}
                        >
                              <Input placeholder="Enter your city" />
                        </Form.Item>
                  </div>

                  <div>
                        <Form.Item
                              label="Tags"
                              name="tags"
                              rules={[{ required: true, message: 'Please select a mode!' }]}
                        >
                              <Select
                                    mode="tags"
                                    style={{ width: '100%' }}
                                    placeholder="Add up to 50 tags to a contact for easier searching, filtering, and categorization"
                                    maxLength={50}
                              ></Select>
                        </Form.Item>
                  </div>

                  <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                              style={{ backgroundColor: '#0078FF', color: '#FFFFFF', boxShadow: 'none', height: 42 }}
                              type="primary"
                              htmlType="submit"
                        >
                              Submit
                        </Button>
                  </Form.Item>
            </Form>
      );
};

export default ContactForm;
