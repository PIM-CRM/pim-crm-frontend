import { Checkbox } from 'antd';

const Notification = () => {
    return (
        <div>
            <div className="p-5 border rounded-xl">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-black">Notify me when...</h1>
                        <p className="flex items-center gap-2">
                            <Checkbox defaultChecked />
                            The email address associated with your account.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
