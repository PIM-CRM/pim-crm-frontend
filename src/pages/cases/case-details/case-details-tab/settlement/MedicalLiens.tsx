import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Table, Tooltip } from 'antd';
import { IoCreateOutline } from 'react-icons/io5';

const MedicalLiens = () => {
      const data = [
            {
                  key: '1',
                  holder: 'Jane · Doe',
                  balanceOwing: 10000.0,
                  reduction: -5000.0,
                  finalAmount: 5000.0,
                  isTotal: false,
            },
            {
                  key: '2',
                  holder: 'Oliver Lawrence',
                  balanceOwing: 100.0,
                  reduction: -100.0,
                  finalAmount: 0.0,
                  isTotal: false,
            },
      ];

      const columns = [
            {
                  title: 'Lien or balance holder',
                  dataIndex: 'holder',
                  key: 'holder',
                  render: (text: string, record: any) =>
                        !record.isTotal && <span className="cursor-pointer text-primary hover:underline">{text}</span>,
            },
            {
                  title: 'Balance owing',
                  dataIndex: 'balanceOwing',
                  key: 'balanceOwing',

                  render: (amount: number, record: any) => (
                        <span style={{ fontWeight: record.isTotal ? 'bold' : 'normal' }}>
                              ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                  ),
            },
            {
                  title: 'Reduction',
                  dataIndex: 'reduction',
                  key: 'reduction',

                  render: (amount: number, record: any) => (
                        <span style={{ fontWeight: record.isTotal ? 'bold' : 'normal' }}>
                              ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                  ),
            },
            {
                  title: 'Final amount',
                  dataIndex: 'finalAmount',
                  key: 'finalAmount',

                  render: (amount: number, record: any) => (
                        <span style={{ fontWeight: record.isTotal ? 'bold' : 'normal' }}>
                              ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                  ),
            },
            {
                  title: 'Actions',
                  key: 'actions',
                  render: (_: any, record: any) =>
                        !record.isTotal && (
                              <div className="">
                                    <Button type="link" className="flex items-center">
                                          <IoCreateOutline className="text-blue-600" size={20} />
                                    </Button>
                              </div>
                        ),
            },
      ];
      const summary = (allRecords: any) => {
            const totalBalanceOwing = allRecords.reduce((total: number, row: any) => total + row.balanceOwing, 0);
            const totalReduction = allRecords.reduce((total: number, row: any) => total + row.reduction, 0);
            const totalFinalAmount = allRecords.reduce((total: number, row: any) => total + row.finalAmount, 0);

            return (
                  <Table.Summary fixed>
                        <Table.Summary.Row>
                              <Table.Summary.Cell index={0}>
                                    <strong>Total</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={1}>
                                    <strong>${totalBalanceOwing.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={2}>
                                    <strong>${totalReduction.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={3}>
                                    <strong>${totalFinalAmount.toLocaleString()}</strong>
                              </Table.Summary.Cell>
                              <Table.Summary.Cell index={4}></Table.Summary.Cell>
                        </Table.Summary.Row>
                  </Table.Summary>
            );
      };
      return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex gap-2 items-center">
                        <h3 className="text-lg font-semibold text-black">Medical liens and outstanding balances</h3>
                        <Tooltip
                              title="
                        Medical liens and outstanding balances are added from medical bills. 
                        "
                        >
                              <QuestionCircleOutlined className="text-primary" />
                        </Tooltip>
                  </div>
                  <Table columns={columns} dataSource={data} pagination={false} summary={summary} size="small" />
            </div>
      );
};

export default MedicalLiens;
