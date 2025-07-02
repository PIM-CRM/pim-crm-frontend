import { Input, Select, Radio } from 'antd';

const Intake14 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Year</div>
                              <Select placeholder="Select year" className="w-24" variant={'borderless'}>
                                    <Select.Option value="2010">2010</Select.Option>
                                    <Select.Option value="2011">2011</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Make</div>
                              <Select
                                    className="w-24"
                                    variant={'borderless'}
                                    options={[
                                          { value: 'Honda', label: 'Honda' },
                                          { value: 'Toyota', label: 'Toyota' },
                                          { value: 'Ford', label: 'Ford' },
                                    ]}
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Model</div>
                              <Select
                                    placeholder="Select model"
                                    className="w-24"
                                    variant={'borderless'}
                                    options={[
                                          { value: 'Civic', label: 'Civic' },
                                          { value: 'Accord', label: 'Accord' },
                                          { value: 'CR-V', label: 'CR-V' },
                                          // Add more models as needed
                                    ]}
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Color</div>
                              <Select
                                    placeholder="Select color"
                                    className="w-24"
                                    variant={'borderless'}
                                    options={[
                                          { value: 'Blue', label: 'Blue' },
                                          { value: 'Red', label: 'Red' },
                                          { value: 'Black', label: 'Black' },
                                          { value: 'White', label: 'White' },
                                          // Add more colors as needed
                                    ]}
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Who owns the vehicle?</div>
                              <Select className="w-24" variant={'borderless'} placeholder="Select owner" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">
                                          (If applicable) Does the owner live with you?
                                    </div>
                              </div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you own any other vehicles?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Does a resident relative own a vehicle?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Is the vehicle in storage?</div>
                                    <div className="text-xs text-gray-500">
                                          (Explain client's duty to mitigate damages)
                                    </div>
                              </div>
                              <Select className="w-24" variant={'borderless'} placeholder="Select" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">License plate number?</div>
                              <Input variant="borderless" placeholder="Please type number" className="w-24" />
                        </div>
                  </div>
            </div>
      );
};

export default Intake14;
