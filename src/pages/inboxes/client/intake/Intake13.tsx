import { Input, InputNumber, DatePicker, Select } from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

const Intake13 = () => {
      const [values, setValues] = useState({
            address: '',
            residenceTime: 3.0,
            alternatePhone: '',
            alternateEmail: '',
            ssn: '',
            maritalStatus: 'Single',
            spouseName: '',
            dateOfBirth: null as Dayjs | null,
      });

      const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: e.target.value,
            }));
      };

      const handleNumberChange = (field: string) => (value: number | null) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: value,
            }));
      };

      const handleDateChange = (date: Dayjs | null) => {
            setValues((prev) => ({
                  ...prev,
                  dateOfBirth: date,
            }));
      };

      const handleSelectChange = (value: string) => {
            setValues((prev) => ({
                  ...prev,
                  maritalStatus: value,
            }));
      };

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Address</div>
                              <div className="flex gap-2">
                                    <Input
                                          variant="borderless"
                                          placeholder="Search Maps"
                                          value={values.address}
                                          onChange={handleInputChange('address')}
                                          className="w-40"
                                    />
                              </div>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Length of time at current residence?</div>
                              <div className="flex gap-2 items-center">
                                    <InputNumber
                                          variant="borderless"
                                          value={values.residenceTime}
                                          onChange={handleNumberChange('residenceTime')}
                                          className="w-20"
                                    />
                                    <span className="text-sm text-gray-700">Years</span>
                              </div>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Alternate phone Number</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Type Number"
                                    value={values.alternatePhone}
                                    onChange={handleInputChange('alternatePhone')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Alternate email</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Type Email"
                                    value={values.alternateEmail}
                                    onChange={handleInputChange('alternateEmail')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Social security number</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Type Number"
                                    value={values.ssn}
                                    onChange={handleInputChange('ssn')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Marital Status</div>
                              <Select
                                    value={values.maritalStatus}
                                    onChange={handleSelectChange}
                                    className="w-40"
                                    bordered={false}
                                    options={[
                                          { value: 'Single', label: 'Single' },
                                          { value: 'Married', label: 'Married' },
                                          { value: 'Divorced', label: 'Divorced' },
                                          { value: 'Widowed', label: 'Widowed' },
                                    ]}
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, name:</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Write Spouse Name"
                                    value={values.spouseName}
                                    onChange={handleInputChange('spouseName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Date of Birth</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.dateOfBirth}
                                    onChange={handleDateChange}
                                    format="MMMM DD, YYYY"
                                    placeholder="Date of Birth"
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake13;
