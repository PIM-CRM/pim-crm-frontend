import { TSidebarItem } from './generateSidebarItems';
import { CaseSvg, ContactSvg, DocumentSvg, HomeSvg, LeadsSvg, TasksSvg } from '../svgs/SVGs';

const sidebarItems: TSidebarItem[] = [
    {
        key: 'profile',
        label: 'Profile',
        path: '',
        icon: <HomeSvg />,
    },
    {
        key: 'cases',
        label: 'Cases',
        path: 'cases',
        icon: <CaseSvg />,
    },
    {
        key: 'tasks',
        label: 'Tasks',
        path: 'tasks',
        icon: <TasksSvg />,
    },
    {
        key: 'leads',
        label: 'Leads',
        path: 'leads',
        icon: <LeadsSvg />,
    },
    {
        key: 'contacts',
        label: 'Contacts',
        path: 'contacts',
        icon: <ContactSvg />,
    },
    {
        key: 'documents',
        label: 'Documents',
        path: 'documents',
        icon: <DocumentSvg />,
    },
];

export default sidebarItems;
