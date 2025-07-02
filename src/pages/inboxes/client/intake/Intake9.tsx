import { Radio, Input } from 'antd';
import { useState } from 'react';

const Intake9 = () => {
      const [values, setValues] = useState({
            hasPreviousAttorney: '',
            attorneyName: '',
            phoneNumber: '',
            email: '',
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
                              <div>
                                    <div className="text-sm text-gray-700">Previous attorney?</div>
                                    <div className="text-xs text-gray-500">
                                          Advise client you are sending a letter to the other...
                                    </div>
                              </div>
                              <Radio.Group
                                    value={values.hasPreviousAttorney}
                                    onChange={handleRadioChange('hasPreviousAttorney')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, who?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="First, Last Name"
                                    value={values.attorneyName}
                                    onChange={handleInputChange('attorneyName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Phone Number?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="(___)-___-____"
                                    value={values.phoneNumber}
                                    onChange={handleInputChange('phoneNumber')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Email</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please enter email address"
                                    value={values.email}
                                    onChange={handleInputChange('email')}
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake9;
