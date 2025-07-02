import { Button, Input } from 'antd';
import { CgAttachment, CgImage } from 'react-icons/cg';

const CompanyChatBox = () => {
    return (
        <div className="p-2">
            <Input style={{ height: 40, borderRadius: 5 }} placeholder="Subject" />

            <div className="border my-6 rounded-lg">
                <textarea placeholder="Type your Email" className="w-full h-[500px] p-3 focus:outline-none" />

                <div className="my-3 flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <CgImage size={24} color="#929292" />
                            <input type="file" accept="image/*" className="hidden" />
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <CgAttachment size={24} color="#929292" />
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                    <div>
                        <Button
                            type="primary"
                            style={{
                                height: 40,
                                width: 100,
                            }}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyChatBox;
