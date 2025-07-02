import { Radio, RadioChangeEvent } from 'antd';

export const YesNoQuestion: React.FC<{
      label: string;
      description?: string;
      onChange: (e: RadioChangeEvent) => void;
      value?: string;
}> = ({ label, description, onChange, value }) => (
      <div className="pb-2 space-y-1 border-b border-gray-200">
            <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-700">{label}</div>
                  <Radio.Group
                        className="flex gap-4 items-center"
                        optionType="default"
                        onChange={onChange}
                        value={value}
                  >
                        <Radio value="yes" className="custom-radio">
                              <span className="text-sm text-gray-700">Yes</span>
                        </Radio>
                        <Radio value="no" className="custom-radio">
                              <span className="text-sm text-gray-700">No</span>
                        </Radio>
                  </Radio.Group>
            </div>
            {description && <div className="text-xs text-gray-500">{description}</div>}
      </div>
);
