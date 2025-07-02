import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';

const EvidenceForm = () => {
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
                        <Form.Item
                              rules={[{ required: true, message: 'Please upload a file!' }]}
                              label="File (Image / Video)"
                              name="file"
                        >
                              <Upload accept="image/*,video/*" beforeUpload={() => false} maxCount={1}>
                                    <Button icon={<UploadOutlined />}>Choose file</Button>
                              </Upload>
                        </Form.Item>

                        <Form.Item
                              label="Description"
                              name="description"
                              rules={[{ required: true, message: 'Please enter a description!' }]}
                        >
                              <Input placeholder="Enter damage description" />
                        </Form.Item>

                        {/* Action Buttons */}
                        <div className="flex gap-2 justify-end">
                              <Button type="primary" htmlType="submit">
                                    Save Evidence
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default EvidenceForm;
