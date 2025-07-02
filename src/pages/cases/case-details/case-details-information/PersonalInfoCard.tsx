import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import Model from '../../../../components/shared/Modal';
import { useState } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';

const PersonalInfoCard = () => {
      const [open, setOpen] = useState(false);
      const [edit, setEdit] = useState(false);

      const onSubmit = (values: any) => {
            console.log(values);
            setOpen(false);
      };
      return (
            <>
                  <div className="p-4 w-full bg-white rounded-lg border">
                        <div className="flex justify-between items-center mb-4">
                              <h2 className="text-lg font-semibold">Personal Information</h2>
                              <button
                                    onClick={() => {
                                          setEdit(false);
                                          setOpen(true);
                                    }}
                                    className="text-[#8E8E93] border border-gray-300 px-4 text-sm rounded-full  font-medium"
                              >
                                    + Add
                              </button>
                        </div>

                        <div className="relative p-4 bg-gray-50 rounded-lg">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <h3 className="text-base font-bold">John Wayne</h3>
                                          <p className="text-sm text-secondary">Updated Today, 20 Dec 2024</p>
                                    </div>
                                    <div className="flex items-center">
                                          <button className="px-4 text-sm text-purple-500 rounded-full border border-purple-500">
                                                Primary
                                          </button>
                                          <button
                                                onClick={() => {
                                                      setEdit(true);
                                                      setOpen(true);
                                                }}
                                                className=""
                                          >
                                                <MoreOutlined className="text-secondary" />
                                          </button>
                                    </div>
                              </div>

                              <div className="mt-4 space-y-2">
                                    <p className="font-semibold">Date of Birth:</p>
                                    <p className="text-gray-600">07/16/1997</p>
                                    <p className="font-semibold">Social Security Number:</p>
                                    <p className="text-gray-600">***-**-****</p>
                              </div>

                              <div className="flex justify-between items-center mt-4">
                                    <div className="">
                                          <p className="text-sm text-gray-600">john.wayne@testemail.com</p>
                                          <p className="text-sm text-gray-600">(210) 305-9076</p>
                                          <p className="text-sm text-gray-600">(210) 305-9076</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <Model
                        open={open}
                        setOpen={setOpen}
                        title={edit ? 'Edit Personal Information' : 'Add Personal Information'}
                        width={600}
                        body={
                              <div>
                                    <Form
                                          initialValues={{
                                                name: 'John Wayne',
                                                email: 'john.wayne@testemail.com',
                                                phoneNumbers: [{ number: '' }],
                                                ssn: '***-**-****',
                                                dob: moment('1997-07-16'),
                                          }}
                                          onFinish={onSubmit}
                                          layout="vertical"
                                    >
                                          <Form.Item label="Full Name" name="name">
                                                <Input />
                                          </Form.Item>
                                          <Form.Item label="Date of Birth" name="dob">
                                                <DatePicker style={{ width: '100%' }} />
                                          </Form.Item>

                                          <Form.Item label="Email" name="email">
                                                <Input />
                                          </Form.Item>

                                          <Form.List name="phoneNumbers">
                                                {(fields, { add, remove }) => (
                                                      <>
                                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                                  <Form.Item
                                                                        {...restField}
                                                                        name={[name, 'number']}
                                                                        label={`Phone Number ${name + 1}`}
                                                                        key={key}
                                                                  >
                                                                        <Input style={{ width: '100%' }} />
                                                                        <Button
                                                                              type="link"
                                                                              onClick={() => remove(name)}
                                                                        >
                                                                              Remove
                                                                        </Button>
                                                                  </Form.Item>
                                                            ))}
                                                            <Form.Item>
                                                                  <Button
                                                                        type="dashed"
                                                                        onClick={() => add()}
                                                                        block
                                                                        icon={<PlusOutlined />}
                                                                  >
                                                                        Add Phone Number
                                                                  </Button>
                                                            </Form.Item>
                                                      </>
                                                )}
                                          </Form.List>
                                          <Form.Item label="Social Security Number" name="ssn">
                                                <Input />
                                          </Form.Item>

                                          <Form.Item>
                                                <Button type="primary" htmlType="submit" className="w-full">
                                                      Submit
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              </div>
                        }
                  />
            </>
      );
};

export default PersonalInfoCard;
