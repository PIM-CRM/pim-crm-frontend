import { Button } from 'antd';
import { DiReact } from 'react-icons/di';

const WelcomeCard = () => {
    return (
        <div className="bg-gradient border rounded-xl flex justify-center items-center min-h-[734px]">
            <div className="  flex  flex-col items-center space-y-3">
                <h1 className="text-4xl font-semibold  text-white">Hello, Attorney Bryant! 💰</h1>
                <p className="text-sm text-white mt-2">
                    Here to simplify your workflow so you can achieve more for your clients!
                </p>

                <Button
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
