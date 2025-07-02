import { Button, Dropdown, Menu } from 'antd';
import { View } from 'react-big-calendar';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Model from '../../../components/shared/Modal';
import AddTask from '../../tasks/AddTask';
import { useState } from 'react';
import { CiFilter } from 'react-icons/ci';

type Props = {
      view: View;
      setView: React.Dispatch<React.SetStateAction<View>>;
};
const CustomToolbar = ({ view, setView }: Props) => {
      const [open, setOpen] = useState(false);
      return (
            <>
                  <div className="flex justify-between items-center py-2 bg-white">
                        <div className="flex gap-3 justify-between items-center">
                              <Button
                                    onClick={() => setOpen(true)}
                                    type="primary"
                                    style={{
                                          height: 30,
                                          backgroundColor: '#007AFF',
                                          border: 'none',
                                          boxShadow: 'none',
                                    }}
                              >
                                    Add Task
                              </Button>
                              <div>
                                    <span className="flex text-sm font-medium text-gray-600">
                                          <span>
                                                <GoChevronLeft size={18} />
                                          </span>
                                          {new Date().toLocaleDateString(undefined, {
                                                month: 'long',
                                                day: 'numeric',
                                          })}
                                          <span>
                                                <GoChevronRight size={18} />
                                          </span>
                                    </span>
                              </div>
                        </div>
                        <div className="flex gap-1">
                              <div className="flex gap-3 bg-[#7878801F]   rounded-[9px] p-0.5">
                                    <button
                                          className={`px-6 py-1 text-sm font-medium rounded-[9px]  text-black  focus:outline-none ${
                                                view === 'day'
                                                      ? 'bg-white text-black shadow-2xl shadow-black font-semibold'
                                                      : 'bg-transparent text-black-color'
                                          }`}
                                          onClick={() => setView('day')}
                                    >
                                          Today
                                    </button>
                                    <button
                                          className={`px-6 py-1 text-sm font-medium rounded-[9px]  text-black  focus:outline-none ${
                                                view === 'week'
                                                      ? 'bg-white text-black shadow-2xl shadow-black font-semibold'
                                                      : 'bg-transparent text-black-color'
                                          }`}
                                          onClick={() => setView('week')}
                                    >
                                          Week
                                    </button>
                                    <button
                                          className={`px-6 py-1 text-sm font-medium rounded-[9px]  text-black  focus:outline-none ${
                                                view === 'month'
                                                      ? 'bg-white text-black shadow-2xl shadow-black font-semibold'
                                                      : 'bg-transparent text-black-color'
                                          }`}
                                          onClick={() => setView('month')}
                                    >
                                          Month
                                    </button>
                              </div>
                              <div>
                                    <Dropdown
                                          overlay={
                                                <Menu>
                                                      <Menu.Item key="1"> All </Menu.Item>
                                                      <Menu.Item key="3"> By Name</Menu.Item>
                                                      <Menu.Item key="2"> By Date</Menu.Item>
                                                </Menu>
                                          }
                                          trigger={['click']}
                                    >
                                          <Button type="text" icon={<CiFilter style={{ fontSize: 20 }} />} />
                                    </Dropdown>
                              </div>
                        </div>
                  </div>

                  <Model title="Add Task" width={1000} open={open} setOpen={setOpen} body={<AddTask />} />
            </>
      );
};

export default CustomToolbar;
