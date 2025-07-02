import AutoInsuranceCard from './AutoInsuranceCard';
import DetailsCard from './DetailsCard';
import HealthInsurance from './HealthInsurance';
import PersonalInfoCard from './PersonalInfoCard';
import ProvidersSection from './ProvidersSection';
import Tag from './Tag';

const CaseDetailsInformation = () => {
      return (
            <div className="mt-[62px] border-t h-[65vh] overflow-y-scroll hide-scrollbar">
                  <div className="my-5 space-y-3">
                        <PersonalInfoCard />
                        <AutoInsuranceCard />
                        <DetailsCard />
                        <ProvidersSection />
                        <HealthInsurance />
                        <Tag />
                  </div>
            </div>
      );
};

export default CaseDetailsInformation;
