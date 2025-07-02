import { Radio, Input, DatePicker } from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

const Intake11 = () => {
      const [values, setValues] = useState({
            pendingPIClaims: '',
            civilCaseHistory: '',
            civilCaseDetails: '',
            civilCaseDate: null as Dayjs | null,
            civilCaseReason: '',
            criminalHistory: '',
            criminalDetails: '',
            criminalDate: null as Dayjs | null,
            bankruptcy: '',
            bankruptcyDate: null as Dayjs | null,
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

      const handleDateChange = (field: string) => (date: Dayjs | null) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: date,
            }));
      };

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Pending PI claims?</div>
                                    <div className="text-xs text-gray-500">If so, please explain injuries</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please describe"
                                    value={values.pendingPIClaims}
                                    onChange={handleInputChange('pendingPIClaims')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Civil case history?</div>
                              <Radio.Group
                                    value={values.civilCaseHistory}
                                    onChange={handleRadioChange('civilCaseHistory')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, what?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.civilCaseDetails}
                                    onChange={handleInputChange('civilCaseDetails')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.civilCaseDate}
                                    onChange={handleDateChange('civilCaseDate')}
                                    format="MMMM DD, YYYY"
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Why?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.civilCaseReason}
                                    onChange={handleInputChange('civilCaseReason')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Criminal history?</div>
                              <Radio.Group
                                    value={values.criminalHistory}
                                    onChange={handleRadioChange('criminalHistory')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If so, what?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.criminalDetails}
                                    onChange={handleInputChange('criminalDetails')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.criminalDate}
                                    onChange={handleDateChange('criminalDate')}
                                    format="MMMM DD, YYYY"
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Bankruptcy?</div>
                                    <div className="text-xs text-gray-500">If so, discharged?</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.bankruptcy}
                                    onChange={handleInputChange('bankruptcy')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.bankruptcyDate}
                                    onChange={handleDateChange('bankruptcyDate')}
                                    format="MMMM DD, YYYY"
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake11;
