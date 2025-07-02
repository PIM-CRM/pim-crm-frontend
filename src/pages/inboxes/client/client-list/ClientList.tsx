import ClientItem from './ClientItem';

const ClientList = () => {
    return (
        <div className="space-y-4 h-[calc(100vh-200px)] hide-scrollbar overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Clients</h1>
            {[...Array(7)].map((_, index) => (
                <ClientItem id={index} key={index} />
            ))}
        </div>
    );
};

export default ClientList;
