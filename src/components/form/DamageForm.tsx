import { Button, Form, Input, Radio, Space } from 'antd';

const DamageForm = () => {
      const onFinish = async (values: any) => {
            console.log('Success:', values);
      };
      return (
            <div>
                  <Form
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                              type: 'Special',
                        }}
                  >
                        {/* Description Field */}
                        <Form.Item
                              label="Description"
                              name="description"
                              rules={[{ required: true, message: 'Please enter a description!' }]}
                        >
                              <Input placeholder="Enter damage description" />
                        </Form.Item>

                        {/* Amount Field */}
                        <Form.Item
                              label="Amount"
                              name="amount"
                              rules={[{ required: true, message: 'Please enter an amount!' }]}
                        >
                              <Input prefix="$" placeholder="0.00" type="number" />
                        </Form.Item>

                        {/* Type Field */}
                        <Form.Item label="Type" name="type">
                              <Radio.Group>
                                    <Space direction="vertical">
                                          <Radio value="Special">Special</Radio>
                                          <Radio value="General">General</Radio>
                                          <Radio value="Other">Other</Radio>
                                    </Space>
                              </Radio.Group>
                        </Form.Item>

                        {/* Action Buttons */}
                        <div className="flex gap-2 justify-end">
                              <Button type="primary" htmlType="submit">
                                    Save damage
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default DamageForm;
