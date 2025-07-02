import React from 'react';
import { DatePicker, Input, Radio, RadioChangeEvent } from 'antd';

const MedicalTreatment: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Medical Treatment</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Primary Care Doctor */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">
                                          Do you have a primary care doctor?
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Doctor Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If yes, who?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Name of Primary care doctor?"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">When was your last visit?</div>
                                    <DatePicker
                                          variant="borderless"
                                          format="YYYY-MM-DD HH:mm"
                                          showTime
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Why were you seen?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Did they prescribe you any medications?</div>
                                    <Input variant="borderless" placeholder="Please list" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default MedicalTreatment;
