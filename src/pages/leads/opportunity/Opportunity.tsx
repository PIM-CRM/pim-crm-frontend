import { Button } from 'antd';
import CustomSelect from '../../../components/ui/CustomSelect';
import { PlusOutlined } from '@ant-design/icons';
import OpportunityCard from './OpportunityCard';

const Opportunity = () => {
      return (
            <div className="">
                  <div className="flex justify-end mb-5">
                        <CustomSelect
                              options={[
                                    { value: 'all', label: 'All' },
                                    { value: 'today', label: 'Today' },
                                    { value: 'yesterday', label: 'Yesterday' },
                                    { value: 'week', label: 'This Week' },
                                    { value: 'month', label: 'This Month' },
                                    { value: 'year', label: 'This Year' },
                              ]}
                        />
                  </div>
                  <div>
                        <div className="">
                              <div className="flex overflow-x-auto gap-4 custom-scrollbar">
                                    <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                          <div className="flex justify-between">
                                                <h3 className="mb-2 text-lg font-semibold text-black">New Lead</h3>
                                                <Button
                                                      style={{
                                                            borderRadius: '100%',
                                                            backgroundColor: '#F8BF3F',
                                                            color: '#fff',
                                                      }}
                                                      icon={<PlusOutlined className="" />}
                                                />
                                          </div>
                                          <div className="space-y-4">
                                                <p>50 Opportunities</p>
                                                <hr className="h-1 bg-[#F8BF3F]" />
                                          </div>
                                          <div className="mt-4 space-y-3 h-[50vh] overflow-y-scroll custom-scrollbar">
                                                {[...Array(5)].map((_, index) => (
                                                      <OpportunityCard key={index} />
                                                ))}
                                          </div>
                                    </div>
                                    <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                          <div className="flex justify-between">
                                                <h3 className="mb-2 text-lg font-semibold text-black">Follow Up</h3>
                                                <Button
                                                      style={{
                                                            borderRadius: '100%',
                                                            backgroundColor: '#EB14FF',
                                                            color: '#fff',
                                                      }}
                                                      icon={<PlusOutlined className="" />}
                                                />
                                          </div>
                                          <div className="space-y-4">
                                                <p>50 Opportunities</p>
                                                <hr className="h-1 bg-[#EB14FF]" />
                                          </div>
                                          <div className="mt-4 space-y-3 h-[50vh] overflow-y-scroll custom-scrollbar">
                                                {[...Array(2)].map((_, index) => (
                                                      <OpportunityCard key={index} />
                                                ))}
                                          </div>
                                    </div>
                                    <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                          <div className="flex justify-between">
                                                <h3 className="mb-2 text-lg font-semibold text-black">
                                                      Contingency Sent
                                                </h3>
                                                <Button
                                                      style={{
                                                            borderRadius: '100%',
                                                            backgroundColor: '#0078FF',
                                                            color: '#fff',
                                                      }}
                                                      icon={<PlusOutlined className="" />}
                                                />
                                          </div>
                                          <div className="space-y-4">
                                                <p>50 Opportunities</p>
                                                <hr className="h-1 bg-[#0078FF]" />
                                          </div>
                                          <div className="mt-4 space-y-3 h-[50vh] overflow-y-scroll custom-scrollbar">
                                                {[...Array(6)].map((_, index) => (
                                                      <OpportunityCard key={index} />
                                                ))}
                                          </div>
                                    </div>
                                    <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                          <div className="flex justify-between">
                                                <h3 className="mb-2 text-lg font-semibold text-black">Won</h3>
                                                <Button
                                                      style={{
                                                            borderRadius: '100%',
                                                            backgroundColor: '#74CD00',
                                                            color: '#fff',
                                                      }}
                                                      icon={<PlusOutlined className="" />}
                                                />
                                          </div>
                                          <div className="space-y-4">
                                                <p>50 Opportunities</p>
                                                <hr className="h-1 bg-[#74CD00]" />
                                          </div>
                                          <div className="mt-4 space-y-3 h-[50vh] overflow-y-scroll custom-scrollbar">
                                                {[...Array(1)].map((_, index) => (
                                                      <OpportunityCard key={index} />
                                                ))}
                                          </div>
                                    </div>
                                    <div className="bg-[#F4F4F4] p-2 rounded-xl text-secondary w-[350px]">
                                          <div className="flex justify-between">
                                                <h3 className="mb-2 text-lg font-semibold text-black">Lost</h3>
                                                <Button
                                                      style={{
                                                            borderRadius: '100%',
                                                            backgroundColor: '#EF4444',
                                                            color: '#fff',
                                                      }}
                                                      icon={<PlusOutlined className="" />}
                                                />
                                          </div>
                                          <div className="space-y-4">
                                                <p>50 Lost</p>
                                                <hr className="h-1 bg-[#EF4444]" />
                                          </div>
                                          <div className="mt-4 space-y-3 h-[50vh] overflow-y-scroll custom-scrollbar">
                                                {[...Array(1)].map((_, index) => (
                                                      <OpportunityCard key={index} />
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Opportunity;
