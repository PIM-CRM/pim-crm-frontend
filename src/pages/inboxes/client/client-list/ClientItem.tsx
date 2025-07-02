import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const ClientItem = ({ id }: { id: number }) => {
    return (
        <Link to={`/inbox/clients/${id}`} className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-2">
                <Avatar size={48} src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" />
                <div>
                    <p className="text-sm font-semibold text-gray-800">Nadir Hossa...</p>

                    <p> Send a photo</p>
                </div>
            </div>

            <div className="text-gray-500 text-xs">1h ago</div>
        </Link>
    );
};

export default ClientItem;
