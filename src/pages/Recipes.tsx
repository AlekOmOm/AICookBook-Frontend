import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Heart } from 'lucide-react';
import type { Recipe, Filter } from '../types';
import { getRecipes } from '../services/apiBackend';
import { genNewRecipes } from '../services/apiWebClient';

function Recipes() {
  const navigate = useNavigate();
  const location = useLocation();
  const isExploreMode = location.state?.mode === 'explore';
  const [filter, setFilter] = useState<Filter>({
    eater: 'default',
    workTime: { fast: false },
  });

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data: Recipe[] = isExploreMode 
          ? await genNewRecipes()
          : await getRecipes();
        
        setRecipes(data);
      } catch (err: unknown) {
        setError('Failed to fetch recipes');
      }
    }
    fetchRecipes();
  }, [isExploreMode]);

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

      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {recipe.prepTime} minutes
              </div>
              <div className="mt-4">
                <h4 className='text-sm font-semibold text-gray-900'>Tags</h4>
                <p className="text-sm text-gray-500">{recipe.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;