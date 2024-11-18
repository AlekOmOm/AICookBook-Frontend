import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Recipe } from '../types';
import { convertDataToRecipeList } from '../types/index';
import { getRecipes } from '../services/apiBackend';
import { genNewRecipes } from '../services/apiWebClient';
import './css/Recipes.css';
import Card from './page-components/Card';

function Recipes() {
  const navigate = useNavigate();
  const location = useLocation();
  const isExploreMode = location.state?.mode === 'explore';
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = isExploreMode
            ? await genNewRecipes()
            : await getRecipes();

        setRecipes(convertDataToRecipeList(data as Recipe[]));
      } catch (err: unknown) {
        console.error('Error fetching recipes:', err);
        setError('Failed to fetch recipes');
      }
    }

    if (isExploreMode) {
      fetchRecipes();
    }
  }, []);



  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {isExploreMode ? 'Discover New Recipes' : 'Your Saved Recipes'}
          </h2>
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} navigate={navigate} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
