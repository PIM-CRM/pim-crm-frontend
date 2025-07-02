import { Input, Radio, RadioChangeEvent } from 'antd';

const VehicleInfo: React.FC = () => {
      const handleYesNoChange = (e: RadioChangeEvent) => {
            console.log(e.target.value);
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Vehicle Information (Involved in accident)</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Vehicle Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Year</div>
                                    <Input variant="borderless" placeholder="Enter year" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Make</div>
                                    <Input variant="borderless" placeholder="Enter make" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Color</div>
                                    <Input variant="borderless" placeholder="Enter color" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Who owns the vehicle?</div>
                                    <Input variant="borderless" placeholder="Enter owner name" className="w-40" />
                              </div>
                        </div>

                        {/* Yes/No Questions */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">
                                          (If applicable) Does the owner live with you?
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Do you own any other vehicles?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Does a resident relative own a vehicle?</div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* Storage Question */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div>
                                          <div className="text-sm text-gray-700">Is the vehicle in storage?</div>
                                          <div className="text-xs text-gray-500">
                                                Explain client's duty to mitigate damages
                                          </div>
                                    </div>
                                    <Radio.Group onChange={handleYesNoChange}>
                                          <Radio value="yes">Yes</Radio>
                                          <Radio value="no">No</Radio>
                                    </Radio.Group>
                              </div>
                        </div>

                        {/* License Plate */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">License plate number?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Enter license plate number"
                                          className="w-40"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default VehicleInfo;
