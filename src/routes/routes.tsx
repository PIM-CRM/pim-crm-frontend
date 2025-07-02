import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/ErrorPage';
import Login from '../pages/authentication/Login';
import TermsCondition from '../pages/dashboard/TermsCondition';
import Notification from '../pages/dashboard/Notification';

import Cases from '../pages/cases/Cases';
import Tasks from '../pages/tasks/Tasks';
import Leads from '../pages/leads/Leads';
import Contact from '../pages/contact/Contact';
import Documents from '../pages/documents/Documents';
import Profile from '../pages/profile/Profile';
import App from '../App';
import CaseDetails from '../pages/cases/case-details/CaseDetails';
import DocumentDetails from '../pages/documents/DocumentDetails';
import Settings from '../pages/settings/Settings';
import ClientInbox from '../pages/inboxes/client/ClientInbox';
import ChatBox from '../pages/inboxes/client/chat-box/ChatBox';
import CompanyInbox from '../pages/inboxes/company/CompanyInbox';
import ForgotPassword from '../pages/authentication/ForgotPassword';
// import CompanyChatBox from '../pages/inboxes/company/chat-box/CompanyChatBox';
import VerifyCode from '../pages/authentication/VerifyCode';
import ResetPassword from '../pages/authentication/ResetPassword';
import OpportunityInbox from '../pages/inboxes/opportunity/OpportunityInbox';
// import OpportunityChatBox from '../pages/inboxes/opportunity/chat-box/OpportunityChatBox';
import DirectMessage from '../pages/direct-message/DirectMessage';

const router = createBrowserRouter([
      {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                  { index: true, element: <Profile /> }, // Default route
                  { path: 'terms', element: <TermsCondition /> },
                  { path: 'notification', element: <Notification /> },
                  { path: 'cases', element: <Cases /> },
                  { path: 'cases/case-details/:id', element: <CaseDetails /> },
                  { path: 'tasks', element: <Tasks /> },

                  { path: 'leads', element: <Leads /> },

                  { path: 'contacts', element: <Contact /> },
                  { path: 'documents', element: <Documents /> },

                  { path: 'documents/:id', element: <DocumentDetails /> },
                  { path: 'settings', element: <Settings /> },

                  {
                        path: 'inbox/clients',
                        element: <ClientInbox />,

                        children: [{ path: ':id', element: <ChatBox /> }],
                  },
                  {
                        path: 'inbox/companies',
                        element: <CompanyInbox />,
                        children: [
                              {
                                    path: ':id',
                                    element: <ChatBox />,
                              },
                        ],
                  },
                  {
                        path: 'inbox/opportunities',
                        element: <OpportunityInbox />,
                        children: [
                              {
                                    path: ':id',
                                    element: <ChatBox />,
                              },
                        ],
                  },
                  {
                        path: '/direct-message/:id',
                        element: <DirectMessage />,
                  },

                  { path: 'notifications', element: <Notification /> },
            ],
      },
      { path: '/login', element: <Login /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/verify-code', element: <VerifyCode /> },
      { path: '/reset-password', element: <ResetPassword /> },
]);

export default router;
