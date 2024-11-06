import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Book, Settings } from 'lucide-react';
import type { Intention } from '../types';

function Home() {
  const navigate = useNavigate();

  const handleIntentionSelect = (intention: Intention) => {
    if (intention === 'preferences') {
      // Handle preferences
      return;
    }
    // Store intention and navigate to recipes with the appropriate mode
    navigate('/recipes', { 
      state: { 
        mode: intention === 'explore' ? 'explore' : 'saved' 
      } 
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome back!</h2>
        <p className="text-gray-600 mb-8">What would you like to do today?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleIntentionSelect('explore')}
            className="flex items-center p-6 border-2 border-transparent bg-indigo-50 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <Compass className="h-8 w-8 text-indigo-600 mr-4" />
            <div className="text-left">
              <h3 className="font-semibold text-lg text-gray-900">Explore</h3>
              <p className="text-sm text-gray-600">Discover new recipes based on your preferences</p>
            </div>
          </button>

          <button
            onClick={() => handleIntentionSelect('useKnown')}
            className="flex items-center p-6 border-2 border-transparent bg-green-50 rounded-lg hover:border-green-500 transition-colors"
          >
            <Book className="h-8 w-8 text-green-600 mr-4" />
            <div className="text-left">
              <h3 className="font-semibold text-lg text-gray-900">Use Known</h3>
              <p className="text-sm text-gray-600">Cook with your favorite recipes</p>
            </div>
          </button>
        </div>

        <button
          onClick={() => handleIntentionSelect('preferences')}
          className="mt-6 w-full flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Settings className="h-5 w-5 mr-2" />
          Preferences
        </button>
      </div>
    </div>
  );
}

export default Home;