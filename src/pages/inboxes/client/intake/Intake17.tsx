import { Input, Select } from 'antd';

const Intake17 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">How many vehicles were involved?</div>
                              <Select placeholder="Select" className="w-24" variant={'borderless'} defaultValue="3.00">
                                    <Select.Option value="3.00">3.00</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Year</div>
                                    <div className="text-xs text-gray-500">(Adverse vehicle / other vehicle)</div>
                              </div>
                              <Select
                                    placeholder="Select year"
                                    className="w-24"
                                    variant={'borderless'}
                                    defaultValue="2024"
                              >
                                    <Select.Option value="2024">2024</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Make</div>
                                    <div className="text-xs text-gray-500">(Adverse vehicle / other vehicle)</div>
                              </div>
                              <Select
                                    placeholder="Select make"
                                    className="w-24"
                                    variant={'borderless'}
                                    defaultValue="Chevy"
                              >
                                    <Select.Option value="Chevy">Chevy</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Model</div>
                                    <div className="text-xs text-gray-500">(Adverse vehicle / other vehicle)</div>
                              </div>
                              <Select
                                    placeholder="Select model"
                                    className="w-24"
                                    variant={'borderless'}
                                    defaultValue="Equinox"
                              >
                                    <Select.Option value="Equinox">Equinox</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Color</div>
                                    <div className="text-xs text-gray-500">(Adverse vehicle / other vehicle)</div>
                              </div>
                              <Select
                                    placeholder="Select color"
                                    className="w-24"
                                    variant={'borderless'}
                                    defaultValue="Blue"
                              >
                                    <Select.Option value="Blue">Blue</Select.Option>
                              </Select>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">License plate number</div>
                                    <div className="text-xs text-gray-500">(Adverse vehicle / other vehicle)</div>
                              </div>
                              <Input variant="borderless" placeholder="Please enter number" className="w-24" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Adverse insurance?</div>
                                    <div className="text-xs text-gray-500">(Please leave note if other)</div>
                              </div>
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
                              <div className="text-sm text-gray-700">Adverse policy number?</div>
                              <Input variant="borderless" placeholder="Please enter number" className="w-24" />
                        </div>
                  </div>
            </div>
      );
};

export default Intake17;
