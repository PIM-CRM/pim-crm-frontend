import React from 'react';
import { Input } from 'antd';

const InVolvedVehicles: React.FC = () => {
      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">
                        Adverse Vehicle / Other involved vehicles and Insurance
                  </h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Vehicle Count */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">How many vehicles were involved?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Enter number of vehicles"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        {/* Vehicle Details */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Make</div>
                                    <Input variant="borderless" placeholder="Enter make" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Model</div>
                                    <Input variant="borderless" placeholder="Enter model" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Color</div>
                                    <Input variant="borderless" placeholder="Enter color" className="w-40" />
                              </div>
                        </div>

                        {/* License and Insurance */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">License plate number</div>
                                    <Input variant="borderless" placeholder="Enter license plate" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Adverse insurance?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Enter insurance company"
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Adverse policy number?</div>
                                    <Input variant="borderless" placeholder="Enter policy number" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default InVolvedVehicles;
