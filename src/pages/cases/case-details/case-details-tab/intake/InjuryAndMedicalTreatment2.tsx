import React from 'react';
import { DatePicker, Input, Radio, RadioChangeEvent } from 'antd';

const InjuryAndMedicalTreatment2: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Injuries & Medical Treatment</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Previous Injuries */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <div className="text-sm text-gray-700">
                                                Have you had any previous injuries?
                                          </div>
                                          <div className="text-xs text-gray-500">If yes, what injuries?</div>
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Previous Injury Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If yes, what injuries?</div>
                                    <Input variant="borderless" placeholder="Please describe" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">When?</div>
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
                                    <div className="text-sm text-gray-700">What kind of treatment did you have?</div>
                                    <Input variant="borderless" placeholder="Please explain" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Similar injuries?</div>
                                    <Input variant="borderless" placeholder="Please describe" className="w-40" />
                              </div>
                        </div>

                        {/* Pre-existing Conditions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <div className="text-sm text-gray-700">Pre-existing conditions?</div>
                                          <div className="text-xs text-gray-500">
                                                If yes, what doctor are you seeing?
                                          </div>
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
                                    <div className="text-sm text-gray-700">If yes, what doctor are you seeing?</div>
                                    <Input variant="borderless" placeholder="Name" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Office location?</div>
                                    <Input variant="borderless" placeholder="Please list address" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Medications?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please list medications"
                                          className="w-40"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default InjuryAndMedicalTreatment2;
