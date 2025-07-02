import { useState } from 'react';

interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
      label?: string;
}

const CustomCheckbox = ({ label, className, ...props }: CustomCheckboxProps) => {
      const [checked, setChecked] = useState(false);

      return (
            <label className="inline-flex items-center cursor-pointer">
                  <div className="relative">
                        <input
                              type="checkbox"
                              className="sr-only"
                              checked={checked}
                              onChange={(e) => setChecked(e.target.checked)}
                              {...props}
                        />
                        <div
                              className={`
            w-8 h-8 border-2 border-gray-300 rounded-full
            flex items-center justify-center
            transition-colors duration-200 ease-in-out
            ${checked ? 'border-gray-300' : ''} ${className}`}
                        >
                              <div
                                    className={`
              w-5 h-5 rounded-full
              transform transition-all duration-200 ease-in-out
              ${checked ? 'bg-[#06b217] scale-100' : 'bg-transparent scale-0'}
            `}
                              />
                        </div>
                  </div>
                  {label && <span className="ml-2">{label}</span>}
            </label>
      );
};

export default CustomCheckbox;
