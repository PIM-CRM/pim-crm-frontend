import { Select } from 'antd';
import { CiFilter } from 'react-icons/ci';
import { TbChevronDown } from 'react-icons/tb';

const CustomSelect = ({ options }: { options: { value: string; label: string }[] }) => {
      return (
            <div className="flex items-center border border-[#414141] rounded-[90px] p-0 bg-white">
                  <CiFilter size={24} color="#414141" className="ms-2" />
                  <Select
                        suffixIcon={<TbChevronDown size={24} color="#414141" />}
                        style={{
                              width: 120,
                              border: 'none',
                              boxShadow: 'none',
                        }}
                        className="w-full"
                        placeholder="Filter"
                        defaultValue="all"
                        variant={'borderless'}
                  >
                        {options.map((option) => (
                              <Select.Option key={option.value} value={option.value}>
                                    {option.label}
                              </Select.Option>
                        ))}
                  </Select>
            </div>
      );
};

export default CustomSelect;
