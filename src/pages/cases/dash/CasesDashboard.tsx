import CasesDetails from './CasesDetails';
import CasesStats from './CasesStats';
import CaseStatisticsChart from './CaseStatisticsChart';

const CasesDashboard = () => {
    return (
        <div>
            <div className="md:flex gap-3 h-full">
                <div className="w-1/2  flex-grow">
                    <CasesStats />
                </div>
                <div className="w-1/2  border rounded-xl p-5">
                    <CaseStatisticsChart />
                </div>
            </div>
            <div>
                <CasesDetails />
            </div>
        </div>
    );
};

export default CasesDashboard;
