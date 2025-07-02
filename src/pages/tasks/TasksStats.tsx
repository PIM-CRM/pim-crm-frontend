import { Button } from 'antd';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import Model from '../../components/shared/Modal';
import AddTask from './AddTask';

const TasksStats = () => {
      const [open, setOpen] = useState(false);
      const stats = [
            {
                  label: 'In Progress',
                  value: 43,
                  color: 'bg-yellow-400',
            },
            {
                  label: 'Pending',
                  value: 13,
                  color: 'bg-orange-500',
            },
            {
                  label: 'Done',
                  value: 10,
                  color: 'bg-green-500',
            },
      ];

      return (
            <>
                  <div className="flex flex-col">
                        <div className="flex justify-between">
                              <h1 className="text-2xl font-semibold text-gray-800">Task</h1>
                              <Button
                                    onClick={() => setOpen(true)}
                                    style={{
                                          height: 42,
                                    }}
                                    type="text"
                                    icon={
                                          <BiPlus
                                                color="#fff"
                                                className="bg-[#0089FC] rounded-full text-white p-1 text-4xl"
                                          />
                                    }
                              >
                                    Add Task
                              </Button>
                        </div>
                        <div className="flex justify-between w-full gap-4 mb-2 text-sm text-gray-600">
                              {stats.map((stat, index) => (
                                    <div key={index} className="flex-1 text-center">
                                          <div className="my-4 text-start">
                                                <p className="font-bold text-gray-800">{stat.value}</p>
                                                <p>{stat.label}</p>
                                          </div>
                                          <div key={index} className={`${stat.color} w-full h-4 rounded-full`}></div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  <Model title="Add Task" width={1000} open={open} setOpen={setOpen} body={<AddTask />} />
            </>
      );
};

export default TasksStats;
