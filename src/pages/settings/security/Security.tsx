import { useState } from 'react';
import { Button, Input, Form, message } from 'antd';

const Security = () => {
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const handleFinish = (values: { password: string; confirmPassword: string }) => {
        const { password } = values;

        message.success('Password updated successfully!');
        console.log('New Password:', password);

        setIsChangingPassword(false);
    };

    return (
        <div className="space-y-3">
            <div className="p-5 border rounded-xl">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-black">Email address</h1>
                        <p>The email address associated with your account.</p>
                    </div>
                    <div>
                        <h1 className="text-black">work.email@test.com</h1>
                        <p className="text-red-500">Unverified</p>
                    </div>
                </div>
            </div>

            <div className="p-5 border rounded-xl">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-black">Password</h1>
                        <p>Set a unique password to protect your account.</p>
                    </div>

                    {!isChangingPassword ? (
                        <div>
                            <Button
                                type="primary"
                                style={{
                                    height: 40,
                                    backgroundColor: '#007AFF',
                                    boxShadow: 'none',
                                }}
                                onClick={() => setIsChangingPassword(true)}
                            >
                                Change Password
                            </Button>
                        </div>
                    ) : null}
                </div>

                {isChangingPassword && (
                    <Form onFinish={handleFinish} layout="vertical" className="mt-4  max-w-2xl space-y-3">
                        <Form.Item
                            name="password"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your new password!',
                                },
                                {
                                    min: 8,
                                    message: 'Password must be at least 8 characters long!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Enter new password" />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Confirm Password"
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm new password" />
                        </Form.Item>

                        <div className="flex justify-end space-x-2">
                            <Button onClick={() => setIsChangingPassword(false)} className="mr-2">
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    backgroundColor: '#007AFF',
                                    boxShadow: 'none',
                                }}
                            >
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </div>

            <div className="p-5 border rounded-xl">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-black">2-Step Verification</h1>
                        <p>Make your account extra secure. Along with your password, you’ll need to enter a code.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
