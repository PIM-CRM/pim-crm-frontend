import { useState } from 'react';
import PimChat from './PimChat';
import WelcomeCard from './WelcomeCard';

const Demand = () => {
      const [showChat, setShowChat] = useState(false);
      return (
            <div className="h-[60vh] overflow-y-scroll hide-scrollbar">
                  {!showChat && <WelcomeCard setShowChat={setShowChat} />}
                  {showChat && <PimChat />}
            </div>
      );
};

export default Demand;
