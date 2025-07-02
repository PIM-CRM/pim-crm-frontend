import CaseDetailsHeader from './case-details-header/CaseDetailsHeader';
import CaseDetailsInformation from './case-details-information/CaseDetailsInformation';
import CaseDetailsTab from './case-details-tab/CaseDetailsTab';

const CaseDetails = () => {
    return (
        <div>
            <CaseDetailsHeader />
            <div className="flex gap-5">
                <div className="w-[35%]">
                    <CaseDetailsInformation />
                </div>
                <div className="w-[65%] ">
                    <CaseDetailsTab />
                </div>
            </div>
        </div>
    );
};

export default CaseDetails;
