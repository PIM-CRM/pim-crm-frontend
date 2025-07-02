import { Outlet } from 'react-router-dom';
import CompanyList from './company-list/CompanyList';
import CompanyInboxDetailsTab from './CompanyInboxDetailsTab';

const CompanyInbox = () => {
    return (
        <div>
            <div className="grid grid-cols-12 min-h-[calc(100vh-120px)]">
                <div className="col-span-3 border-r">
                    <CompanyList />
                </div>
                <div className="col-span-5">
                    <Outlet />
                </div>
                <div className="col-span-4 border-l px-3">
                    <CompanyInboxDetailsTab />
                </div>
            </div>
        </div>
    );
};

export default CompanyInbox;
