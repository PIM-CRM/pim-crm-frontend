import AdCard from './AdCard';
import AnalyticsChart from './AnalyticsChart';
import CampaignRatio from './CampaignRatio';

const Campaign = () => {
    return (
        <>
            <div className="flex gap-5">
                <AdCard />
                <AnalyticsChart />
            </div>
            <CampaignRatio />
        </>
    );
};

export default Campaign;
