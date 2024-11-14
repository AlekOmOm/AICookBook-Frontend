
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

// http://localhost:8080/api/recipes


describe('getRecipes', () => {
  test('should handle errors gracefully', async () => {
    
    const res = await fetch('http://localhost:8080/api/recipes');

    expect(res.status).toBe(200);
    expect(res.ok).toBe(true);

    const data = await res.json();

    expect(data).toBeDefined();
    // print data
    console.log(data);
    
  });
});