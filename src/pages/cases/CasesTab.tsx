const CasesTab = ({ tab, setTab }: { tab: string; setTab: any }) => {
    return (
        <div className="flex gap-3 mb-2 bg-[#F4F6F7]  rounded-full p-1 max-w-fit">
            {[
                { name: 'Dashboard', value: 'dashboard' },
                { name: 'Open', value: 'open' },
                { name: 'Closed', value: 'closed' },
            ].map(({ name, value }) => (
                <button
                    key={value}
                    className={`px-4 py-2 text-sm font-semibold rounded-full text-white focus:outline-none ${
                        tab === value ? 'bg-black' : 'bg-transparent text-black-color'
                    }`}
                    onClick={() => setTab(value)}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};

export default CasesTab;
