export type Intention = 'explore' | 'useKnown' | 'preferences';

export type RecipeType = 'bestUse' | 'goodAlternatives';

export interface Recipe {
  id: string;
  name: string;
  type: RecipeType;
  workTime: number;
  ingredients: Ingredient[];
  instructions: string[];
  imageUrl: string;
  isFavorite: boolean;
  matchPercentage: number;
}

export interface Ingredient {
  id: string;
  name: string;
  present: boolean;
  amount?: string;
  unit?: string;
}

export interface Filter {
  eater: 'default' | 'vegetarian' | 'vegan';
  workTime: {
    fast: boolean;
    maxMinutes?: number;
  };
}