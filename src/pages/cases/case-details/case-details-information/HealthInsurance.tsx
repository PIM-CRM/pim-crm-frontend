import { Button, Form, Input } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Model from '../../../../components/shared/Modal';

const HealthInsurance = () => {
      const [open, setOpen] = useState(false);
      const [edit, setEdit] = useState(false);
      return (
            <div className="p-4 w-full bg-white rounded-lg border">
                  <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Health Insurance</h2>
                        <button
                              onClick={() => {
                                    setEdit(false);
                                    setOpen(true);
                              }}
                              className="text-[#8E8E93] border border-gray-300 p-1 rounded-full px-3 text-sm font-medium"
                        >
                              + Add
                        </button>
                  </div>

                  <div className="relative p-4 my-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                              <div>
                                    <h3 className="text-base font-bold">Blue Cross Blue Shield</h3>
                                    <p className="text-sm text-secondary">Updated Today, 20 Dec 2024</p>
                              </div>

                              <div>
                                    <button className="px-4 text-sm   text-[#AF52DE] rounded-full border border-[#AF52DE]">
                                          Medical
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

                        <div className="mt-4">
                              <p className="text-sm text-gray-600">Martha Stewart</p>
                              <p className="text-sm text-gray-600">john.wayne@testemail.com</p>
                              <p className="text-sm text-gray-600">(210) 305-9076</p>
                        </div>
                        <div style={{ position: 'relative' }}>
                              <Input.TextArea
                                    style={{
                                          backgroundColor: '#fff',
                                          border: '1px solid #E7E7E7',
                                          borderRadius: 6,
                                          paddingRight: '24px',
                                    }}
                                    placeholder=""
                                    className="mt-4"
                              />
                              <span
                                    style={{
                                          position: 'absolute',
                                          right: '8px',
                                          top: '50%',
                                          transform: 'translateY(-50%)',
                                          pointerEvents: 'none',
                                    }}
                              >
                                    <img src="/icons/action/squre.png" alt="" />
                              </span>
                        </div>
                  </div>

                  <Model
                        title={edit ? 'Update Health Insurance' : 'Add Health Insurance'}
                        open={open}
                        setOpen={setOpen}
                        width={600}
                        body={
                              <>
                                    <Form layout="vertical">
                                          <Form.Item name="insuranceProvider" label="Insurance Provider">
                                                <Input />
                                          </Form.Item>
                                          <Form.Item name="policyHolder" label="Policy Holder">
                                                <Input />
                                          </Form.Item>
                                          <Form.Item name="email" label="Email">
                                                <Input />
                                          </Form.Item>
                                          <Form.Item name="phone" label="Phone">
                                                <Input />
                                          </Form.Item>
                                          <Form.Item>
                                                <Button
                                                      style={{
                                                            width: '100%',
                                                      }}
                                                      type="primary"
                                                      htmlType="submit"
                                                >
                                                      Submit
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              </>
                        }
                  />
            </div>
      );
};

export default HealthInsurance;
