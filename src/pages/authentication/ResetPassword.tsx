import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
            <div className="w-full max-w-xl shadow-md bg-white rounded-xl p-8">
                <div className="flex justify-center mb-4">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <h2 className="text-center text-2xl font-semibold mb-4 text-[#333333]">Forgot password ?</h2>

                <Form
                    name="resetPassword"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    <Form.Item
                        label={<p className="text-[#5C5C5C] text-lg">New Password</p>}
                        name="newPassword"
                        rules={[
                            { required: true, message: 'Please input your new password!' },
                            { min: 8, message: 'Password must be at least 8 characters!' },
                        ]}
                    >
                        <Input.Password style={{ height: 42, borderRadius: 90 }} />
                    </Form.Item>

                    <Form.Item
                        label={<p className="text-[#5C5C5C] text-lg">Confirm Password</p>}
                        name="confirmPassword"
                        dependencies={['newPassword']} // Dependency for validation
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password style={{ height: 42, borderRadius: 90 }} />
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
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
