import React from 'react';
import { DatePicker, Input, Select } from 'antd';

const PersonalInformation: React.FC = () => {
      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        {/* Address */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Address</div>
                                    <Input variant="borderless" placeholder="Search Maps" className="w-40" />
                              </div>
                        </div>

                        {/* Length of Residence */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Length of time at current residence?</div>
                                    <Input variant="borderless" placeholder="3.00" className="w-40" />
                              </div>
                        </div>

                        {/* Contact Information */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Alternate phone Number</div>
                                    <Input variant="borderless" placeholder="Type Number" className="w-40" />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Alternate email</div>
                                    <Input variant="borderless" placeholder="Type Email" className="w-40" />
                              </div>
                        </div>

                        {/* Identification */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Social security number</div>
                                    <Input variant="borderless" placeholder="Type Number" className="w-40" />
                              </div>
                        </div>

                        {/* Marital Status */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Marital Status</div>
                                    <Select
                                          variant="borderless"
                                          className="w-40"
                                          options={[
                                                { value: 'single', label: 'Single' },
                                                { value: 'married', label: 'Married' },
                                                { value: 'divorced', label: 'Divorced' },
                                                { value: 'widowed', label: 'Widowed' },
                                          ]}
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">If so, name:</div>
                                    <Input variant="borderless" placeholder="Write Spouse Name" className="w-40" />
                              </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Date of Birth</div>
                                    <DatePicker variant="borderless" format="YYYY-MM-DD" className="w-40" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PersonalInformation;
