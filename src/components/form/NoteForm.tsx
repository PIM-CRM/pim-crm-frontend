import { Button, Form, Input } from 'antd';
const NoteForm = () => {
      const [form] = Form.useForm();

      const handleSubmit = (values: any) => {
            console.log('Form values:', values);
      };
      return (
            <div>
                  <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item name="note" rules={[{ required: true, message: 'Please enter a note' }]}>
                              <Input.TextArea
                                    rows={4}
                                    placeholder="Write a note..."
                                    style={{
                                          borderRadius: 8,
                                    }}
                              />
                        </Form.Item>
                        <Form.Item>
                              <Button type="primary" htmlType="submit" block>
                                    Add Note
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default NoteForm;
