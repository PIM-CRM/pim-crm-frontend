import React from 'react';
import { Input, Radio, RadioChangeEvent } from 'antd';

const LostWagesWork: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      const handleHourlyOrSalaryChange = (e: RadioChangeEvent) => {
            console.log(`Selected payment type: ${e.target.value}`);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Lost Wages / Work</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Work Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Where do you work?</div>
                                    <Input variant="borderless" placeholder="Please list" className="w-40" />
                              </div>
                        </div>

                        {/* Work Impact Questions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Missed work because of accident?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Did employer track missed time?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Employment Type */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Hourly or Salary?</div>
                                    <Radio.Group onChange={handleHourlyOrSalaryChange}>
                                          <Radio value="hourly">Hourly</Radio>
                                          <Radio value="salary">Salary</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Previous Claims */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Prior on job injuries?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Workers comp claim filed?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Claim Result */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, result?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default LostWagesWork;
