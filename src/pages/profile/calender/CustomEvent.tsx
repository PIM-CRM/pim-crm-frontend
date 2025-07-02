import { Avatar } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CustomEvent = ({ event }: { event: any }) => {
      // console.log(event);
      return (
            <div className="py-0.5  h-full  flex gap-2 items-center text-center px-2 text-sm bg-[#29B000]/30 text-black rounded-lg">
                  <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                  <div className="flex gap-1 items-center">
                        <h1>{event.title}</h1>
                        <div className="flex gap-2">
                              {event.participants.map((participant: any, index: number) => (
                                    <Avatar className="-ms-4" size={18} key={index} src={participant.image} />
                              ))}
                        </div>
                        <BsThreeDotsVertical className="rotate-90" color="black" />
                  </div>
            </div>
      );
};

export default CustomEvent;
