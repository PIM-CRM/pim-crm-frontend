import OpportunityItem from './OpportunityItem';

const OpportunityList = () => {
    return (
        <div className="space-y-4 h-[calc(100vh-200px)] hide-scrollbar overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Opportunities</h1>
            {[...Array(7)].map((_, index) => (
                <OpportunityItem id={index} key={index} />
            ))}
        </div>
    );
};

export default OpportunityList;
