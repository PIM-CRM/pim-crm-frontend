import { Input } from 'antd';

const Intake12 = () => {
      return (
            <div>
                  <div className="pb-2 space-y-3 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">How daily life been effected?</div>
                                    <div className="text-xs text-gray-500">Please enter your answer</div>
                              </div>
                              <Input variant="borderless" placeholder="Please enter your answer" className="w-40" />
                        </div>
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Limited in any way?</div>
                                    <div className="text-xs text-gray-500">Please enter your answer</div>
                              </div>
                              <Input variant="borderless" placeholder="Please enter your answer" className="w-40" />
                        </div>
                        <div className="flex justify-between items-center">
                              <div>
                                    <div className="text-sm text-gray-700">Anything else to share?</div>
                                    <div className="text-xs text-gray-500">Please enter your answer</div>
                              </div>
                              <Input variant="borderless" placeholder="Please enter your answer" className="w-40" />
                        </div>
                  </div>
            </div>
      );
};

export default Intake12;
