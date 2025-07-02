import { ConfigProvider, Table } from 'antd';

const data = [
      {
            key: '1',
            expenseName: 'MRI',
            user: 'John Brown',
            expenseBilled: '$1,000',
            date: '2025-01-01',
      },
      {
            key: '2',
            expenseName: 'Surgery',
            user: 'Jim Green',
            expenseBilled: '$5,000',
            date: '2025-01-02',
      },
      {
            key: '3',
            expenseName: 'Lab Tests',
            user: 'Joe Black',
            expenseBilled: '$200',
            date: '2025-01-03',
      },
];

const columns = [
      {
            title: 'Expense Name',
            dataIndex: 'expenseName',
            key: 'expenseName',
      },
      {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: () => <div className="bg-[#fdb34e] size-3 rounded-full"></div>,
      },
      {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            render: (text: string) => <span>{text}</span>,
      },
      {
            title: 'Billed',
            dataIndex: 'expenseBilled',
            key: 'expenseBilled',
      },
      {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
      },
];
const ExpensesTable = () => (
      <ConfigProvider
            theme={{
                  components: {
                        Table: {
                              headerBg: '#ffffff',
                        },
                  },
            }}
      >
            <Table columns={columns} dataSource={data} />
      </ConfigProvider>
);

export default ExpensesTable;
