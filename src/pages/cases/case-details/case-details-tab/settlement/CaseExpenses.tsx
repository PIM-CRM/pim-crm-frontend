import { QuestionCircleOutlined } from '@ant-design/icons';
import { Table, Tooltip } from 'antd';

const CaseExpenses = () => {
      const data = [
            {
                  key: '1',
                  category: 'Police Report',
                  amount: 8.0,
                  isTotal: false,
            },
            {
                  key: '2',
                  category: 'Uncategorized expenses',
                  amount: 100.0,
                  isTotal: false,
                  style: { fontStyle: 'italic' },
            },
            {
                  key: '3',
                  category: 'Total',
                  amount: 108.0,
                  isTotal: true,
            },
      ];

      const columns = [
            {
                  title: 'Categories',
                  dataIndex: 'category',
                  key: 'category',
                  render: (text: string, record: any) => <span style={record.style}>{text}</span>,
            },
            {
                  title: 'Amount',
                  dataIndex: 'amount',
                  key: 'amount',

                  render: (amount: number, record: any) => (
                        <span
                              style={{
                                    ...record.style,
                                    fontWeight: record.isTotal ? 'bold' : 'normal',
                              }}
                        >
                              ${amount.toFixed(2)}
                        </span>
                  ),
            },
      ];

      return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex gap-2 items-center mb-4">
                        <div className="flex gap-2 items-center">
                              <h3 className="text-lg font-semibold text-black">Matter expenses</h3>
                              <Tooltip title="Matter expenses are expenses that are related to the matter, such as legal fees, court costs, and miscellaneous expenses.">
                                    <QuestionCircleOutlined className="text-primary" />
                              </Tooltip>
                        </div>
                  </div>
                  <Table columns={columns} dataSource={data} pagination={false} size="small" />
            </div>
      );
};

export default CaseExpenses;
