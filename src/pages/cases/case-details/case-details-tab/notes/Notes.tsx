import { Avatar, Input } from 'antd';

const Notes = () => {
      const notes = [
            {
                  id: 1,
                  user: 'Carli Bryant',
                  time: 'July 25, 9:58 AM CT',
                  text: `@Cindy Lou Mr. Johnson would like to see the chiropractor as soon as possible. His back is hurting from the car accident. He is also interested in seeing the psychiatrist for his PTSD.`,
            },
            {
                  id: 2,
                  user: 'Carli Bryant',
                  time: 'July 25, 4:22 PM CT',
                  text: `Mr. Johnson mentioned another insurance policy but had to get off the phone and head to work. @Cassie Peoples Make sure to follow up with Mr. Johnson regarding his additional policy.`,
            },
      ];

      return (
            <div className="relative w-full mx-auto bg-white rounded-md shadow-md p-4 h-[60vh] overflow-y-scroll hide-scrollbar flex flex-col">
                  <h2 className="mb-4 text-lg font-semibold">Notes</h2>

                  <div className="overflow-y-auto flex-grow">
                        {notes.map((note) => (
                              <div
                                    key={note.id}
                                    className="flex items-start pb-4 mb-4 space-x-3 border-b border-gray-200 last:border-none last:pb-0"
                              >
                                    <Avatar
                                          icon={<img src="/images/3d-avatar.png" />}
                                          className="text-white bg-blue-500"
                                          size={50}
                                    />

                                    <div className="flex-1">
                                          <div className="flex gap-5 justify-start items-center mb-1">
                                                <span className="text-lg font-semibold text-black">{note.user}</span>
                                                <span className="text-xs text-gray-500">{note.time}</span>
                                                <button className="px-4 text-sm   text-[#007AFF] rounded-full border border-[#007AFF]">
                                                      Client
                                                </button>
                                          </div>

                                          <p className="text-sm text-gray-700">{note.text}</p>
                                    </div>
                              </div>
                        ))}
                  </div>

                  <div className="mt-4">
                        <Input.TextArea
                              rows={3}
                              style={{
                                    borderRadius: 8,
                                    width: '100%',
                              }}
                              placeholder="Write a note..."
                              className="mb-3 border-gray-300"
                        />
                  </div>
            </div>
      );
};

export default Notes;
