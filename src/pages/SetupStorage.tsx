import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IngredientInput from '../components/IngredientInput';
import IngredientList from '../components/IngredientList';
import type { Ingredient } from '../types';
import {convertDataToIngredients} from '../types/index'
import { getIngredients } from '../services/apiBackend';

function Setup() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = getIngredients();

        console.log('Fetched ingredients:', data); // Log the fetched data

        setIngredients(await convertDataToIngredients(data));
        
      } catch (err: unknown) {
        console.error('Error fetching ingredients for storage:', err);
        setError('Failed to fetch ingredients');
      }      
    }
    
    fetchRecipes();
  }, []);

  const handleAddIngredient = (newIngredient: Ingredient) => {
    setIngredients([...ingredients, { ...newIngredient }]);
  };

  const handleDeleteIngredient = (id: number) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const handleToggleIngredient = (id: number) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id
          ? { ...ingredient, present: !ingredient.present }
          : ingredient
      )
    );
  };

  const handleSave = () => {
    // TODO: Save ingredients to backend
    navigate('/home');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Your Ingredients</h2>
        
        {error && <div className="text-red-500">{error}</div>}
        <IngredientInput onAdd={handleAddIngredient} />
        <IngredientList
          ingredients={ingredients}
          onDelete={handleDeleteIngredient}
          onToggle={handleToggleIngredient}
        />
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setup;

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
