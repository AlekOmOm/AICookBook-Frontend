import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Heart } from 'lucide-react';
import type { Recipe } from '../types';
import { getRecipes } from '../services/apiBackend';
import { genNewRecipes } from '../services/apiWebClient';

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
        
        console.log('Fetched recipes:', data); // Log the fetched data

        // data to recipes

        interface Ingredient {
          name: string;
          amount: number;
          unit: string;
        }

        interface FetchedRecipe {
          id: number;
          name: string;
          instructions: string;
          tags: string;
          servings: number;
          prepTime: number;
          cookTime: number;
          totalTime: number;
          ingredients: Ingredient[];
        }

        const recipes: Recipe[] = (data as FetchedRecipe[]).map((recipe: FetchedRecipe) => ({
          id: recipe.id,
          name: recipe.name,
          instructions: recipe.instructions,
          tags: recipe.tags,
          servings: recipe.servings,
          prepTime: recipe.prepTime,
          cookTime: recipe.cookTime,
          totalTime: recipe.totalTime,
          ingredients: recipe.ingredients,
        }));


          /*
          id: number;
            name: string;
            instructions: string;
            tags: string;
            servings: number;
            prepTime: number;
            cookTime: number;
            totalTime: number;
            ingredients: Ingredient[];
          */

        setRecipes(recipes);
      } catch (err: unknown) {
        console.error('Error fetching recipes:', err);
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