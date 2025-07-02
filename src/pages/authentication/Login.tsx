import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
            <div className="w-full max-w-xl shadow-md bg-white rounded-xl p-8">
                <div className="flex justify-center mb-4">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <h2 className="text-center text-2xl font-semibold mb-4 text-[#333333]">Log in to your account</h2>
                <p className="text-center text-[#5C5C5C] mb-6">Please enter your email and password to continue</p>

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
                        {
                            label: 'Password',
                            name: 'password',
                            placeholder: '******',
                            rules: [{ required: true, message: 'Please input your password!' }],
                            type: 'password',
                        },
                    ].map(({ label, name, placeholder, rules, type }, index) => (
                        <Form.Item
                            key={index}
                            label={<p className="text-[#636363] text-lg">{label}</p>}
                            name={name}
                            rules={rules}
                        >
                            {type === 'password' ? (
                                <Input.Password
                                    placeholder={placeholder}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    style={{ height: 42, borderRadius: 90 }}
                                    size="large"
                                />
                            ) : (
                                <Input
                                    placeholder={placeholder}
                                    style={{ height: 42, borderRadius: 90 }}
                                    size="large"
                                />
                            )}
                        </Form.Item>
                    ))}

                    <div className="flex justify-between items-center mb-4">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: '#5D5F61' }}>Remember Password</Checkbox>
                        </Form.Item>
                        <a href="/forgot-password" className="text-[#5D5F61]">
                            Forget Password?
                        </a>
                    </div>

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
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
