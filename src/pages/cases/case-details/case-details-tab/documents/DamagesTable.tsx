import { ConfigProvider, Table } from 'antd';

const DamagesTable = () => {
      // Static data for damages
      const damagesData = [
            {
                  key: '1',
                  provider: 'Methodist Hospital',
                  category: 'Medical',
                  comments: 'Accident-related treatments.',
                  billed: '$10,000',
                  paid: '$5,000',
                  owed: '$5,000',
                  expenses: [
                        {
                              key: '1-1',
                              expenseType: 'Medication',
                              amount: '$300',
                              date: '2025-01-01',
                        },
                        {
                              key: '1-2',
                              expenseType: 'Lab Tests',
                              amount: '$200',
                              date: '2025-01-02',
                        },
                  ],
            },
            {
                  key: '2',
                  provider: 'Pro Care Medical',
                  category: 'Surgery',
                  comments: 'Costs for surgical procedures.',
                  billed: '$15,000',
                  paid: '$10,000',
                  owed: '$5,000',
                  expenses: [
                        {
                              key: '2-1',
                              expenseType: 'Surgical Tools',
                              amount: '$500',
                              date: '2025-01-03',
                        },
                  ],
            },
      ];

      // Columns for the main damages table
      const damageColumns = [
            {
                  title: 'Provider',
                  dataIndex: 'provider',
                  key: 'provider',
            },
            {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category',
                  render: () => <div className="bg-[#ff736b] size-3 rounded-full"></div>,
            },
            {
                  title: 'Comments',
                  dataIndex: 'comments',
                  key: 'comments',
            },
            {
                  title: 'Billed',
                  dataIndex: 'billed',
                  key: 'billed',
            },
            {
                  title: 'Paid',
                  dataIndex: 'paid',
                  key: 'paid',
            },
            {
                  title: 'Owed',
                  dataIndex: 'owed',
                  key: 'owed',
            },
      ];

      // Columns for the nested expenses table
      const expenseColumns = [
            {
                  title: 'Expense Type',
                  dataIndex: 'expenseType',
                  key: 'expenseType',
            },
            {
                  title: 'Amount',
                  dataIndex: 'amount',
                  key: 'amount',
            },
            {
                  title: 'Date',
                  dataIndex: 'date',
                  key: 'date',
            },
      ];

      return (
            <div style={{ padding: '20px' }}>
                  <div className="grid grid-cols-3 gap-4 mb-5 text-center">
                        <div className="p-3 rounded-lg">
                              <h1>Total Billed, Damages & Expenses</h1>
                              <h1 className="font-semibold text-black">$ 100,000</h1>
                        </div>
                        <div className="p-3 rounded-lg">
                              <h1>Total Paid & Damages </h1>
                              <h1 className="font-semibold text-black">$ 100,000</h1>
                        </div>
                        <div className="p-3 rounded-lg">
                              <h1>Total Paid, Owed & Damages</h1>
                              <h1 className="font-semibold text-black">$ 100,000</h1>
                        </div>
                  </div>

                  <ConfigProvider
                        theme={{
                              components: {
                                    Table: {
                                          headerBg: '#ffffff',
                                    },
                              },
                        }}
                  >
                        <Table
                              columns={damageColumns}
                              dataSource={damagesData}
                              bordered
                              pagination={{ pageSize: 5 }}
                              expandable={{
                                    expandedRowRender: (record) => (
                                          <Table
                                                columns={expenseColumns}
                                                dataSource={record.expenses}
                                                pagination={false}
                                                size="small"
                                                bordered
                                          />
                                    ),
                                    rowExpandable: (record) => record.expenses && record.expenses.length > 0,
                              }}
                        />
                  </ConfigProvider>
            </div>
      );
};

export default DamagesTable;
