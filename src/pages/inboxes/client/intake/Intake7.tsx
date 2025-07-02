import { Radio, Input } from 'antd';
import { useState } from 'react';

const Intake7 = () => {
      const [values, setValues] = useState({
            hasHealthInsurance: '',
            carrierName: '',
            groupNumber: '',
            contactPerson: '',
            contactNumber: '',
            hasMedicare: '',
            billsFiled: '',
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
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you have health insurance?</div>
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
                              <div className="text-sm text-gray-700">If so, who is your carrier?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list name of carrier"
                                    value={values.carrierName}
                                    onChange={handleInputChange('carrierName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Group number?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please enter #"
                                    value={values.groupNumber}
                                    onChange={handleInputChange('groupNumber')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Who did you deal with?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Name"
                                    value={values.contactPerson}
                                    onChange={handleInputChange('contactPerson')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Contact number?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list number"
                                    value={values.contactNumber}
                                    onChange={handleInputChange('contactNumber')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you have medicare / medicaid?</div>
                              <Radio.Group value={values.hasMedicare} onChange={handleRadioChange('hasMedicare')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Bills filed?</div>
                              <Radio.Group value={values.billsFiled} onChange={handleRadioChange('billsFiled')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
            </div>
      );
};

export default Intake7;
