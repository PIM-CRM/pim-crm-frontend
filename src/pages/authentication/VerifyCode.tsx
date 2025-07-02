import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/reset-password');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
            <div className="w-full max-w-xl shadow-md bg-white rounded-xl p-8">
                <div className="flex justify-center mb-4">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <h2 className="text-center text-2xl font-semibold mb-4 text-[#333333]">Forgot password ?</h2>

                <Form
                    name="login"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    <Form.Item
                        name={'verifyCode'}
                        rules={[{ required: true, message: 'Please input your verify code!' }]}
                    >
                        <Input.OTP />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            style={{
                                width: '100%',
                                height: 42,
                                backgroundColor: '#5D5F61',
                                textTransform: 'uppercase',
                            }}
                        >
                            Send Verify Code
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default VerifyCode;
