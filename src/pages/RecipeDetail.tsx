import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Heart, Check, AlertCircle } from 'lucide-react';
import type { Recipe, Ingredient } from '../types';
import { getRecipes } from '../services/apiBackend';

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getRecipes().then((recipes) => {
      setRecipe(recipes.find((recipe: Recipe) => recipe.id === Number(id)) || null)
    });
    
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const instructionsArray = recipe.instructions.split('.').filter(instruction => instruction.trim() !== '');

  const sortedIngredients = {
    missing: recipe.ingredients.filter(ing => !ing.present),
    available: recipe.ingredients.filter(ing => ing.present),
  };

  const IngredientItem = ({ ingredient }: { ingredient: Ingredient }) => (
    <li className="flex items-center py-2">
      {ingredient.present ? (
        <Check className="h-5 w-5 text-green-500 mr-2" />
      ) : (
        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
      )}
      <span className="text-gray-900">
        {ingredient.name} ({ingredient.amount} {ingredient.unit})
      </span>
    </li>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{recipe.name}</h1>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {recipe.totalTime} minutes
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients Column */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h2>
              
              {sortedIngredients.missing.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-amber-500 mb-2">Missing Ingredients</h3>
                  <ul className="space-y-2">
                    {sortedIngredients.missing.map((ingredient) => (
                      <IngredientItem key={ingredient.id} ingredient={ingredient} />
                    ))}
                  </ul>
                </div>
              )}

              {sortedIngredients.available.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-green-600 mb-2">Available Ingredients</h3>
                  <ul className="space-y-2">
                    {sortedIngredients.available.map((ingredient) => (
                      <IngredientItem key={ingredient.id} ingredient={ingredient} />
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Instructions Column */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {instructionsArray.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="font-medium text-indigo-600 mr-4">{index + 1}.</span>
                    <span className="text-gray-700">{instruction.trim()}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;