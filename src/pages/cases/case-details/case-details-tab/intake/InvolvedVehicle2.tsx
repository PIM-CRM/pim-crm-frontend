import React from 'react';
import { Input, Radio, RadioChangeEvent } from 'antd';

const InVolvedVehicles2: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">
                        Adverse Vehicle / Other Involved Vehicles and Insurance
                  </h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Yes/No Questions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">
                                          Have you spoken to the adverse insurance?
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Input Fields */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Claim number?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please enter claim number"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Did you make a recorded statement?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Adjuster name?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please enter adjuster name"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Adjuster phone number?</div>
                                    <Input variant="borderless" placeholder="+1 (123) 456-7890" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default InVolvedVehicles2;
