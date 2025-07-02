import { Button, Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd';
const { Option } = Select;

const TeamMemberForm = () => {
      const onFinish = (values: any) => {
            console.log(values);
      };
      return (
            <div>
                  <Form onFinish={onFinish} layout="vertical">
                        <Row gutter={16}>
                              <Col span={12}>
                                    <Form.Item
                                          label="First Name"
                                          name="firstName"
                                          rules={[{ required: true, message: 'Please enter first name!' }]}
                                    >
                                          <Input placeholder="First Name" />
                                    </Form.Item>
                              </Col>
                              <Col span={12}>
                                    <Form.Item
                                          label="Last Name"
                                          name="lastName"
                                          rules={[{ required: true, message: 'Please enter last name!' }]}
                                    >
                                          <Input placeholder="Last Name" />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Form.Item
                              label="Title"
                              name="title"
                              rules={[{ required: true, message: 'Please enter title!' }]}
                        >
                              <Input placeholder="Title" />
                        </Form.Item>

                        <Form.Item
                              label="Email"
                              name="email"
                              rules={[{ required: true, message: 'Please enter email!' }]}
                        >
                              <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                              label="Phone Number"
                              name="phoneNumber"
                              rules={[{ required: true, message: 'Please enter phone number!' }]}
                        >
                              <Input placeholder="Phone Number" />
                        </Form.Item>

                        <Form.Item label="Permissions" name="permissions">
                              <Checkbox.Group>
                                    <Row>
                                          <Col span={8}>
                                                <Checkbox value="all">All Access</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="profile">Profile</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="cases">Cases</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="leads">Leads</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="tasks">Tasks</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="contacts">Contacts</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="documents">Documents</Checkbox>
                                          </Col>
                                          <Col span={8}>
                                                <Checkbox value="inboxes">Inboxes</Checkbox>
                                          </Col>
                                    </Row>
                              </Checkbox.Group>
                        </Form.Item>

                        <Form.Item
                              label="Time Zone"
                              name="timeZone"
                              rules={[{ required: true, message: 'Please select time zone!' }]}
                        >
                              <Select placeholder="Select time zone">
                                    <Option value="utc">UTC</Option>
                                    <Option value="america/chicago">Texas (CST)</Option>
                                    <Option value="america/jackson">Mississippi (CST)</Option>
                                    <Option value="america/montgomery">Alabama (CST)</Option>
                                    <Option value="america/atlanta">Georgia (EST)</Option>
                                    {/* Add more time zones as needed */}
                              </Select>
                        </Form.Item>

                        <Form.Item
                              label="Notification Preferences"
                              name="notificationPreferences"
                              valuePropName="checked"
                        >
                              <Radio.Group>
                                    <Radio value={true}>
                                          Notify user with an email notice containing username and temporary password
                                    </Radio>
                                    <Radio value={false}>
                                          Do NOT notify new user with an email notice containing username and temporary
                                          password
                                    </Radio>
                              </Radio.Group>
                        </Form.Item>

                        <Form.Item>
                              <Button type="primary" htmlType="submit" className="w-full">
                                    Create Team Member
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default TeamMemberForm;
