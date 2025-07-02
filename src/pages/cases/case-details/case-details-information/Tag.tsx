import React, { useState } from 'react';
import { Select } from 'antd';

interface TagProps {
      label?: string;
}

const Tag: React.FC<TagProps> = () => {
      const [status, setStatus] = useState('open');

      const handleChange = (value: string) => {
            setStatus(value);
      };

      return (
            <div className="p-4 bg-white rounded-lg border shadow-md">
                  <h2 className="mb-4 text-lg font-semibold">Case Status</h2>
                  <Select value={status} onChange={handleChange} className="w-[100px]">
                        <Select.Option value="open">Open</Select.Option>
                        <Select.Option value="close">Close</Select.Option>
                  </Select>
            </div>
      );
};

export default Tag;
