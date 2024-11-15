export type Intention = 'explore' | 'useKnown' | 'preferences';

export type RecipeType = 'bestUse' | 'goodAlternatives';

/*

    private String name;
    private String instructions;
    private String tags;
    private int servings;
    private int prepTime;
    private int cookTime;
    private int totalTime;


    private String name;
    private int amount;
    private String unit;
 */



export interface Recipe {
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

/*
// new fields:
    isFavorite: boolean;
    imageUrl: string;
    matchPercentage: number; // % of ingredients in pantry
*/

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface Filter {
  eater: string;
  workTime: {
    fast: boolean;
  };
}

/*
    private long id;
    private String name;
    private String instructions;
    private String tags;
    private int servings;
    private int prepTime;
    private int cookTime;
    private int totalTime;
*/

/* 
private long id;
private String name;
private int amount;
private String unit;
*/

export function convertDataToRecipeList(recipes: Recipe[]) {
  
  recipes.map((recipe: Recipe) => ({
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

  return recipes;
}

export async function convertDataToIngredients(data: Ingredient[]) {

  if (data === null || !Array.isArray(data)) {
    return [];
  }

  const ingredients: Ingredient[] = data.map((ingredient: Ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    amount: ingredient.amount,
    unit: ingredient.unit,
  }));

  return ingredients;
}