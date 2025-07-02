import { useState } from 'react';
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from './CustomToolbar';
import CustomEvent from './CustomEvent';

export const events = [
      
      {
            title: 'Kickoff Meeting',
            start: new Date(new Date().getFullYear(), new Date().getMonth(), 6, 10, 0),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), 6, 11, 0),
            participants: [
                  {
                        name: 'Alice Johnson',
                        image: 'https://randomuser.me/api/portraits/women/75.jpg',
                  },
                  {
                        name: 'Bob Smith',
                        image: 'https://randomuser.me/api/portraits/men/64.jpg',
                  },
            ],
      },
      {
            title: 'Marketing Sync',
            start: new Date(new Date().getFullYear(), new Date().getMonth(), 8, 15, 0),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), 8, 16, 0),
            participants: [
                  {
                        name: 'Chris Taylor',
                        image: 'https://randomuser.me/api/portraits/men/45.jpg',
                  },
                  {
                        name: 'Dana Lee',
                        image: 'https://randomuser.me/api/portraits/women/50.jpg',
                  },
                  {
                        name: 'Emma Watson',
                        image: 'https://randomuser.me/api/portraits/women/68.jpg',
                  },
            ],
      },
      {
            title: 'Project Review',
            start: new Date(new Date().getFullYear(), new Date().getMonth(), 12, 9, 0),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), 12, 10, 30),
            participants: [
                  {
                        name: 'Franklin Hall',
                        image: 'https://randomuser.me/api/portraits/men/12.jpg',
                  },
            ],
      },
      {
            title: 'Team Standup',
            start: new Date(new Date().getFullYear(), new Date().getMonth(), 14, 8, 30),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), 14, 9, 0),
            participants: [
                  {
                        name: 'Grace Peterson',
                        image: 'https://randomuser.me/api/portraits/women/32.jpg',
                  },
                  {
                        name: 'Hank Green',
                        image: 'https://randomuser.me/api/portraits/men/21.jpg',
                  },
            ],
      },
      {
            title: 'Quarterly Planning',
            start: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 14, 0),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 15, 30),
            participants: [
                  {
                        name: 'Ivy Brown',
                        image: 'https://randomuser.me/api/portraits/women/10.jpg',
                  },
                  {
                        name: 'Jack White',
                        image: 'https://randomuser.me/api/portraits/men/55.jpg',
                  },
            ],
      },
];

const locales = {
      'en-US': enUS,
};

const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
});

const TaskCalendar = () => {
      console.log(events);
      const [view, setView] = useState<View>('month');

      return (
            <div style={{ height: '500px', padding: '20px' }}>
                  <Calendar
                        localizer={localizer}
                        events={events}
                        onView={setView}
                        view={view}
                        views={['month', 'week', 'day']}
                        components={{
                              toolbar: () => <CustomToolbar view={view} setView={setView} />,
                              event: CustomEvent,
                        }}
                        style={{ height: '100%', backgroundColor: '#F4F4F4', borderRadius: 10 }}
                  />
            </div>
      );
};

export default TaskCalendar;
