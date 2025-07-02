import { Input, Upload } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { BiChevronDown, BiSend } from 'react-icons/bi';
import { CgSmile } from 'react-icons/cg';
import { GiPaperClip } from 'react-icons/gi';
import JoditEditor from 'jodit-react';
const { TextArea } = Input;

function Messaging() {
      const [activeTab, setActiveTab] = useState('email');

      const [content, setContent] = useState('');
      const editor = useRef<any>(null);
      const [message, setMessage] = useState('');
      const [fromValue, setFromValue] = useState(activeTab === 'sms' ? '+1 678-783-8351' : 'email@example.com');
      const [toValue, setToValue] = useState(activeTab === 'sms' ? '+1 478-319-9943' : 'contact@example.com');

      const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
      };

      useEffect(() => {
            setFromValue(activeTab === 'sms' ? '+1 678-783-8351' : 'email@example.com');
            setToValue(activeTab === 'sms' ? '+1 478-319-9943' : 'contact@example.com');
      }, [activeTab]);

      const config = {
            readonly: false,
            placeholder: 'Start typing...',
            height: 200,
            enableDragAndDropFileToEditor: true,
            buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'link', 'unlink'],
            uploader: {
                  insertImageAsBase64URI: true,
            },
            style: {
                  background: 'white',
            },
            allowResizeY: true,
            minHeight: 200,
            maxHeight: 500,
            useSearch: false,
      };

      return (
            <div className="p-3">
                  {/* Message Type Tabs */}
                  <div className="flex w-fit mb-1 bg-gray-100 p-0.5 rounded-lg">
                        {['sms', 'email'].map((tab) => (
                              <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-10 py-0.5 text-sm font-medium rounded-md transition-colors
              ${activeTab === tab ? 'bg-white text-[#007eef] shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                              >
                                    {tab.toUpperCase()}
                              </button>
                        ))}
                  </div>

                  {/* Phone Number Fields */}
                  <div className="grid grid-cols-2 gap-4 mb-2">
                        <div className="relative">
                              <label className="block mb-1 text-sm text-gray-500">From:</label>
                              <div className="relative">
                                    <Input
                                          type="text"
                                          value={fromValue}
                                          onChange={(e) => setFromValue(e.target.value)}
                                          className="px-3 py-1 pr-8 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <BiChevronDown className="absolute right-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none" />
                              </div>
                        </div>
                        <div className="relative">
                              <label className="block mb-1 text-sm text-gray-500">To:</label>
                              <div className="relative">
                                    <input
                                          type="text"
                                          value={toValue}
                                          onChange={(e) => setToValue(e.target.value)}
                                          className="px-3 py-1 pr-8 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <BiChevronDown className="absolute right-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none" />
                              </div>
                        </div>
                  </div>

                  <div>
                        <div
                              style={{
                                    display: activeTab === 'sms' ? 'none' : 'block',
                              }}
                              className="relative mb-2"
                        >
                              <input
                                    className="px-3 py-1 mb-2 w-full rounded-md border border-gray-300 focus:outline-non"
                                    placeholder="Subject"
                              />
                              <div className="jodit-container">
                                    <JoditEditor
                                          ref={editor}
                                          value={content}
                                          config={config}
                                          onBlur={(newContent) => setContent(newContent)}
                                          onChange={() => {}}
                                    />
                              </div>
                        </div>
                  </div>
                  {/* Message Input Area */}
                  <div
                        style={{
                              display: activeTab === 'sms' ? 'block' : 'none',
                        }}
                        className="relative mb-4"
                  >
                        <TextArea
                              rows={2}
                              value={message}
                              onChange={handleMessageChange}
                              placeholder="Type a message"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] resize-none"
                        />
                  </div>

                  {/* Bottom Toolbar */}
                  <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                              <div
                                    style={{
                                          display: activeTab === 'sms' ? 'none' : 'block',
                                    }}
                              >
                                    <Upload>
                                          <button className="p-2 text-gray-500 rounded-md transition-colors hover:text-gray-700 hover:bg-gray-100">
                                                <GiPaperClip className="w-5 h-5" />
                                          </button>
                                    </Upload>
                              </div>
                              <button className="p-2 text-gray-500 rounded-md transition-colors hover:text-gray-700 hover:bg-gray-100">
                                    <CgSmile className="w-5 h-5" />
                              </button>
                        </div>

                        <div className="flex gap-4 items-center">
                              <button
                                    onClick={() => setMessage('')}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                    Clear
                              </button>
                              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#007eef] rounded-md hover:bg-[#0062ba] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <BiSend className="mr-2 w-4 h-4" />
                                    Send
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default Messaging;
