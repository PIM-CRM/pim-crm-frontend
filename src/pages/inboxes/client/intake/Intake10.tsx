import { Radio, Input } from 'antd';
import { useState } from 'react';

const Intake10 = () => {
      const [values, setValues] = useState({
            workplace: '',
            occupation: '',
            missedWork: '',
            employerTrackedTime: '',
            paymentType: '',
            priorInjuries: '',
            workersCompFiled: '',
            result: '',
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
                                    <div className="text-sm text-gray-700">Where do you work?</div>
                                    <div className="text-xs text-gray-500">Occupation?</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list"
                                    value={values.workplace}
                                    onChange={handleInputChange('workplace')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Missed work because of accident?</div>
                              <Radio.Group value={values.missedWork} onChange={handleRadioChange('missedWork')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did employer track missed time?</div>
                              <Radio.Group
                                    value={values.employerTrackedTime}
                                    onChange={handleRadioChange('employerTrackedTime')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Hourly or Salary?</div>
                              <Radio.Group value={values.paymentType} onChange={handleRadioChange('paymentType')}>
                                    <Radio value="hourly">Hourly</Radio>
                                    <Radio value="salary">Salary</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Prior on job injuries?</div>
                              <Radio.Group value={values.priorInjuries} onChange={handleRadioChange('priorInjuries')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Workers comp claim filed?</div>
                              <Radio.Group
                                    value={values.workersCompFiled}
                                    onChange={handleRadioChange('workersCompFiled')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, result?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.result}
                                    onChange={handleInputChange('result')}
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake10;
