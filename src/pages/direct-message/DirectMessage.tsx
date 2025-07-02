// import ChatBox from '../inboxes/client/chat-box/ChatBox';
import Channels from './channels/Channels';
import DirectChatBox from './chat-box/DirectChatBox';
// import DirectChatBox from './chat-box/DirectChatBox';
import DirectMessageTab from './DirectMessageTab';

const DirectMessage = () => {
      return (
            <div>
                  <div className="grid grid-cols-12 min-h-[calc(100vh-120px)]">
                        <div className="col-span-3 border-r">
                              <Channels />
                        </div>
                        <div className="col-span-5">
                              <DirectChatBox />
                        </div>
                        <div className="col-span-4 px-3 border-l">
                              <DirectMessageTab />
                        </div>
                  </div>
            </div>
      );
};

export default DirectMessage;
