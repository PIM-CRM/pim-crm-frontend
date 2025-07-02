import { Steps } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { PiFolderSimplePlus } from 'react-icons/pi';
import { BsSend } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi';
import { RxCheckCircled } from 'react-icons/rx';

const { Step } = Steps;

const ProgressSteps = () => {
    const currentStep = 2; // Example: Current active step is 2 (0-based index)

    const getStepIcon = (stepIndex: number) => {
        const isCompleted = stepIndex < currentStep;
        // const isActive = stepIndex === currentStep;

        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {/* Display custom icon */}
                {
                    [
                        <AiOutlineFileProtect key="icon1" />,
                        <MdOutlineMedicalServices key="icon2" />,
                        <PiFolderSimplePlus key="icon3" />,
                        <BsSend key="icon4" />,
                        <HiOutlineUsers key="icon5" />,
                        <RxCheckCircled key="icon6" />,
                    ][stepIndex]
                }

                {/* Add checkmark for completed steps */}
                {isCompleted && <CheckCircleFilled style={{ color: '#06b217', fontSize: '16px', marginLeft: '5px' }} />}
            </div>
        );
    };

    return (
        <div className="p-5">
            <Steps current={currentStep} size="default" responsive>
                {[...Array(6)].map((_, index) => (
                    <Step
                        key={index}
                        title={
                            [
                                'Liability Accepted',
                                'In Treatment',
                                'Records & Bills',
                                'Demand',
                                'Negotiations',
                                'Settlement',
                            ][index]
                        }
                        icon={getStepIcon(index)}
                        status={index < currentStep ? 'finish' : index === currentStep ? 'process' : 'wait'}
                    />
                ))}
            </Steps>
        </div>
    );
};

export default ProgressSteps;
