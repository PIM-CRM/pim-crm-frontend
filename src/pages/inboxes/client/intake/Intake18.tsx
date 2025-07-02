import { Input, Radio } from 'antd';

const Intake18 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Have you spoken to the adverse insurance?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Claim number?</div>
                              <Input variant="borderless" placeholder="Please type number" className="w-24" />
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Adjuster name?</div>
                              <Input variant="borderless" placeholder="Please type name" className="w-24" />
                        </div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Adjuster phone number?</div>
                              <Input variant="borderless" placeholder="(____)___-_____" className="w-24" />
                        </div>
                  </div>

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did you make a recorded statement?</div>
                              <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                              </Radio.Group>
                        </div>
                  </div>
            </div>
      );
};

export default Intake18;
