// src/components/Recipe.tsx
import React from 'react';
import IngredientList from './IngredientsList';
import { IngredientProps } from './Ingredient';
import Instructions from './Instructions';

export interface RecipeProps {
  title: string;
  ingredients: IngredientProps[];
  steps: string[];
}

export default function Recipe({ title, ingredients, steps }: RecipeProps) {
  return (
    <section className="recipe">
      <h2>{title}</h2>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
