import { Avatar, Input } from 'antd';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons';

const OpportunityChatBox = () => {
    const messages = [
        {
            id: 1,
            sender: 'John Doe',
            message: 'This is an incoming message with a curved tail.',
            type: 'incoming',
        },
        {
            id: 2,
            sender: 'You',
            message: 'This is an outgoing message with a curved tail.',
            type: 'outgoing',
        },
        // Add more messages as needed...
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-120px)] border ">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
                {messages.map((msg, index) => (
                    <div key={index} className={` flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
                        {msg.type === 'incoming' ? (
                            <div className="flex gap-3 items-end w-full ">
                                <Avatar
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    className="mr-2"
                                    size={40}
                                />

                                <div className="yours messages">
                                    <div className="message last">Hello, how's it going? Hello, how's it going?</div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-3 items-end justify-end w-full ">
                                <div className="mine messages w-fit">
                                    <div className="message last">Hello, how's it going? Hello, how's it going?</div>
                                </div>
                                <Avatar
                                    src="https://randomuser.me/api/portraits/men/25.jpg"
                                    className="mr-2"
                                    size={40}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input Box - Static at the Bottom */}
            <div className="bg-white flex items-center p-2 border-t border-gray-200 sticky bottom-0">
                <label htmlFor="file" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                    <PaperClipOutlined className="text-xl" />
                    <input type="file" id="file" className="hidden" />
                </label>
                <Input.TextArea
                    style={{ borderRadius: 6 }}
                    placeholder="Message"
                    className="flex-1 mx-2 resize-none"
                    size="large"
                />
                <button className="text-blue-500 hover:text-blue-700">
                    <SendOutlined className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default OpportunityChatBox;
