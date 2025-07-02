import { Button } from 'antd';
import { BsDownload } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

const DocumentDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-between my-4">
                <h1 className="text-2xl font-semibold">Documents</h1>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<BsDownload />}
                    style={{
                        height: 40,
                        width: 40,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                ></Button>
            </div>

            <div className="max-w-[518px] text-secondary">
                <div>
                    <div className="mb-4 flex items-center space-x-6">
                        <p className="">File Category:</p>
                        <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full">Medical Records</span>
                    </div>
                    <div className="mb-4 flex items-center space-x-6">
                        <p className="">File Name:</p>
                        <p>Al Amin Sheikh Case</p>
                    </div>
                    <div className="mb-4 flex items-center space-x-6">
                        <p className="">Total Expense:</p>
                        <p>$250</p>
                    </div>
                    <div className="mb-4 flex items-center space-x-6">
                        <p className="">Comment:</p>
                        <p>N/A</p>
                    </div>
                </div>

                <div className="max-w-[196px]">
                    <h5 className="text-blue-500 font-semibold mb-2">Uploaded File</h5>
                    <div className="bg-[#EEEEEE] p-2 rounded-lg">
                        <div className="flex justify-between">
                            <div className="size-4 my-2 bg-blue-500 rounded-full"> </div>
                            <p>Document</p>
                            <HiDownload className="text-2xl" />
                        </div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBv0IL3fWP6P6PDXtwTaoe3DNi58O77zwooQ&s"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-secondary">
                <div className="w-full p-4">
                    <h2 className="text-lg font-semibold text-black mb-4">Client's Information</h2>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <p>Client's Name</p>
                        <p>Md. Nadir</p>

                        <p>Client's Email</p>
                        <p>MdNadirPagla@gmail.com</p>

                        <p>Client's Phone</p>
                        <p>+991465496</p>

                        <p>Case Name</p>
                        <p>Barack Obama vs. State</p>

                        <p>Client's Address</p>
                        <p>Location, city, country</p>
                    </div>
                </div>
                <div className="w-full p-4">
                    <h2 className="text-lg font-semibold mb-4 text-black">Source Details</h2>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <p>Assigned by </p>
                        <p>Carli Bryant</p>

                        <p>Assign to</p>
                        <p>Dr. Fahim Shekh</p>

                        <p>Sources Email</p>
                        <p>apusutradhar77@gmail.com</p>

                        <p>Clients Address</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentDetails;
