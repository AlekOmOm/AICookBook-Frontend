import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

function Navigation() {
  const links = [
    { to: '/setup', label: 'Setup' },
    { to: '/home', label: 'Home' },
    { to: '/recipes', label: 'Recipes' },
  ];

  return (
    <nav className="flex space-x-4">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              'px-3 py-2 rounded-md text-sm font-medium',
              isActive
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            )
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;