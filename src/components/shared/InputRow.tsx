import { Input } from 'antd';

export const InputRow: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
    <div className="space-y-1 border-b border-gray-200 pb-2">
        <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">{label}</div>
            <div className="flex items-center gap-4">
                <Input placeholder={placeholder} />
            </div>
        </div>
    </div>
);
