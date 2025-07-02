import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type NavigateHeaderProps = {
    title: string;
};
const NavigateHeader = ({ title }: NavigateHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-3 mb-4 ">
            <button onClick={() => navigate(-1)} className="flex items-center text-black">
                <IoChevronBackSharp className="mr-2 text-lg" />
            </button>
            <h1 className=" font-semibold">{title}</h1>
        </div>
    );
};

export default NavigateHeader;
