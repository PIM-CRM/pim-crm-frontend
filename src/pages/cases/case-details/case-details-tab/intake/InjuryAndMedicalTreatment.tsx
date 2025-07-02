import React from 'react';
import type { RadioChangeEvent } from 'antd/es/radio';
import { DatePicker, Input, Radio } from 'antd';

const InjuryAndMedicalTreatment: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(`Selected = ${e.target.value}`);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Injuries & Medical Treatment</h2>

                  {/* Human body image */}
                  <div className="my-2">
                        <img className="w-full rounded-xl" src="/images/human-body.png" alt="Human Body" />
                  </div>

                  {/* Form Rows */}
                  <div className="mt-10 space-y-4">
                        {/* Yes/No Questions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">
                                          Do you have any photos of the accident or injuries?
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                              <div className="text-xs text-gray-500">If yes, please send photos</div>
                        </div>
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Have you had any ER procedures?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                              <div className="text-xs text-gray-500">If yes, please give us?</div>
                        </div>
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Have you filled any prescriptions?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                              <div className="text-xs text-gray-500">If yes, please give us?</div>
                        </div>
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Have you received treatment?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                              <div className="text-xs text-gray-500">If yes, please give us?</div>
                        </div>

                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When did you go to treatment?</div>
                              <DatePicker
                                    variant="borderless"
                                    placeholder="Select date"
                                    format="YYYY-MM-DD HH:mm"
                                    showTime
                                    className="w-40"
                              />
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Where did you go for treatment?</div>
                                    <Input variant="borderless" placeholder="Name, Address" className="w-40" />
                              </div>
                        </div>
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Were any medications prescribed?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                              <div className="text-xs text-gray-500">If yes, please give us?</div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Recommended treatment / next steps</div>
                                    <Input variant="borderless" placeholder="Please Explain" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default InjuryAndMedicalTreatment;
