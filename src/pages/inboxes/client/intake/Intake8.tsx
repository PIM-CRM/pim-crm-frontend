import { Radio, Input } from 'antd';
import { useState } from 'react';

const Intake8 = () => {
      const [values, setValues] = useState({
            hasHealthInsurance: '',
            carrierName: '',
            groupNumber: '',
            contactPerson: '',
            contactNumber: '',
            hasMedicare: '',
            billsFiled: '',
            // Additional fields from your image if needed
            injuryType: '',
            description: '',
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

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  {/* Health Insurance Section */}
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Workers Comp?</div>
                              <Radio.Group
                                    value={values.hasHealthInsurance}
                                    onChange={handleRadioChange('hasHealthInsurance')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Was a claim filed?</div>
                              <Radio.Group
                                    value={values.hasHealthInsurance}
                                    onChange={handleRadioChange('hasHealthInsurance')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  {/* Carrier Name */}
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, what is the claim number?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please enter #"
                                    value={values.carrierName}
                                    onChange={handleInputChange('carrierName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  {/* Group Number */}
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Adjusters name?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Name"
                                    value={values.groupNumber}
                                    onChange={handleInputChange('groupNumber')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  {/* Contact Person */}
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Adjuster phone number?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please enter number"
                                    value={values.contactPerson}
                                    onChange={handleInputChange('contactPerson')}
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake8;
