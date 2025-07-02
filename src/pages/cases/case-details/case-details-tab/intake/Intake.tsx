import AccidentInformation from './AccidentInformation';
import EffectsOfAccident from './EffectOfAccident';
import HealthInsurance from './HealthInsurance';
import InjuryAndMedicalTreatment from './InjuryAndMedicalTreatment';
import InjuryAndMedicalTreatment2 from './InjuryAndMedicalTreatment2';
import InsuranceInfo from './InsuranceInfo';
import InVolvedVehicles from './InvolvedVehicle';
import InVolvedVehicles2 from './InvolvedVehicle2';
import InVolvedVehicles3 from './InvolvedVehicle3';
import LostWagesWork from './LostWageWork';
import MedicalTreatment from './MedicalTreatment';
import PersonalHistory from './PersonalHistory';
import PersonalInformation from './PersonalInfo';
import PreviousAttorney from './PreviousAttorney';
import VehicleInfo from './VehicleInfo';
import WorkersComp from './WorkerComp';

const Intake = () => {
    return (
        <div className="h-[60vh] overflow-y-scroll hide-scrollbar">
            <AccidentInformation />
            <InjuryAndMedicalTreatment />
            <VehicleInfo />
            <InsuranceInfo />
            <InVolvedVehicles />
            <InVolvedVehicles2 />
            <InVolvedVehicles3 />
            <InjuryAndMedicalTreatment2 />
            <MedicalTreatment />
            <HealthInsurance />
            <WorkersComp />
            <PreviousAttorney />
            <LostWagesWork />
            <PersonalHistory />
            <EffectsOfAccident />
            <PersonalInformation />
        </div>
    );
};

export default Intake;
