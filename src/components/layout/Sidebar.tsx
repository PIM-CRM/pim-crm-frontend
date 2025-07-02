import { Avatar, ConfigProvider, Layout, Menu, Modal } from 'antd';
import { sidebarItemsGenerator } from '../../utils/generateSidebarItems';
import sidebarItems from '../../utils/sidebarItems';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import CustomSidebarItem from './CustomSidebarItem';
import { LuLogOut } from 'react-icons/lu';

const { Sider } = Layout;
const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const activeKey = location.pathname === '/' ? 'profile' : location.pathname.split('/').filter(Boolean)[0];

    const handleLogout = () => {
        Modal.confirm({
            title: 'Log out',
            content: 'Are you sure you want to log out?',
            okText: 'Yes',
            centered: true,
            cancelText: 'No',
            icon: null,
            okType: 'primary',

            onOk: () => {
                localStorage.removeItem('token');
                navigate('/login');
            },
        });
    };

    const siderStyle: React.CSSProperties = {
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'none',
        scrollbarGutter: 'stable',
        borderRight: '4px solid #E1E3EB',
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: '#7A7C7F',
                },
                components: {
                    Menu: {
                        itemActiveBg: '#E7E7E7',
                        itemSelectedColor: '#414141',
                        itemBorderRadius: '6px' as any,
                        itemHeight: 45,
                        itemSelectedBg: '#E7E7E7',
                    },
                },
            }}
        >
            <Sider style={siderStyle} width={280} theme="light" breakpoint="lg" collapsedWidth="0">
                <div className="h-[80px] border-b-[4px] border-[#E1E3EB] p-1">
                    <Link className="" to="/">
                        <img className="w-[109px] h-[64px]  mx-auto" src="/vite.svg" alt="Logo" />
                    </Link>
                </div>

                <Menu
                    style={{
                        marginTop: '10px',
                    }}
                    theme="light"
                    mode="inline"
                    selectedKeys={[activeKey]}
                    items={sidebarItemsGenerator(sidebarItems)}
                />

                <hr className="my-4" />

                <div>
                    <h1 className="mx-6 text-secondary">Inboxes</h1>
                    <CustomSidebarItem
                        path="/inbox/clients/0"
                        label="Clients"
                        notificationCount={5}
                        icon={<img src="/icons/handshake.png" alt="Clients" className="w-6 h-6" />}
                    />
                    <CustomSidebarItem
                        path="/inbox/companies/0"
                        label="Companies"
                        icon={<img src="/icons/office.png" alt="Clients" className="w-6 h-6" />}
                    />
                    <CustomSidebarItem
                        path="/inbox/opportunities/0"
                        label="Opportunity"
                        notificationCount={1}
                        icon={<img src="/icons/money.png" alt="Clients" className="w-6 h-6" />}
                    />
                </div>

                <hr className="my-4" />

                <div className="mx-6 text-secondary">
                    <h1 className="my-3">Direct Messages</h1>
                    <div className="space-y-4">
                        <div
                            onClick={() => navigate('/direct-message/1')}
                            className="flex items-center space-x-3 cursor-pointer ho"
                        >
                            <div className="relative">
                                <Avatar size={40} src="/user.svg" />
                                <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1 text-sm font-medium truncate">Nadir Hossa...</div>
                        </div>

                        <div
                            onClick={() => navigate('/direct-message/2')}
                            className="flex items-center space-x-3 cursor-pointer"
                        >
                            <div className="relative">
                                <Avatar size={40} src="/user.svg" />
                                <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1 text-sm font-medium truncate">Shojib Vola...</div>
                        </div>

                        <div className="flex items-center space-x-3 text-sm font-medium text-purple-600 cursor-pointer">
                            <span className="text-lg">+</span>
                            <span>Invite Team Members</span>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between items-center px-4 mt-4 text-secondary">
                    <div onClick={handleLogout} className="flex gap-2 items-center cursor-pointer">
                        <LuLogOut />
                        <span>Log Out</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <SettingOutlined
                            onClick={() => {
                                navigate('/settings');
                            }}
                            className="text-xl cursor-pointer"
                        />
                    </div>
                </div>
            </Sider>
        </ConfigProvider>
    );
};

export default Sidebar;
