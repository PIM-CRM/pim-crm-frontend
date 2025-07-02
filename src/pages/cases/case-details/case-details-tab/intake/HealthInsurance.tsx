import React from 'react';
import { Input, Radio, RadioChangeEvent } from 'antd';

const HealthInsurance: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Health Insurance</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Insurance Status */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Do you have health insurance?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Insurance Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, who is your carrier?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please list name of carrier"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Group number?</div>
                                    <Input variant="borderless" placeholder="Please enter #" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Who did you deal with?</div>
                                    <Input variant="borderless" placeholder="Name" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Contact number?</div>
                                    <Input variant="borderless" placeholder="Please list number" className="w-40" />
                              </div>
                        </div>

                        {/* Additional Questions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Do you have medicare / medicaid?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Bills filed?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HealthInsurance;
