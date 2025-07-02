import { Radio, Input, DatePicker } from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

const Intake6 = () => {
      const [values, setValues] = useState({
            hasPrimaryCareDoctor: '',
            doctorName: '',
            lastVisitDate: null as Dayjs | null,
            reasonForVisit: '',
            prescriptions: '',
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

      const handleDateChange = (date: Dayjs | null) => {
            setValues((prev) => ({
                  ...prev,
                  lastVisitDate: date,
            }));
      };

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Do you have a primary care doctor?</div>
                              <Radio.Group
                                    value={values.hasPrimaryCareDoctor}
                                    onChange={handleRadioChange('hasPrimaryCareDoctor')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">If yes, who?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Name of Primary care doctor?"
                                    value={values.doctorName}
                                    onChange={handleInputChange('doctorName')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">When was your last visit?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.lastVisitDate}
                                    onChange={handleDateChange}
                                    format="MMMM DD, YYYY"
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Why were you seen?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.reasonForVisit}
                                    onChange={handleInputChange('reasonForVisit')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did they prescribe you any...</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please list"
                                    value={values.prescriptions}
                                    onChange={handleInputChange('prescriptions')}
                                    className="w-40"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Intake6;
