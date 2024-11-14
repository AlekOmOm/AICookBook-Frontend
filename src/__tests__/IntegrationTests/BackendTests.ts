
import { getRecipes } from '../../services/apiBackend';
import { Recipe } from '../../types';


describe('getRecipes', () => {
  test('should return at least one recipe from the database', async () => {
    const recipes = await getRecipes() as Recipe[];
    expect(recipes).toBeDefined();
    expect(Array.isArray(recipes)).toBe(true);
    expect(recipes.length).toBeGreaterThan(0);
  });
});