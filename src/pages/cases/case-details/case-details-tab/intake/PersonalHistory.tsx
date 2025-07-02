import React from 'react';
import { DatePicker, Input, Radio, RadioChangeEvent } from 'antd';

const PersonalHistory: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Daily Life / Personal History</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Pending PI Claims */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Pending PI claims?</div>
                                    <Input variant="borderless" placeholder="Please describe" className="w-40" />
                              </div>
                        </div>

                        {/* Civil Case History */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Civil case history?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, what?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">When?</div>
                                    <DatePicker variant="borderless" format="YYYY-MM-DD" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Why?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>

                        {/* Criminal History */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Criminal history?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, what?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">When?</div>
                                    <DatePicker variant="borderless" format="YYYY-MM-DD" className="w-40" />
                              </div>
                        </div>

                        {/* Bankruptcy */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <div className="text-sm text-gray-700">Bankruptcy?</div>
                                          <div className="text-xs text-gray-500">If so, discharged?</div>
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">When?</div>
                                    <DatePicker variant="borderless" format="YYYY-MM-DD" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PersonalHistory;
