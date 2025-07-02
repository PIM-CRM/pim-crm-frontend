import { Radio, Input, DatePicker } from 'antd';

const Intake4 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">
                                          Do you have any photos of the accident or...
                                    </div>
                                    <div className="text-xs text-gray-500">If yes, please send photos</div>
                              </div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Have you had any ER procedures?</div>
                                    <div className="text-xs text-gray-500">If so, what were they?</div>
                              </div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Have you filled any perscriptions?</div>
                                    <div className="text-xs text-gray-500">If so, please send receipts</div>
                              </div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Name of ambulance company?</div>
                              <Input variant="borderless" placeholder="Please provide" className="w-40" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Have you received treatment?</div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When did you go to treatment?</div>
                              <DatePicker variant="borderless" format="MM/DD/YYYY" className="w-40" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Where did you go for treatment?</div>
                              <Input variant="borderless" placeholder="Name, Address" className="w-40" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Were any medications persribed?</div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Recommended treatment / next steps</div>
                              <Input variant="borderless" placeholder="Please explain" className="w-40" />
                        </div>
                  </div>
            </div>
      );
};

export default Intake4;
