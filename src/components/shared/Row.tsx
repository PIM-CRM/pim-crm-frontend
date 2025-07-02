export const Row: React.FC<{ label: string; content?: React.ReactNode }> = ({ label, content }) => (
    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <div className="text-sm text-gray-700">{label}</div>
        <div className="text-sm text-gray-400">{content}</div>
    </div>
);
