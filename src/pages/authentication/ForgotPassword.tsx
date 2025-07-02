import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/verify-code');
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
                    {[
                        {
                            label: 'Email',
                            name: 'email',
                            placeholder: 'apusutradhar77@gmail.com',
                            rules: [{ required: true, message: 'Please input your email!' }],
                            type: 'text',
                        },
                    ].map(({ label, name, placeholder, rules }, index) => (
                        <Form.Item
                            key={index}
                            label={<p className="text-[#636363] text-lg">{label}</p>}
                            name={name}
                            rules={rules}
                        >
                            <Input placeholder={placeholder} style={{ height: 42, borderRadius: 90 }} size="large" />
                        </Form.Item>
                    ))}

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

export default ForgotPassword;
