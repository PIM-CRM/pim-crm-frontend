import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const PimChat = () => {
      const buttonsData = [
            { icon: '🧐', label: 'What type of injuries does my client have?' },
            { icon: '🩹', label: 'Does my client have prior injuries?' },
            { icon: '📄', label: 'LOR (Liability)' },
            { icon: '📄', label: 'LOR (UM)' },
            { icon: '📄', label: 'LOR' },
            { icon: '📄', label: 'Welcome letter' },
            { icon: '📑', label: 'Prior attorney discharge letter' },
            { icon: '🚑', label: 'Accident report request' },
            { icon: '🩺', label: 'Medical record request' },
            { icon: '💵', label: 'Medical billing request' },
            { icon: '🏥', label: 'ER Physicians billing request' },
      ];

      return (
            <div className="flex flex-col justify-center items-center p-1 mt-3 rounded-xl border h-[60vh] overflow-y-scroll hide-scrollbar">
                  {/* Header Section */}
                  <div className="mb-8 text-center">
                        <h1 className="flex gap-3 items-center text-4xl font-bold text-gray-900">
                              The power of PIM
                              <span className="">
                                    <img src="/icons/alien.png" alt="" />
                              </span>
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">A personal injury attorney's dream!</p>
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center px-4 py-2 mb-8 w-full max-w-2xl bg-white rounded-full border border-gray-300 shadow-sm">
                        <img src="/icons/pim.png" alt="" />
                        <Input
                              placeholder="Ask Something..."
                              variant={'borderless'}
                              allowClear={{
                                    clearIcon: <CloseOutlined className="text-lg text-gray-500 cursor-pointer" />,
                              }}
                              className="flex-1 text-sm placeholder-gray-400 text-gray-700"
                        />
                  </div>

                  {/* Buttons Grid */}
                  <div className="flex flex-wrap gap-5 w-full max-w-4xl">
                        {buttonsData.map((button, index) => (
                              <Button
                                    key={index}
                                    className="flex justify-center items-center py-5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
                                    icon={
                                          <span className="mr-2 text-lg" role="img" aria-label="icon">
                                                {button.icon}
                                          </span>
                                    }
                              >
                                    {button.label}
                              </Button>
                        ))}
                  </div>
            </div>
      );
};

export default PimChat;
