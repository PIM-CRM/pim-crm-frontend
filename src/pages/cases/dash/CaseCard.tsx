import { AiOutlineMessage, AiOutlinePhone } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import CustomCheckbox from '../../../components/ui/CustomCheckbox';
import { DatePicker, Dropdown, Menu, Select, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const CaseCard = () => {
      const navigate = useNavigate();

      const handleProgressChange = (progress: string) => {
            console.log(`Case progress changed to: ${progress}`);
            // Implement the logic to update the case progress here
      };

      const menu = (
            <Menu onClick={({ key }) => handleProgressChange(key)}>
                  {[
                        'Liability Accepted',
                        'In Treatment',
                        'Records & Bills',
                        'Demand',
                        'Negotiations',
                        'Settlement',
                  ].map((status) => (
                        <Menu.Item key={status}>{status}</Menu.Item>
                  ))}
            </Menu>
      );

      return (
            <article
                  onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/cases/case-details/${1}`);
                  }}
                  className="p-4 bg-white rounded-lg border shadow-md"
            >
                  <header className="space-y-2 cursor-pointer">
                        <div className="flex justify-between items-center">
                              <h3 className="font-semibold text-gray-900">Nadir Hossain B Baria</h3>
                              <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex relative justify-end items-center space-x-2 text-gray-500"
                              >
                                    <AiOutlineMessage size={20} className="cursor-pointer" />
                                    <AiOutlinePhone size={20} className="cursor-pointer" />
                                    <Dropdown overlay={menu} trigger={['click']}>
                                          <Tooltip title="Case Actions">
                                                <BsThreeDots size={20} className="cursor-pointer" />
                                          </Tooltip>
                                    </Dropdown>
                              </div>
                        </div>
                        <div className="">
                              <p className="flex gap-2 items-center text-sm">
                                    <span className="block"> Case Value:</span>
                                    <span className="font-semibold text-[#0078FF]">$1,000</span>
                              </p>
                        </div>
                  </header>
                  <div onClick={(e) => e.stopPropagation()}>
                        <ul className="flex flex-wrap gap-2 mt-1 mb-3">
                              <Tooltip
                                    // styles={{
                                    //       body: {
                                    //             backgroundColor: '#f5f5f5',
                                    //             color: '#333',
                                    //             borderRadius: '4px',
                                    //       },
                                    // }}

                                    title={
                                          <div>
                                                <Select
                                                      placeholder="Accident Type"
                                                      onClick={(e) => {
                                                            e.stopPropagation();
                                                      }}
                                                      style={{ width: 150, height: '100%' }}
                                                      size="small"
                                                >
                                                      <Select.Option value="car_accidents">Car Accidents</Select.Option>
                                                      <Select.Option value="18wheeler_accidents">
                                                            18-Wheeler Accidents
                                                      </Select.Option>
                                                      <Select.Option value="motorcycle_accidents">
                                                            Motorcycle Accidents
                                                      </Select.Option>
                                                      <Select.Option value="slip_and_falls">
                                                            Slip And Falls
                                                      </Select.Option>
                                                      <Select.Option value="dog_bite_accidents">
                                                            Dog Bite Accidents
                                                      </Select.Option>
                                                      <Select.Option value="medical_malpractice">
                                                            Medical Malpractice
                                                      </Select.Option>
                                                </Select>
                                          </div>
                                    }
                              >
                                    <li className="text-xs bg-[#0078FF] cursor-pointer text-white py-1 px-3 rounded-full">
                                          Accident
                                    </li>
                              </Tooltip>

                              <Tooltip
                                    // styles={{
                                    //       body: {
                                    //             backgroundColor: '#f5f5f5',
                                    //             color: '#333',
                                    //             borderRadius: '4px',
                                    //       },
                                    // }}

                                    title={
                                          <div>
                                                <Select
                                                      placeholder="Case Progress"
                                                      onClick={(e) => {
                                                            e.stopPropagation();
                                                      }}
                                                      style={{ width: 150, height: '100%' }}
                                                      size="small"
                                                >
                                                      <Select.Option value="intake">Intake</Select.Option>
                                                      <Select.Option value="liability_treatment_records">
                                                            Liability Treatment Records
                                                      </Select.Option>
                                                      <Select.Option value="bills_demand_negotiations">
                                                            Bills Demand Negotiations
                                                      </Select.Option>
                                                      <Select.Option value="litigation">Litigation</Select.Option>
                                                      <Select.Option value="settlement">Settlement</Select.Option>
                                                </Select>
                                          </div>
                                    }
                              >
                                    <li className="text-xs bg-[#44D6B6] text-[#414141] py-1 px-3 rounded-full">
                                          Litigation
                                    </li>
                              </Tooltip>
                              <li className="text-xs bg-[#E02020] text-white py-1 px-3 rounded-full">Texas</li>
                              <li className="text-xs bg-[#E7E7E7] text-[#606060] py-1 px-3 rounded-full">Cassie</li>
                        </ul>
                        <div className="flex justify-between">
                              <DatePicker
                                    defaultValue={dayjs('2023-01-01')}
                                    style={{
                                          // width: 'fit-content',
                                          height: 36,
                                    }}
                                    className=""
                                    format="DD MMM, YYYY"
                              />

                              <CustomCheckbox />
                        </div>
                  </div>
            </article>
      );
};

export default CaseCard;
