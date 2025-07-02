import React, { useState } from 'react';
import { Input } from 'antd';

const EffectsOfAccident: React.FC = () => {
      const [values, setValues] = useState({
            dailyLifeEffects: '',
            limitations: '',
            additionalInfo: '',
      });

      const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({
                  ...prev,
                  [field]: e.target.value,
            }));
      };

      return (
            <div className="p-8 bg-white">
                  <h2 className="mb-4 text-lg font-semibold">Effects of Accident / Injury</h2>
                  <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">How daily life been effected?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please explain"
                                          value={values.dailyLifeEffects}
                                          onChange={handleInputChange('dailyLifeEffects')}
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Limited in any way?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please explain"
                                          value={values.limitations}
                                          onChange={handleInputChange('limitations')}
                                          className="w-40"
                                    />
                              </div>
                        </div>

                        <div className="pb-2 space-y-1 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">Anything else to share?</div>
                                    <Input
                                          variant="borderless"
                                          placeholder="Please explain"
                                          value={values.additionalInfo}
                                          onChange={handleInputChange('additionalInfo')}
                                          className="w-40"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default EffectsOfAccident;
