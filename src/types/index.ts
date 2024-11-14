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
