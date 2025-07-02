import SettingsTab from './SettingsTab';

const Settings = () => {
    return (
        <div>
            <div className="text-secondary mb-8">
                <h1 className="text-xl font-semibold text-black"> Settings</h1>
                <p>Manage your account settings and preferences</p>
            </div>
            <SettingsTab />
        </div>
    );
};

export default Settings;
