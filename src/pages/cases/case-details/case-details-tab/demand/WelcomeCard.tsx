import { Button } from 'antd';
import { DiReact } from 'react-icons/di';

const WelcomeCard = ({ setShowChat }: { setShowChat: (showChat: boolean) => void }) => {
      return (
            <div className="flex justify-center items-center min-h-full rounded-xl border bg-gradient">
                  <div className="flex flex-col items-center space-y-3">
                        <h1 className="text-4xl font-semibold text-white">Hello, Attorney Bryant!👋</h1>
                        <p className="mt-2 text-sm text-white">
                              Here to simplify your workflow so you can achieve more for your clients!
                        </p>

                        <Button
                              onClick={() => setShowChat(true)}
                              icon={<DiReact size={24} />}
                              type="primary"
                              style={{
                                    backgroundColor: '#FAFAFA73',
                                    color: '#007AFF',
                                    boxShadow: 'none',
                                    border: '1px solid #007AFF',
                                    height: 40,
                              }}
                        >
                              PIM AI
                        </Button>
                  </div>
            </div>
      );
};

export default WelcomeCard;
