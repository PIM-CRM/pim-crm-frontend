import CompanyItem from './CompanyItem';

const CompanyList = () => {
    return (
        <div className="space-y-4 h-[calc(100vh-200px)] hide-scrollbar overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Companies</h1>
            {[...Array(7)].map((_, index) => (
                <CompanyItem id={index} key={index} />
            ))}
        </div>
    );
};

export default CompanyList;
