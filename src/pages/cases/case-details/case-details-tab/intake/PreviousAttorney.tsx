import React from 'react';
import { Input, Radio, RadioChangeEvent } from 'antd';

const PreviousAttorney: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Previous Attorney</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Previous Attorney Status */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <div className="text-sm text-gray-700">Previous attorney?</div>
                                          <div className="text-xs text-gray-500">
                                                Advise client you are sending a letter to the other attorney to get
                                                their file
                                          </div>
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Attorney Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, who?</div>
                                    <Input variant="borderless" placeholder="First, Last Name" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Phone Number?</div>
                                    <Input variant="borderless" placeholder="(___)-___-____" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Email</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please enter email address"
                                          className="w-40"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PreviousAttorney;
