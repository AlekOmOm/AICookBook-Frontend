import Recipes from "../pages/Recipes";
import { getRecipes } from "../services/apiBackend";

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

describe('getRecipes', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should return recipes on successful retrieval', async () => {
    const mockRecipes = [
      { id: 1, name: 'Recipe 1', instructions: '...', tags: '...', servings: 4, prepTime: 10, cookTime: 20, totalTime: 30, ingredients: [] },
      { id: 2, name: 'Recipe 2', instructions: '...', tags: '...', servings: 2, prepTime: 5, cookTime: 15, totalTime: 20, ingredients: [] },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockRecipes),
      })
    ) as jest.Mock;

    const recipes = await getRecipes();
    expect(recipes).toBeDefined();
    expect(Array.isArray(recipes)).toBe(true);
    expect(recipes).toEqual(mockRecipes);
  });

  test('should handle errors gracefully', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    ) as jest.Mock;

    await expect(getRecipes()).rejects.toThrow('Failed to fetch');
  });

  console.log('getRecipes tests passed!'+ Recipes);
});