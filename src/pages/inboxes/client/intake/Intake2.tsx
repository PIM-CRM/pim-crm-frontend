import { Radio } from 'antd';

const Intake2 = () => {
      return (
            <div className="overflow-y-auto space-y-4 h-full hide-scrollbar">
                  {/* Row items */}

                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Were there any witnesses?</div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                        <div className="text-xs text-gray-500">Please list witness in notes</div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Did the police arrive to the scene?</div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                        <div className="text-xs text-gray-500">Please list report number in notes</div>
                  </div>
                  <div className="pb-2 space-y-1 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-700">Were any citations given?</div>
                              <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                              </Radio.Group>
                        </div>
                        <div className="text-xs text-gray-500">You or adverse? Arrests? Please explain in notes</div>
                  </div>
            </div>
      );
};

export default Intake2;
