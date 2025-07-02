import { Outlet } from 'react-router-dom';

import OpportunityInboxDetailsTab from './OpportunityInboxDetailsTab';
import OpportunityList from './opportunity-list/OpportunityList';

const OpportunityInbox = () => {
    return (
        <div>
            <div className="grid grid-cols-12 min-h-[calc(100vh-120px)]">
                <div className="col-span-3 border-r">
                    <OpportunityList />
                </div>
                <div className="col-span-5">
                    <Outlet />
                </div>
                <div className="col-span-4 border-l px-3">
                    <OpportunityInboxDetailsTab />
                </div>
            </div>
        </div>
    );
};

export default OpportunityInbox;
