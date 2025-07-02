import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eeeeee] text-white relative overflow-hidden">
            {/* Background Squares SVG */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 100 100"
                >
                    <rect x="0" y="0" width="100" height="100" fill="#1E293B" />
                    <rect x="10" y="10" width="80" height="80" fill="#334155" />
                    <rect x="20" y="20" width="60" height="60" fill="#475569" />
                    <rect x="30" y="30" width="40" height="40" fill="#64748B" />
                </svg>
            </div>

            {/* Content */}
            <div className="text-center px-4">
                <h1 className="text-[60px] md:text-[200px] font-bold tracking-widest text-[#0078FF] drop-shadow-md">
                    404
                </h1>

                <p className="text-lg mt-2 text-[#636363]">
                    Sorry, the page you are looking for might have been removed or doesn't exist.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-[#5D5F61] hover:bg-[#5D5F61] transition duration-300 text-white text-lg font-medium rounded-full shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
