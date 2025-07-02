import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomSidebarItem = ({
      path,
      label,
      icon,
      notificationCount,
}: {
      path: string;
      label: string;
      icon: React.ReactNode;
      notificationCount?: number;
}) => {
      return (
            <NavLink
                  to={path}
                  className={({ isActive }) =>
                        `${
                              isActive ? 'bg-[#e7e7e7]' : ''
                        } flex items-center space-x-3 m-1 px-6 py-2 rounded-[6px] hover:bg-[#e7e7e7] hover:text-secondary text-secondary cursor-pointer`
                  }
            >
                  <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-lg">{icon}</div>

                  <div className="flex-1 text-sm font-medium">{label}</div>

                  {notificationCount && (
                        <div className="flex justify-center items-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                              {notificationCount}
                        </div>
                  )}
            </NavLink>
      );
};

export default CustomSidebarItem;
