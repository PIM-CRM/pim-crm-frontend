import { Input, Radio, Select } from 'antd';

const Intake16 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Who is the vehicle insured with?</div>
                              <Select
                                    placeholder="Select"
                                    className="w-24"
                                    variant={'borderless'}
                                    defaultValue="All-State"
                              >
                                    <Select.Option value="All-State">All-State</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you have the policy...</div>
                              <Input variant="borderless" placeholder="Please enter policy number" className="w-24" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Claim number (if applicable)</div>
                              <Input variant="borderless" placeholder="Please enter claim number" className="w-24" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did you report the accident to your carrier?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did you give a recorded statement to an...</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="mb-2 text-sm text-gray-700">What type of coverage do you have?</div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">UM?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Collision?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Medpay?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Out of state policy? PIP</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
            </div>
      );
};

export default Intake16;
