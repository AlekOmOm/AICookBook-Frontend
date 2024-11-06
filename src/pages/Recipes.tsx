import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Heart } from 'lucide-react';
import type { Recipe, Filter } from '../types';

function Recipes() {
  const navigate = useNavigate();
  const location = useLocation();
  const isExploreMode = location.state?.mode === 'explore';
  const [filter, setFilter] = useState<Filter>({
    eater: 'default',
    workTime: { fast: false },
  });

  // Mock data - replace with API call
  const recipes: Recipe[] = [
    {
      id: '1',
      name: 'Vegetarian Pasta',
      type: 'bestUse',
      workTime: 30,
      ingredients: [],
      instructions: [],
      imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
      isFavorite: false,
      matchPercentage: 75,
    },
  ];

  // Filter recipes based on mode
  const filteredRecipes = isExploreMode
    ? recipes.filter(recipe => !recipe.isFavorite) // Show only new recipes in explore mode
    : recipes.filter(recipe => recipe.isFavorite); // Show only saved recipes in normal mode

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {isExploreMode ? 'Discover New Recipes' : 'Your Saved Recipes'}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <select
            value={filter.eater}
            onChange={(e) => setFilter({ ...filter, eater: e.target.value as Filter['eater'] })}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="default">All Recipes</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filter.workTime.fast}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  workTime: { ...filter.workTime, fast: e.target.checked },
                })
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Quick recipes only</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                <Heart
                  className={`h-5 w-5 ${
                    recipe.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                  }`}
                />
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {recipe.workTime} minutes
              </div>
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {recipe.matchPercentage}% match
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;