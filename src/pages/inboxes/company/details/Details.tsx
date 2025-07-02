import { Avatar, Input } from 'antd';
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaAddressBook } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const Details = () => {
      const details = [
            { icon: <FaCalendarAlt />, label: 'Date Created', value: 'Label' },

            { icon: <FaUser />, label: 'Name', value: 'Nadir Hossain B Baria' },
            { icon: <FaPhoneAlt />, label: 'Phone Number', value: '+01 6541656165' },
            { icon: <FaEnvelope />, label: 'Email', value: 'nadir@gmail.com' },
            { icon: <TbWorld />, label: 'Website', value: 'https://www.google.com/' },
            { icon: <FaAddressBook />, label: 'Address', value: 'Dhaka, Bangladesh' },
      ];
      const notes = [
            {
                  id: 1,
                  author: 'Carli Bryant',
                  timestamp: 'Today 8:30 AM CT',
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                  content: `
            @Cindy Lou Hou Mr. Johnson would like to see the chiropractor as soon as possible. His back is hurting from the car accident. 
            He is also interested in seeing the psychiatrist for his PTSD.
          `,
            },
      ];
      return (
            <div className="my-2">
                  <div className="overflow-y-auto space-y-4 h-[calc(100vh-450px)] hide-custom-scrollbar">
                        {details.map((detail, index) => (
                              <div key={index} className="flex items-center py-2 border-b last:border-none">
                                    <div className="p-2 mr-4 text-sm text-white bg-blue-500 rounded-full">
                                          {detail.icon}
                                    </div>
                                    <div className="flex flex-1 justify-between">
                                          <p className="text-sm font-medium text-gray-700">{detail.label}</p>
                                          {detail.value ? (
                                                <p className="text-sm text-gray-600">{detail.value}</p>
                                          ) : (
                                                <p className="text-sm italic text-gray-400">No additional details</p>
                                          )}
                                    </div>
                                    <div></div>
                              </div>
                        ))}
                  </div>
                  <div className="mt-auto">
                        <h3 className="mb-4 text-lg font-semibold text-secondary">Note</h3>

                        <div className="space-y-4">
                              {notes.map((note) => (
                                    <div key={note.id} className="flex gap-4">
                                          <div>
                                                <Avatar
                                                      size={50}
                                                      src={'https://randomuser.me/api/portraits/women/44.jpg'}
                                                />
                                          </div>

                                          <div>
                                                <p className="text-sm font-semibold text-gray-800">{note.author}</p>
                                                <p className="text-xs text-secondary">{note.timestamp}</p>

                                                <p className="mt-1 text-sm whitespace-pre-line text-secondary">
                                                      {note.content}
                                                </p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        <div className="mt-4">
                              <Input.TextArea
                                    style={{ borderRadius: 6 }}
                                    placeholder="Write a note..."
                                    rows={3}
                                    className="rounded-lg"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Details;
