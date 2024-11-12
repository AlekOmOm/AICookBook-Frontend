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
  quantity: string;

  // field for UI, 
  present: boolean; 
}

export interface Filter {
  eater: 'default' | 'vegetarian' | 'vegan';
  workTime: {
    fast: boolean;
    maxMinutes?: number;
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
