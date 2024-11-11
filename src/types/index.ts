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
    id: string;
    name: string;
    instructions: string;
    tags: string;
    servings: number;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    ingredients: Ingredient[];
}

export interface Ingredient {
    id: string;
    name: string;
    amount: number;
    unit: string;
}

export interface Filter {
  eater: 'default' | 'vegetarian' | 'vegan';
  workTime: {
    fast: boolean;
    maxMinutes?: number;
  };
}