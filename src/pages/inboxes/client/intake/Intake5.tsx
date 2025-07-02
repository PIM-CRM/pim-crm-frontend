import React, { useState } from 'react';
import { Radio, Input, DatePicker } from 'antd';

const Intake5: React.FC = () => {
      const [values, setValues] = useState({
            previousInjuries: '',
            injuries: '',
            when: null,
            treatment: '',
            similarInjuries: '',
            preExistingConditions: '',
            doctorName: '',
            officeLocation: '',
            medications: '',
      });

      const handleRadioChange = (field: string) => (e: any) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: e.target.value,
            }));
      };

      const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: e.target.value,
            }));
      };

      const handleDateChange = (date: any) => {
            setValues((prev) => ({
                  ...prev,
                  when: date,
            }));
      };

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Have you had any previous injuries?</div>
                              <Radio.Group
                                    value={values.previousInjuries}
                                    onChange={handleRadioChange('previousInjuries')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If yes, what injuries?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please describe"
                                    value={values.injuries}
                                    onChange={handleInputChange('injuries')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.when}
                                    onChange={handleDateChange}
                                    format="MM/DD/YYYY"
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">What kind of treatment did you have?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.treatment}
                                    onChange={handleInputChange('treatment')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Similar injuries?</div>
                                    <div className="text-xs text-gray-500">(To the ones sustained in accident)</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please describe"
                                    value={values.similarInjuries}
                                    onChange={handleInputChange('similarInjuries')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Pre-existing conditions?</div>
                              <Radio.Group
                                    value={values.preExistingConditions}
                                    onChange={handleRadioChange('preExistingConditions')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If yes, what doctor are you seeing?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Name"
                                    value={values.doctorName}
                                    onChange={handleInputChange('doctorName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Office location?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list address"
                                    value={values.officeLocation}
                                    onChange={handleInputChange('officeLocation')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Medications?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list medications"
                                    value={values.medications}
                                    onChange={handleInputChange('medications')}
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake5;
