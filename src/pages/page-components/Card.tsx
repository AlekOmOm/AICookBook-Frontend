import React from 'react';
import { Recipe } from '../../types';
import { Heart, Clock } from 'lucide-react';
// some icon library, Adjust the import as necessary

interface CardProps {
  recipe: Recipe;
  navigate: (path: string) => void;
}

const Card: React.FC<CardProps> = ({ recipe, navigate }) => (
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
);

export default Card;