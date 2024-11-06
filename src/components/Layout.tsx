import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChefHat className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">AI Cookbook</h1>
          </div>
          <Navigation />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;