import { Avatar } from 'antd';

import Messaging from '../../../../components/ui/Messaging';

const ChatBox = () => {
      const messages = [
            {
                  id: 1,
                  sender: 'John Doe',
                  message: 'This is an incoming message with a curved tail.',
                  type: 'incoming',
            },
            {
                  id: 1,
                  sender: 'John Doe',
                  message: 'This is an incoming message with a curved tail.',
                  type: 'incoming',
            },
            {
                  id: 1,
                  sender: 'John Doe',
                  message: 'This is an incoming message with a curved tail.',
                  type: 'incoming',
            },
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
            {
                  id: 2,
                  sender: 'You',
                  message: 'This is an outgoing message with a curved tail.',
                  type: 'outgoing',
            },
            {
                  id: 2,
                  sender: 'You',
                  message: 'This is an outgoing message with a curved tail.',
                  type: 'outgoing',
            },
            {
                  id: 2,
                  sender: 'You',
                  message: 'This is an outgoing message with a curved tail.',
                  type: 'outgoing',
            },
            {
                  id: 2,
                  sender: 'You',
                  message: 'This is an outgoing message with a curved tail.',
                  type: 'outgoing',
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
                  <div className="overflow-y-auto flex-1 p-4 space-y-4 hide-scrollbar">
                        {messages.map((msg, index) => (
                              <div
                                    key={index}
                                    className={` flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
                              >
                                    {msg.type === 'incoming' ? (
                                          <div className="flex gap-3 items-end w-full">
                                                <Avatar
                                                      src="https://randomuser.me/api/portraits/men/1.jpg"
                                                      className="mr-2"
                                                      size={40}
                                                />

                                                <div className="yours messages">
                                                      <div className="message last">
                                                            Hello, how's it going? Hello, how's it going?
                                                      </div>
                                                </div>
                                          </div>
                                    ) : (
                                          <div className="flex gap-3 justify-end items-end w-full">
                                                <div className="mine messages w-fit">
                                                      <div className="message last">
                                                            Hello, how's it going? Hello, how's it going?
                                                      </div>
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

                  <Messaging />
            </div>
      );
};

export default ChatBox;
