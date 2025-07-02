import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Intake from './intake/Intake';
import Documents from './documents/Documents';
import Notes from './notes/Notes';
import Demand from './demand/Demand';
import Settlement from './settlement/Settlement';
import TasksList from './tasks/TasksList';

const items: TabsProps['items'] = [
      {
            key: '1',
            label: 'Intake',
            children: <Intake />,
      },
      {
            key: '2',
            label: 'Documents',
            children: <Documents />,
      },
      {
            key: '3',
            label: 'Notes',
            children: <Notes />,
      },
      {
            key: '4',
            label: 'Tasks',
            children: <TasksList />,
      },
      {
            key: '5',
            label: 'Demand',
            children: <Demand />,
      },
      {
            key: '6',
            label: 'Settlement',
            children: <Settlement />,
      },
];
const CaseDetailsTab = () => (
      <div className="my-4">
            <Tabs tabBarStyle={{ border: 'none', background: 'transparent' }} defaultActiveKey="1" items={items} />
      </div>
);

export default CaseDetailsTab;
