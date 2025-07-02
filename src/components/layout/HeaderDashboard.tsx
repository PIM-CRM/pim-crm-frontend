import { Badge, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { PiChatTextLight } from 'react-icons/pi';
const { Header } = Layout;

const HeaderDashboard = () => {
      const navigate = useNavigate();
      return (
            <Header
                  style={{
                        height: 80,
                        background: 'white',
                        width: '100%',
                        overflow: 'hidden',
                        borderBottom: '4px solid #E1E3EB',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                  }}
            >
                  <div className="flex gap-5 justify-between items-center h-full">
                        <Input
                              variant="borderless"
                              suffix={<GoSearch size={20} color="#606060" />}
                              placeholder="Search"
                              style={{
                                    width: 300,
                                    border: '1px solid #E7E7E7',
                                    backgroundColor: '#E7E7E7',
                                    borderRadius: 90,
                              }}
                        />
                        <div className="flex gap-4 items-center">
                              <Badge className="cursor-pointer" count={5} style={{ backgroundColor: '#2884FF' }}>
                                    <PiChatTextLight onClick={() => navigate('/notifications')} size={24} />
                              </Badge>

                              <div
                                    onClick={() => navigate('/settings')}
                                    className="flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer"
                              >
                                    <div>
                                          <h1 className="text-xl font-semibold">Olivier Creed</h1>
                                          <p className="text-xs text-gray-500">Admin</p>
                                    </div>
                                    <img src={'/user.svg'} className="w-12 h-12 rounded-full border-2" alt="" />
                              </div>
                        </div>
                  </div>
            </Header>
      );
};

export default HeaderDashboard;
