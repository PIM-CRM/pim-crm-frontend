import ClientInboxDetailsTab from './ClientInboxDetailsTab';
import ClientList from './client-list/ClientList';
import { Outlet } from 'react-router-dom';

const ClientInbox = () => {
    return (
        <div>
            <div className="grid grid-cols-12 min-h-[calc(100vh-120px)]">
                <div className="col-span-3 border-r">
                    <ClientList />
                </div>
                <div className="col-span-5">
                    <Outlet />
                </div>
                <div className="col-span-4 border-l px-3">
                    <ClientInboxDetailsTab />
                </div>
            </div>
        </div>
    );
};

export default ClientInbox;
