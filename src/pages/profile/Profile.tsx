import MetricsCard from './MetricsCard';
import ProfileBusinessCard from './ProfileBusinessCard';
import ActivityTimeline from './activity/ActivityTimeline';
import TaskCalendar from './calender/TasksCalender';

const Profile = () => {
    return (
        <div>
            <div className="md:flex gap-4 ">
                <div className="md:w-[55%] ">
                    <ProfileBusinessCard />
                </div>
                <div className="md:w-[45%] border rounded-xl p-3 h-full">
                    <MetricsCard />
                </div>
            </div>
            <div className="md:flex gap-4 mt-4">
                <div className="md:w-[55%] border rounded-xl h-full">
                    <TaskCalendar />
                </div>
                <div className="md:w-[45%]">
                    <ActivityTimeline />
                </div>
            </div>
        </div>
    );
};

export default Profile;
