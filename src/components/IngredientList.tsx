import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Ingredient } from '../types';

interface IngredientListProps {
  ingredients: Ingredient[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function IngredientList({ ingredients, onDelete, onToggle }: IngredientListProps) {
  return (
    <div className="mt-6">
      <div className="bg-white shadow-sm rounded-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  
                  onChange={() => onToggle(ingredient.id)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-gray-900">{ingredient.name}</span>
                {ingredient.amount && ingredient.unit && (
                  <span className="ml-2 text-gray-500">
                    ({ingredient.amount} {ingredient.unit})
                  </span>
                )}
              </div>
              <button
                onClick={() => onDelete(ingredient.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientList;