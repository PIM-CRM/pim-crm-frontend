import { Button, Form, Input, InputNumber, Select, Table, Tooltip } from 'antd';
import { useState } from 'react';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';
import Model from '../../../../../components/shared/Modal';
import { QuestionCircleOutlined } from '@ant-design/icons';

const RegalFees = () => {
      const [open, setOpen] = useState(false);
      const [data] = useState([
            {
                  key: '1',
                  recipient: 'Carli Bryant',
                  contingencyFee: '35% of $1,000,000.00 from All-State',
                  originalFee: 350000.0,
                  discount: -20000.0,
                  referralRate: 'Oliver Lawrence (10%)',
                  referralFee: -33000.0,
                  netFee: 297000.0,
            },
            {
                  key: '2',
                  recipient: 'Carli Bryant',
                  contingencyFee: '35% of $1,000,000.00 from All-State',
                  originalFee: 350000.0,
                  discount: -20000.0,
                  referralRate: 'Oliver Lawrence (10%)',
                  referralFee: -33000.0,
                  netFee: 297000.0,
            },
      ]);

      const columns = [
            {
                  title: 'Fee recipient',
                  dataIndex: 'recipient',
                  key: 'recipient',
                  render: (text: string) => <span className="text-primary">{text}</span>,
            },
            {
                  title: 'Contingency fee',
                  dataIndex: 'contingencyFee',
                  key: 'contingencyFee',
                  ellipsis: true,
            },
            {
                  title: 'Original fee',
                  dataIndex: 'originalFee',
                  key: 'originalFee',
                  render: (value: number) => <span>${value.toLocaleString()}</span>,
            },
            {
                  title: 'Discount',
                  dataIndex: 'discount',
                  key: 'discount',
                  render: (value: number) => <span>${value.toLocaleString()}</span>,
            },
            {
                  title: 'Net fee',
                  dataIndex: 'netFee',
                  key: 'netFee',
                  render: (value: number) => <span>${value.toLocaleString()}</span>,
            },
            {
                  title: 'Actions',
                  key: 'actions',
                  render: () => (
                        <div className="flex gap-2 w-full">
                              <Button type="link">
                                    <IoCreateOutline className="text-blue-600" size={20} />
                              </Button>
                              <Button type="link">
                                    <IoTrashOutline className="text-red-600" size={20} />
                              </Button>
                        </div>
                  ),
            },
      ];

      const summary = (pageData: any) => {
            const totalOriginalFee = pageData.reduce((total: number, row: any) => total + row.originalFee, 0);
            const totalDiscount = pageData.reduce((total: number, row: any) => total + row.discount, 0);
            const totalNetFee = pageData.reduce((total: number, row: any) => total + row.netFee, 0);

            return (
                  <Table.Summary fixed>
                        <Table.Summary.Row>
                              <Table.Summary.Cell index={0}>
                                    <strong>Total</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={1}></Table.Summary.Cell>
                              <Table.Summary.Cell index={2}>
                                    <strong>${totalOriginalFee.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={3}>
                                    <strong>${totalDiscount.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={4}>
                                    <strong>${totalNetFee.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={5}></Table.Summary.Cell>
                        </Table.Summary.Row>
                  </Table.Summary>
            );
      };

      return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2 items-center">
                              <h3 className="text-lg font-semibold text-black">Legal fees</h3>
                              <Tooltip title="Legal fees are fees that are paid to a lawyer to help with legal issues.">
                                    <QuestionCircleOutlined className="text-primary" />
                              </Tooltip>
                        </div>
                        <button
                              onClick={() => setOpen(true)}
                              className="px-3 py-1 rounded-lg border border-primary text-primary"
                        >
                              New legal fee
                        </button>
                  </div>

                  <Table columns={columns} dataSource={data} pagination={false} size="small" summary={summary} />

                  <Model
                        title="Add legal fee"
                        open={open}
                        setOpen={setOpen}
                        width={700}
                        body={
                              <div>
                                    <Form layout="vertical" onFinish={() => setOpen(false)}>
                                          <Form.Item
                                                label="Fee source"
                                                name="feeSource"
                                                rules={[{ required: true, message: 'Fee source is required' }]}
                                          >
                                                <Select
                                                      showSearch
                                                      placeholder="Select fee source"
                                                      style={{ width: '100%' }}
                                                >
                                                      <Select.Option value="john_doe">$44.00 — John Doe</Select.Option>
                                                </Select>
                                          </Form.Item>

                                          <Form.Item
                                                label="Fee recipient"
                                                name="feeRecipient"
                                                rules={[{ required: true, message: 'Fee recipient is required' }]}
                                          >
                                                <Select
                                                      showSearch
                                                      placeholder="Select fee recipient"
                                                      style={{ width: '100%' }}
                                                >
                                                      <Select.Option value="carli_bryant">Carli Bryant</Select.Option>
                                                </Select>
                                          </Form.Item>

                                          <Form.Item
                                                label="Rate"
                                                name="rate"
                                                rules={[{ required: true, message: 'Rate is required' }]}
                                          >
                                                <Input placeholder="33.3, 1/3..." suffix="%" />
                                          </Form.Item>

                                          <Form.Item label="Discount" name="discount">
                                                <InputNumber
                                                      placeholder="0.00"
                                                      prefix="$"
                                                      style={{ width: '100%', height: '40px' }}
                                                      formatter={(value) =>
                                                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                                      }
                                                />
                                          </Form.Item>

                                          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
                                                <Button
                                                      type="primary"
                                                      htmlType="submit"
                                                      style={{
                                                            backgroundColor: '#0078FF',
                                                            height: '40px',
                                                            boxShadow: 'none',
                                                      }}
                                                >
                                                      Save legal fee
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              </div>
                        }
                  />
            </div>
      );
};

export default RegalFees;
