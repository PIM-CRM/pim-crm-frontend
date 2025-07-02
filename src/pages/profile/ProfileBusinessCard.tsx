const ProfileBusinessCard = () => {
    return (
        <div className="gradient-bg flex  justify-start p-5 gap-4 items-center h-full bg-[#232323] rounded-xl text-white">
            <img src="/images/user.svg" className="size-[143px] object-cover border rounded-2xl border-black" alt="" />
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold">Hello, Md. Asadujjaman</h1>
                <p>I Hope you have a wonderful day today</p>
            </div>
        </div>
    );
};

export default ProfileBusinessCard;
