import { Input, Radio } from 'antd';

const Intake19 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="text-sm text-gray-700">Property damage insurance information:</div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Property damage paid? </div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you have collision coverage? </div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Have you obtained a rental? </div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Status of repairs?</div>
                              <Input variant="borderless" placeholder="Please type number" className="w-24" />
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Cost of repairs?</div>
                              <Input variant="borderless" placeholder="Please type number" className="w-24" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Has a settlement offer been made?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">What amount did they offer you?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Have you signed a release?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
            </div>
      );
};

export default Intake19;
