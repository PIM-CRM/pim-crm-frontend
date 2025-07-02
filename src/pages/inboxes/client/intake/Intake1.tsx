import { Radio, Input, DatePicker } from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

const Intake1 = () => {
      const [values, setValues] = useState({
            accidentDateTime: null as Dayjs | null,
            location: '',
            driver: '',
            hasPassengers: '',
            occurredOnJob: '',
            accidentDescription: '',
            pointOfImpact: '',
            contributingFactors: '',
            avoidanceActions: '',
            hasPicturesVideos: '',
            hasWitnesses: '',
            policeArrived: '',
            citationsGiven: '',
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
                  accidentDateTime: date,
            }));
      };

      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">What date and time did the accident happen?</div>
                              <DatePicker
                                    variant="borderless"
                                    value={values.accidentDateTime}
                                    onChange={handleDateChange}
                                    format="YYYY-MM-DD HH:mm"
                                    showTime
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Location?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="City, State, Street, Intersection"
                                    value={values.location}
                                    onChange={handleInputChange('location')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Driver?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Name"
                                    value={values.driver}
                                    onChange={handleInputChange('driver')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Were there any passengers?</div>
                              <Radio.Group value={values.hasPassengers} onChange={handleRadioChange('hasPassengers')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Did the accident occur on the job?</div>
                                    <div className="text-xs text-gray-500">Uber, Lyft, Doordash, Amazon, etc?</div>
                              </div>
                              <Radio.Group value={values.occurredOnJob} onChange={handleRadioChange('occurredOnJob')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Describe the accident</div>
                                    <div className="text-xs text-gray-500">What did the other driver do wrong?</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Use notes if needed"
                                    value={values.accidentDescription}
                                    onChange={handleInputChange('accidentDescription')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Point of impact?</div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please describe"
                                    value={values.pointOfImpact}
                                    onChange={handleInputChange('pointOfImpact')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Contributing factors?</div>
                                    <div className="text-xs text-gray-500">Weather conditions, etc?</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.contributingFactors}
                                    onChange={handleInputChange('contributingFactors')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Anything to avoid the accident?</div>
                                    <div className="text-xs text-gray-500">Swerve, etc?</div>
                              </div>
                              <Input
                                    variant="borderless"
                                    placeholder="Please explain"
                                    value={values.avoidanceActions}
                                    onChange={handleInputChange('avoidanceActions')}
                                    className="w-40"
                              />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Did you take pictures or videos?</div>
                                    <div className="text-xs text-gray-500">Please send via portal, text, or email</div>
                              </div>
                              <Radio.Group
                                    value={values.hasPicturesVideos}
                                    onChange={handleRadioChange('hasPicturesVideos')}
                              >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Were there any witnesses?</div>
                                    <div className="text-xs text-gray-500">Please list witness in notes</div>
                              </div>
                              <Radio.Group value={values.hasWitnesses} onChange={handleRadioChange('hasWitnesses')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Did the police arrive to the scene?</div>
                                    <div className="text-xs text-gray-500">Please list report number in notes</div>
                              </div>
                              <Radio.Group value={values.policeArrived} onChange={handleRadioChange('policeArrived')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Were any citations given?</div>
                                    <div className="text-xs text-gray-500">
                                          You or adverse? Arrests? Please explain in notes
                                    </div>
                              </div>
                              <Radio.Group value={values.citationsGiven} onChange={handleRadioChange('citationsGiven')}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
            </div>
      );
};

export default Intake1;
