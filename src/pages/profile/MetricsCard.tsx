import { LiaCalendarCheckSolid } from 'react-icons/lia';
import { MdGroups } from 'react-icons/md';
import { PiBankThin, PiCurrencyCircleDollarLight } from 'react-icons/pi';

const MetricsCard = () => {
    return (
        <div>
            <div>
                <h1 className="font-medium">Overview</h1>
                <hr className="my-2" />
            </div>

            <div className="grid gap-2">
                {/* Due Items Row */}
                <div className="flex items-center gap-4 rounded-lg border px-2">
                    <div className="flex flex-1 items-center gap-2">
                        <span className="font-semibold">3</span>
                        <span className="text-secondary">Due Today</span>
                    </div>
                    <div className="flex flex-1 items-center px-2 gap-2">
                        <span className="font-semibold">5</span>
                        <span className="text-secondary">Over Due</span>
                    </div>
                    <div className="flex flex-1 items-center px-2 gap-2">
                        <span className="font-semibold">5</span>
                        <span className="text-secondary">Incomplete</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg ">
                        <LiaCalendarCheckSolid className="size-8 text-[#54B0FD]" />
                    </div>
                </div>

                {/* Opportunities Row */}
                <div className="flex items-center justify-between rounded-lg border px-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">185</span>
                        <span className="text-secondary">Opportunities</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center ">
                        <MdGroups className="size-8 text-[#54B0FD]" />
                    </div>
                </div>

                {/* Pipeline Row */}
                <div className="flex items-center justify-between rounded-lg border px-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">$5.5M</span>
                        <span className="text-secondary">Pipeline</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center ">
                        <PiBankThin className="size-8 text-[#54B0FD]" />
                    </div>
                </div>

                {/* Closed Won Potential Row */}
                <div className="flex items-center justify-between rounded-lg border px-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">$1mil</span>
                        <span className="text-secondary">Closed Won Potential</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg ">
                        <PiCurrencyCircleDollarLight className="size-8 text-[#54B0FD]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricsCard;
