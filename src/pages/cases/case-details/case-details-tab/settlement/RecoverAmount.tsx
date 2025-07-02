import { Button, Form, InputNumber, Select, Table } from 'antd';
import { useState } from 'react';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';
import Model from '../../../../../components/shared/Modal';
import { BsCurrencyDollar } from 'react-icons/bs';

const RecoveryAmounts = () => {
      const [open, setOpen] = useState(false);

      const [data, setData] = useState([
            { source: 'State Farm', amount: 50000.0 },
            { source: 'Progressive', amount: 100000.0 },
            { source: 'Liberty Mutual', amount: 200000.0 },
      ]);

      const handleEdit = (index: number) => {
            console.log('Edit item at index', index);
      };

      const handleDelete = (index: number) => {
            const newData = data.filter((_, i) => i !== index);
            setData(newData);
      };

      const summary = (pageData: any) => {
            const totalAmount = pageData.reduce((total: number, row: any) => total + row.amount, 0);

            return (
                  <Table.Summary fixed>
                        <Table.Summary.Row>
                              <Table.Summary.Cell index={0}>
                                    <strong>Total</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={1}>
                                    <strong>${totalAmount.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={2}></Table.Summary.Cell>
                        </Table.Summary.Row>
                  </Table.Summary>
            );
      };
      return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-black">Recovery amounts</h3>
                        <button
                              onClick={() => setOpen(true)}
                              className="px-3 py-1 rounded-lg border border-primary text-primary"
                        >
                              New recovery
                        </button>
                  </div>

                  <Table
                        columns={[
                              {
                                    title: 'Source',
                                    dataIndex: 'source',
                              },
                              {
                                    title: 'Amount',
                                    dataIndex: 'amount',
                                    align: 'start',
                                    render: (value: number) => <span>${value.toLocaleString()}</span>,
                              },
                              {
                                    title: 'Actions',
                                    dataIndex: 'actions',

                                    render: (_value: string, _record: (typeof data)[number], index: number) => (
                                          <div className="flex gap-2 w-full">
                                                <Button type="link" onClick={() => handleEdit(index)}>
                                                      <IoCreateOutline className="text-blue-600" size={20} />
                                                </Button>
                                                <Button type="link" onClick={() => handleDelete(index)}>
                                                      <IoTrashOutline className="text-red-600" size={20} />
                                                </Button>
                                          </div>
                                    ),
                              },
                        ]}
                        dataSource={data}
                        pagination={false}
                        size="small"
                        summary={summary}
                  />

                  <Model
                        title="Add Recovery Amount"
                        open={open}
                        setOpen={setOpen}
                        body={
                              <div>
                                    <Form layout="vertical" onFinish={() => setOpen(false)}>
                                          <Form.Item label="Source" name="source">
                                                <Form.Item label="Source" name="source">
                                                      <Select
                                                            showSearch
                                                            style={{ width: '100%' }}
                                                            placeholder="Select a source"
                                                      >
                                                            <Select.Option value="State Farm">State Farm</Select.Option>
                                                            <Select.Option value="Progressive">
                                                                  Progressive
                                                            </Select.Option>
                                                            <Select.Option value="Liberty Mutual">
                                                                  Liberty Mutual
                                                            </Select.Option>
                                                      </Select>
                                                </Form.Item>
                                          </Form.Item>

                                          <Form.Item label="Amount" name="amount">
                                                <InputNumber
                                                      placeholder="0.00"
                                                      prefix={<BsCurrencyDollar className="text-[#c1c8cf]" />}
                                                      style={{ width: '100%', height: '40px' }}
                                                />
                                          </Form.Item>
                                          <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button
                                                      style={{
                                                            backgroundColor: '#0078FF',
                                                            color: '#FFFFFF',
                                                            boxShadow: 'none',
                                                            height: 42,
                                                      }}
                                                      type="primary"
                                                      htmlType="submit"
                                                >
                                                      Save Recovery Amount
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              </div>
                        }
                        width={700}
                  />
            </div>
      );
};

export default RecoveryAmounts;
